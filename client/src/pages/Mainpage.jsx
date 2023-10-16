import React from 'react';
import { Navigate } from 'react-router';
import Auth from '../utils/auth';
export default function Mainpage() {
  if (!Auth.loggedIn()) return <Navigate to="/" />;
  return (
    <div>
      <h1>Main</h1>
    </div>
  );
}
