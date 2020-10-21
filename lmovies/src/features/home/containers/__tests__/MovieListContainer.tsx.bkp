import React from 'react';

import { render } from 'react-native-testing-library';

import MovieList from '../MovieListContainer';
import { upcomingData } from '../../../../__mocks__';

describe('MovieListContainer', () => {
  const props = {
    title: 'title',
    data: upcomingData,
    nextPage: jest.fn(),
    onPress: jest.fn(),
  };

  describe('Quando montar o componente', () => {
    it('deve renderizar corretamente', () => {
      const tree = render(<MovieList {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
