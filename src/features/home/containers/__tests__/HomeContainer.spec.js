import HomeContainer from "../HomeContainer";
import { renderWithRedux, upcomingData } from "../../../../__mocks__";

describe("HomeContainer", () => {
  let wrap;

  const state = {
    movie: {
      movieRequest: jest.fn(),
      totalPages: 2,
      isFetching: false,
      data: upcomingData
    }
  };

  beforeEach(() => {
    wrap = renderWithRedux(HomeContainer, state);
    onEndReached = () =>
      wrap.act(() => {
        wrap.getByTestId("flatlist")._fiber.stateNode.props.onEndReached();
      });
  });

  afterEach(() => {
    state.movie.movieRequest.mockClear();
  });

  describe("Quando montar o componente", () => {
    let expectAction;

    it("Deve chamar a action de requisição", () => {
      const action = wrap.store.getActions();
      expectAction = { type: "MOVIE_REQUEST", page: 1 };
      expect(action.length).toEqual(1);
      expect(action[0]).toEqual(expectAction);
    });
    it("Quando atingir todos os items caso tenha mais paginas deve chamar a action de requisição", () => {
      onEndReached();
      onEndReached();
      const action = wrap.store.getActions();
      expect(action.length).toEqual(2);
      expect(action[0]).toEqual(expectAction);
      expect(action[1]).toEqual({ ...expectAction, page: 2 });
    });
  });
});
