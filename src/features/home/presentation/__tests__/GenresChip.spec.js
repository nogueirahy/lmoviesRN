import React from 'react';
import { render } from 'react-native-testing-library';

import GenresChip from '../GenresChip';

describe('GenresChip', () => {
  const props = {
    genres: [{
      id: 1,
      name: 'Drama',
    }],
  };

  it('deve renderizar corretamente', () => {
    const tree = render(<GenresChip {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
