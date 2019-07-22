import { put, call } from 'redux-saga/effects';

import { handleUpcomingRequest } from '../sagas';
import { MovieActionCreators } from '../ducks';
import { api } from '../../../api';
import { upcomingData } from '../../../__mocks__';

jest.mock('../../../api/api', () => ({
  getUpcoming: jest.fn(),
}));

describe('Quando executar as sagas da feature home', () => {
  let gen;
  const page = 1;
  const action = {
    page,
  };
  describe('Quando executar as ações dos filmes', () => {
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
});
