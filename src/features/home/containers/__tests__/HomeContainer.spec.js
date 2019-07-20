import React from "react";

import { render, act } from "react-native-testing-library";

import { HomeContainer } from "../HomeContainer";
import { upcomingData } from "../../../../__mocks__";

describe("HomeContainer", () => {
  let wrap;
  let expectedPage;
  const props = {
    movieRequest: jest.fn(),
    totalPages: 2,
    isFetching: false,
    data: upcomingData
  };

  beforeEach(() => {
    wrap = render(<HomeContainer {...props} />);
  });

  afterEach(() => {
    props.movieRequest.mockClear();
  });

  describe("Quando montar o componente", () => {
    expectedPage = 1;
    it("Deve chamar a action de requisição", () => {
      expect(props.movieRequest).toHaveBeenCalledWith(expectedPage);
    });
    it("Quando o numero de paginas atingir o numero total de paginas não deve fazer requisicão", () => {
      expectedPage = 2;
      act(() => {
        wrap.getByTestId("flatlist")._fiber.stateNode.props.onEndReached();
      });
      act(() => {
        wrap.getByTestId("flatlist")._fiber.stateNode.props.onEndReached();
      });

      expect(props.movieRequest).toHaveBeenCalledWith(expectedPage);
      expect(props.movieRequest).toHaveBeenCalledTimes(2);
    });
  });
});
