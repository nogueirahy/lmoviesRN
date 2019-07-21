import { INITIAL_STATE, reducer, Creators } from '../movie';

describe('ducks home', () => {
  describe('Quando executar as actions', () => {
    it('Deve alterar o estado para movieRequest', () => {
      const page = 1;
      const action = Creators.movieRequest(page);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        page,
        isFetching: true,
      });
    });

    it('Deve alterar o estado para movieSuccess', () => {
      const data = [];
      const action = Creators.movieSuccess(data);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        data,
        isFetching: false,
      });
    });

    it('Deve alterar o estado para movieFailure', () => {
      const action = Creators.movieFailure();
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        isFetching: false,
      });
    });
  });
});
