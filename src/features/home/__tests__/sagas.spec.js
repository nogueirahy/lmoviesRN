import { put, call, select } from 'redux-saga/effects';

import {
  handleUpcomingRequest, handlePopularRequest, handleTopRatedRequest, handleMovieDetailRequest,
} from '../sagas';
import { idSelector } from '../selectors';
import { MovieActionCreators, MovieDetailActionCreators } from '../ducks';
import { api } from '../../../api';
import { upcomingData } from '../../../__mocks__';

jest.mock('../../../api/api', () => ({
  getUpcoming: jest.fn(),
  getPopular: jest.fn(),
  getTopRated: jest.fn(),
  getDetailMovie: jest.fn(),
}));

describe('Quando executar as sagas da feature home', () => {
  let gen;
  const page = 1;
  const action = {
    page,
  };

  describe('Quando executar as ações do filme para Upcoming', () => {
    beforeEach(() => {
      gen = handleUpcomingRequest(action);
    });

    it('Deve obter os dados dos filmes da API e chamar a ação de sucesso', () => {
      const mockResponse = {
        ok: true,
        data: {
          results: upcomingData,
        },
      };
      expect(gen.next(api.getUpcoming(page)).value).toEqual(
        call(api.getUpcoming, page),
      );
      expect(api.getUpcoming).toBeCalledWith(page);

      expect(gen.next(mockResponse).value).toEqual(
        put(MovieActionCreators.upcomingSuccess(mockResponse.data.results)),
      );
      expect(gen.next().done).toBeTruthy();
    });

    it('Deve obter falha dos filmes da API e chamar a ação de falha', () => {
      const mockFailureResponse = {
        ok: false,
      };

      expect(gen.next(api.getUpcoming(page)).value).toEqual(
        call(api.getUpcoming, page),
      );
      expect(api.getUpcoming).toBeCalledWith(page);

      expect(gen.next(mockFailureResponse).value).toEqual(
        put(MovieActionCreators.failure()),
      );
      expect(gen.next().done).toBeTruthy();
    });
  });


  describe('Quando executar as ações do filme para Popular', () => {
    beforeEach(() => {
      gen = handlePopularRequest(action);
    });

    it('Deve obter os dados dos filmes da API e chamar a ação de sucesso', () => {
      const mockResponse = {
        ok: true,
        data: {
          results: upcomingData,
        },
      };
      expect(gen.next(api.getPopular(page)).value).toEqual(
        call(api.getPopular, page),
      );
      expect(api.getPopular).toBeCalledWith(page);

      expect(gen.next(mockResponse).value).toEqual(
        put(MovieActionCreators.popularSuccess(mockResponse.data.results)),
      );
      expect(gen.next().done).toBeTruthy();
    });

    it('Deve obter falha dos filmes da API e chamar a ação de falha', () => {
      const mockFailureResponse = {
        ok: false,
      };

      expect(gen.next(api.getPopular(page)).value).toEqual(
        call(api.getPopular, page),
      );
      expect(api.getPopular).toBeCalledWith(page);

      expect(gen.next(mockFailureResponse).value).toEqual(
        put(MovieActionCreators.failure()),
      );
      expect(gen.next().done).toBeTruthy();
    });
  });


  describe('Quando executar as ações do filme para TopRated', () => {
    beforeEach(() => {
      gen = handleTopRatedRequest(action);
    });

    it('Deve obter os dados dos filmes da API e chamar a ação de sucesso', () => {
      const mockResponse = {
        ok: true,
        data: {
          results: upcomingData,
        },
      };
      expect(gen.next(api.getTopRated(page)).value).toEqual(
        call(api.getTopRated, page),
      );
      expect(api.getTopRated).toBeCalledWith(page);

      expect(gen.next(mockResponse).value).toEqual(
        put(MovieActionCreators.topRatedSuccess(mockResponse.data.results)),
      );
      expect(gen.next().done).toBeTruthy();
    });

    it('Deve obter falha dos filmes da API e chamar a ação de falha', () => {
      const mockFailureResponse = {
        ok: false,
      };

      expect(gen.next(api.getTopRated(page)).value).toEqual(
        call(api.getTopRated, page),
      );
      expect(api.getTopRated).toBeCalledWith(page);

      expect(gen.next(mockFailureResponse).value).toEqual(
        put(MovieActionCreators.failure()),
      );
      expect(gen.next().done).toBeTruthy();
    });
  });


  describe('Quando executar as ações de detalhes do filme', () => {
    const id = 12345;

    beforeEach(() => {
      gen = handleMovieDetailRequest();
    });

    it('Deve obter os dados dos filmes da API e chamar a ação de sucesso', () => {
      const mockResponse = {
        ok: true,
        data: {},
      };
      expect(gen.next(id).value).toEqual(select(idSelector));

      expect(gen.next(id).value).toEqual(
        call(api.getDetailMovie, id),
      );

      expect(gen.next(mockResponse).value).toEqual(
        put(MovieDetailActionCreators.movieDetailSuccess(mockResponse.data)),
      );
      expect(gen.next().done).toBeTruthy();
    });

    it('Deve obter falha dos filmes da API e chamar a ação de falha', () => {
      const mockFailureResponse = {
        ok: false,
      };

      expect(gen.next(id).value).toEqual(select(idSelector));

      expect(gen.next(id).value).toEqual(
        call(api.getDetailMovie, id),
      );
      expect(gen.next(mockFailureResponse).value).toEqual(
        put(MovieActionCreators.failure()),
      );
      expect(gen.next().done).toBeTruthy();
    });
  });
});
