import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const PostListPage: React.FC = () => {
  return (
    <div className="container-post-list">
      <div className="post">
        <p className="post-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          tempora sint reprehenderit sit ut illo placeat. Excepturi, explicabo
          laborum, necessitatibus repellat error doloribus molestias, saepe quas
          voluptatum facere voluptates suscipit!
        </p>
        <div className="button-container">
          <Link to="/" id="delete-button" className="button">
            APAGAR
          </Link>
          <Link to="/" id="edit-button" className="button">
            EDITAR
          </Link>
          <Link to="/" id="view-button" className="button">
            VISUALIZAR
          </Link>
        </div>
      </div>
      <div className="post">
        <p className="post-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          tempora sint reprehenderit sit ut illo placeat. Excepturi, explicabo
          laborum, necessitatibus repellat error doloribus molestias, saepe quas
          voluptatum facere voluptates suscipit!
        </p>
        <Link to="/">APAGAR</Link>
        <Link to="/">EDITAR</Link>
        <Link to="/">VISUALIZAR</Link>
      </div>
    </div>
  );
};

export default PostListPage;
