import React, { useState } from 'react';
import { RiPlayFill } from 'react-icons/ri';
import deptImage from '../assets/images/coolDept.jpeg';
import CustomModal from '../components/CustomModal';
import Auth from '../utils/auth';
import SignUpModal from '../components/SignUpModal';
import LoginModal from '../components/LoginModal';
import { Navigate } from 'react-router';
export default function Home({
  isVisible,
  isSignUpVisible,
  onClose,
  onSignUpClose,
}) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [username, setUsername] = useState('');
  const [fistName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (Auth.loggedIn()) return <Navigate to="/main" />;
  return (
    <section className=" h-[90vh] grid grid-cols-1 md:grid-cols-8">
      <div className=" md:col-span-5 flex items-center justify-center p-12">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-[4rem] md:leading-[7.5rem]">
            Click, Search, Match, Connect,{' '}
            <span className="text-primary px-8  border-8 border-primary text-3xl md:text-7xl">
              Roomie Success
            </span>
          </h1>
          <p className="text-gray-500 text-xl leading-8">
            RoomieSearch is the ultimate roommate-finding app designed to
            simplify your search for the perfect living companion. Whether
            you're a student looking for a dorm mate, a young professional in
            need of a co-living partner, or anyone in between, RoomieHunt
            connects you with compatible roommates
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-primary rounded-lg text-white px-8 py-2 border-3 hover:bg-red-400">
              Get Started
            </button>
            <button className="flex text-left py-2 px-8 items-center gap-4">
              <RiPlayFill className="bg-red-200 p-4  box-content rounded-full hover:bg-red-400" />
              <span className="text-gray-500">
                Watch our <br />
                introduction video
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  md:col-span-3">
        <img src={deptImage} className="w-26 h-26 px-3 rounded-full" />
        <p className="text-gray-500 text-xl leading-8 mb-8">
          Find your perfect spot, and rock with it!
        </p>
      </div>
      <LoginModal
        isVisible={isVisible}
        onClose={onClose}
        formState={formState}
        setFormState={setFormState}
      />
      <SignUpModal
        isSignUpVisible={isSignUpVisible}
        onSignUpClose={onSignUpClose}
      />
      {/* <div className="bg-yellow-300 md:col-span-8 h-[800px]">image</div> */}
    </section>
  );
}
