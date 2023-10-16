import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Mainpage from './pages/Mainpage';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
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
    <ApolloProvider client={client}>
      <Router>
        <Header
          handleLoginModal={handleLoginModal}
          handleSignUpModal={handleSignUpModal}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                isVisible={showLoginModal}
                isSignUpVisible={showSignUpModal}
                onClose={() => setShowLoginModal(false)}
                onSignUpClose={() => setShowSignUpModal(false)}
              />
            }
          />
          <Route path="/main" element={<Mainpage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
