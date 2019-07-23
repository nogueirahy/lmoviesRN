import HomeContainer from '../HomeContainer';
import MovieList from '../MovieListContainer';
import { renderWithRedux, upcomingData } from '../../../../__mocks__';
import { navigateToDetails } from '../../../../navigation/NavigationHelpers';

jest.mock('../../../../navigation/NavigationHelpers', () => ({
  navigateToDetails: jest.fn(),
}));

describe('HomeContainer', () => {
  let wrap;
  const state = {
    movie: {
      totalPages: 2,
      data: upcomingData,
    },
  };

  beforeEach(() => {
    wrap = renderWithRedux(HomeContainer, state);
  });

  describe('Quando montar o componente', () => {
    it('Deve chamar as actions de requisição', () => {
      const action = wrap.store.getActions();
      expect(action.length).toEqual(3);
      expect(action[0]).toEqual({ type: 'UPCOMING_REQUEST', page: 1 });
      expect(action[1]).toEqual({ type: 'POPULAR_REQUEST', page: 1 });
      expect(action[2]).toEqual({ type: 'TOP_RATED_REQUEST', page: 1 });
    });
    it('Quando usuario selecionar um filme deve chamar a função doNavigateToDetails', () => {
      wrap.store.clearActions();
      const MovieListInstance = wrap.getAllByType(MovieList);
      wrap.fireEvent.press(MovieListInstance[0], { id: '1234' });

      const action = wrap.store.getActions();

      expect(action.length).toEqual(1);
      expect(action[0].type).toEqual('SELECTED_MOVIE');
      expect(navigateToDetails).toHaveBeenCalled();
    });
  });
});
