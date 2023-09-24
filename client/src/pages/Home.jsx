import React, { useState } from 'react';
import { RiPlayFill } from 'react-icons/ri';
import deptImage from '../assets/images/coolDept.jpeg';
import CustomModal from '../components/CustomModal';
export default function Home({
  isVisible,
  isSignUpVisible,
  onClose,
  onSignUpClose,
}) {
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
      <CustomModal isVisible={isVisible} onClose={onClose}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Sign in and keep collecting!
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label htmlFor="email" className=""></label>{' '}
              <input
                type="email"
                name="email"
                // value={formState.email}
                // onChange={handleInputLoginChange}
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
                // value={formState.password}
                // onChange={handleInputLoginChange}
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
      {/* <div className="bg-yellow-300 md:col-span-8 h-[800px]">image</div> */}
    </section>
  );
}
