import React from 'react';
import PageHeader from '../../components/page-header';

interface PageHeaderProps {
  title: string;
}

const PostForm: React.FC<PageHeaderProps> = () => {
  return (
    <div id="page-post-form" className="container">
      <PageHeader title="Título do parâmetro" />
    </div>
  );
};

export default PostForm;
