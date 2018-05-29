import React from 'react';
import { Route } from 'react-router-dom';

import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';

export default () => {
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};
