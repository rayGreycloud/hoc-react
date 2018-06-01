import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import requireAuth from 'components/requireAuth';

import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  handleFetch = e => {
    e.preventDefault();

    this.props.fetchComments();
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button className="submit-comment">Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.handleFetch}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

CommentBox.propTypes = {
  auth: PropTypes.bool.isRequired,
  saveComment: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired
};

export default connect(null, actions)(requireAuth(CommentBox));
