import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const WelcomePage: React.FC = () => {
  return (
    <div className="container">
      <h2 className="message">Olá, seja bem-vindo ao post-man!</h2>
      <div>
        <Link to="/post-list" className="button">
          VER POSTS
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
