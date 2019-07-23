import { INITIAL_STATE, reducer, Creators } from '../detailMovie';

describe('ducks home', () => {
  describe('Quando executar as actions', () => {
    it('Deve alterar o estado para movieDetailRequest', () => {
      const action = Creators.movieDetailRequest();
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
      });
    });

    it('Deve alterar o estado para movieDetailSuccess', () => {
      const data = [];
      const action = Creators.movieDetailSuccess(data);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        data,
      });
    });
  });
});
