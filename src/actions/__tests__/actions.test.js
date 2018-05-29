import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  const testType = SAVE_COMMENT;
  const testPayload = 'New Comment';

  it('should return the correct type', () => {
    const action = saveComment();

    expect(action.type).toEqual(testType);
  });

  it('should produce action with correct payload', () => {
    const action = saveComment(testPayload);

    expect(action.payload).toEqual(testPayload);
  });
});
