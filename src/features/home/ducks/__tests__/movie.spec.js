import { INITIAL_STATE, reducer, Creators } from '../movie';

describe('ducks home', () => {
  describe('Quando executar as actions', () => {
    it('Deve alterar o estado do id do filme', () => {
      const id = 14230;
      const action = Creators.selectedMovie(id);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        id,
      });
    });

    it('Deve alterar o estado para upcomingRequest', () => {
      const page = 1;
      const action = Creators.upcomingRequest(page);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        page,
        isFetching: true,
      });
    });

    it('Deve alterar o estado para upcomingSuccess', () => {
      const upcomingData = [];
      const upcomingTotalPages = 12;
      const action = Creators.upcomingSuccess(upcomingData, upcomingTotalPages);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        upcomingData,
        upcomingTotalPages,
        isFetching: false,
      });
    });

    it('Deve alterar o estado para popularRequest', () => {
      const page = 1;
      const action = Creators.popularRequest(page);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        page,
        isFetching: true,
      });
    });

    it('Deve alterar o estado para popularSuccess', () => {
      const popularData = [];
      const popularTotalPages = 12;
      const action = Creators.popularSuccess(popularData, popularTotalPages);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        popularData,
        popularTotalPages,
        isFetching: false,
      });
    });

    it('Deve alterar o estado para topRatedRequest', () => {
      const page = 1;
      const action = Creators.topRatedRequest(page);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        page,
        isFetching: true,
      });
    });

    it('Deve alterar o estado para topRatedSuccess', () => {
      const topRatedData = [];
      const topRatedTotalPages = 12;
      const action = Creators.topRatedSuccess(topRatedData, topRatedTotalPages);
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        topRatedData,
        topRatedTotalPages,
        isFetching: false,
      });
    });

    it('Deve alterar o estado para movieFailure', () => {
      const action = Creators.failure();
      expect(reducer(undefined, action)).toEqual({
        ...INITIAL_STATE,
        isFetching: false,
      });
    });
  });
});
