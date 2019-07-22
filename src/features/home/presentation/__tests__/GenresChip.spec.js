import React from 'react';
import { render } from 'react-native-testing-library';

import GenresChip from '../GenresChip';

describe('GenresChip', () => {
  it('deve renderizar corretamente', () => {
    const tree = render(<GenresChip />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
