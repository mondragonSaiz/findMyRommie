import React from 'react';
import CustomModal from './CustomModal';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
export default function LoginModal({
  isVisible,
  onClose,
  formState,
  setFormState,
}) {
  const [login, { error, data }] = useMutation(LOGIN_USER, {
    onError: (error) => {
      // Handle the error here
      console.error('ERROR**', error);

      //   if (
      //     error.message.includes('No user found with this email address') ||
      //     error.message.includes('Incorrect credentials')
      //   ) {
      //     setAlertMessage('Incorrect email or password. Please try again.');
      //     setShowAlert(true);
      //   }

      // if (error) {
      //   setAlertMessage(
      //     'Could not authenticate user. Please check your credentials.'
      //   );
      //   setShowAlert(true);
      // }
    },
    onCompleted: (data) => {
      // Handle successful login here
      console.log(data);
      if (data && data.login && data.login.token) {
        Auth.login(data.login.token);
      }
    },
  });
  const handleInputLoginChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      // Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      return;
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
    <CustomModal isVisible={isVisible} onClose={onClose}>
      <div className="py-6 px-6 lg:px-8 text-left">
        <h3 className="mb-4 text-xl font-medium text-gray-900">
          Sign in and keep collecting!
        </h3>
        <form onSubmit={handleFormSubmit} className="space-y-6" action="#">
          <div>
            <label htmlFor="email" className=""></label>{' '}
            <input
              type="email"
              value={formState.email}
              name="email"
              onChange={handleInputLoginChange}
              id="email"
              className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              placeholder="name@email.com"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="password" className=""></label>{' '}
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleInputLoginChange}
              id="password"
              className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              placeholder="••••••••"
              required
            ></input>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-primary hover:bg-secondary
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
              rounde-lg text-sm px-5 py-2.5 text-center"
          >
            Log in to your account
          </button>
          <div className="text-sm font-medium text-gray-500">
            Not registered?{' '}
            <button
              // onClick={() => {
              //   setShowLoginModal(false);
              //   setShowSignUpModal(true);
              // }}
              className="text-primary hover:underline hover:text-secondary"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </CustomModal>
  );
}
