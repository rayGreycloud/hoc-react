import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('Comment Box', () => {
  it('should have a text area and 2 buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
  });
});

describe('Text area', () => {
  const testData = 'New Comment';

  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: testData }
    });
    wrapped.update();
  });

  it('should have allow user input', () => {
    // Assert the textarea value has changed
    expect(wrapped.find('textarea').prop('value')).toEqual(testData);
  });

  it('should clear when the user submits the form', () => {
    // Find form; simulate submit event
    wrapped.find('form').simulate('submit');
    wrapped.update();

    // Assert the textarea has been cleared
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
