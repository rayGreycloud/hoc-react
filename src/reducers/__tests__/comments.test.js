import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

describe('Comments Reducer', () => {
  const testData = 'New Comment';
  const UNK_TYPE = 'unknown_type';

  it('should handle actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: testData
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([testData]);
  });

  it('should handle actions of unknown type', () => {
    const action = {
      type: UNK_TYPE,
      payload: testData
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([]);
  });
});
