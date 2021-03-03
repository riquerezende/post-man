import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostListPage from './pages/post-list';
import WelcomePage from './pages/welcome';

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/post-list" component={PostListPage} />
    </BrowserRouter>
  );
}

export default Routes;
