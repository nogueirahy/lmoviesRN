import React from 'react';
import { render } from 'react-native-testing-library';

import DetailHeader from '../DetailHeader';

describe('DetailHeader', () => {
  it('deve renderizar corretamente', () => {
    const tree = render(<DetailHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
