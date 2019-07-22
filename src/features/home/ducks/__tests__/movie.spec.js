import { INITIAL_STATE, reducer, Creators } from '../movie';

describe('ducks home', () => {
  describe('Quando executar as actions', () => {
    it('Deve alterar o estado para movieRequest', () => {
      const page = 1;
      const action = Creators.upcomingRequest(page);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        page,
      });
    });

    it('Deve alterar o estado para movieSuccess', () => {
      const upcomingData = [];
      const upcomingTotalPages = 12;
      const action = Creators.upcomingSuccess(upcomingData, upcomingTotalPages);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        upcomingData,
        upcomingTotalPages,
      });
    });

    it('Deve alterar o estado para movieFailure', () => {
      const action = Creators.failure();
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
      });
    });
  });
});
