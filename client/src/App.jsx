import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const handleLoginModal = () => {
    setShowLoginModal(true);
  };
  const handleSignUpModal = () => {
    setShowSignUpModal(true);
  };

  return (
    <div className="">
      <Header
        handleLoginModal={handleLoginModal}
        handleSignUpModal={handleSignUpModal}
      />
      <Home
        isVisible={showLoginModal}
        isSignUpVisible={showSignUpModal}
        onClose={() => setShowLoginModal(false)}
        onSignUpClose={() => setShowSignUpModal(false)}
      />
    </div>
  );
}

export default App;
