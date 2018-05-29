import React from 'react';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';

export default () => {
  return (
    <div>
      <h2>App Component</h2>
      <CommentBox />
      <CommentList />
    </div>
  );
};
