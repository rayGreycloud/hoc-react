import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

describe('Comments Integration', () => {
  let wrapped;

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{ name: 'Fetched 1' }, { name: 'Fetched 2' }]
    });
  });

  afterEach(() => {
    moxios.uninstall();
    wrapped.unmount();
  });

  it('should fetch and display a list of comments', done => {
    wrapped = mount(
      <Root>
        <App />
      </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
      wrapped.update();

      expect(wrapped.find('li').length).toEqual(2);
      done();
    });
  });
});
