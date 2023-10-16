import React from 'react';
import CustomModal from './CustomModal';
export default function SignUpModal({ isSignUpVisible, onSignUpClose }) {
  return (
    <CustomModal isVisible={isSignUpVisible} onClose={onSignUpClose}>
      <div className="py-4 px-6 lg:px-8 text-left">
        <h3 className="mb-4 text-xl font-medium max-[420px]:text-base  text-gray-900 ">
          Create your account!
        </h3>
        <form className="space-y-4" action="#">
          <div>
            <label htmlFor="username" className=""></label>{' '}
            <input
              type="text"
              name="username"
              id="username"
              // value={username}
              // onChange={handleSignUpFormChange}
              className="bg-gra-50 border  border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2"
              placeholder="Username"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="firstName" className=""></label>{' '}
            <input
              type="text"
              name="firstName"
              id="firstName"
              // value={username}
              // onChange={handleSignUpFormChange}
              className="bg-gra-50 border  border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2"
              placeholder="First name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="lastName" className=""></label>{' '}
            <input
              type="text"
              name="lastName"
              id="lastName"
              // value={username}
              // onChange={handleSignUpFormChange}
              className="bg-gra-50 border  border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2"
              placeholder="Last name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="email" className=""></label>{' '}
            <input
              type="email"
              name="email"
              id="email"
              // value={email}
              // onChange={handleSignUpFormChange}
              className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2"
              placeholder="name@email.com"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="password" className=""></label>{' '}
            <input
              type="password"
              name="password"
              id="password"
              // value={password}
              // onChange={handleSignUpFormChange}
              className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2"
              placeholder="Enter password"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="confirmPassword" className=""></label>{' '}
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              // value={confirmPasswordState}
              // onChange={handleSignUpFormChange}
              className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2"
              placeholder="Confirm password"
              required
            ></input>
          </div>
          <button
            type="submit"
            // onClick={handleSignUpSubmit}
            className="w-full text-white bg-primary hover:bg-secondary 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
              rounde-lg text-sm px-5 py-2 text-center"
          >
            Create account
          </button>
          <div className="text-sm font-medium text-gray-500">
            Already have an account?{' '}
            <button
              // onClick={() => {
              //   setShowSignUpModal(false);
              //   setShowLoginModal(true);
              // }}
              className="text-primary hover:underline hover:text-gray-500"
            >
              Log in to your account
            </button>
          </div>
        </form>
      </div>
    </CustomModal>
  );
}
