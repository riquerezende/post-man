import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (title, children) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">Voltar</Link>
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
