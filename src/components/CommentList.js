import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => <li key={comment}>{comment}</li>);
  }

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentList);
