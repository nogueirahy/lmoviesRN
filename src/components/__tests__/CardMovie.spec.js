import React from 'react';
import { render } from 'react-native-testing-library';

import CardMovie from '../CardMovie';

describe('CardMovie', () => {
  const props = {
    title: 'The Lion King',
    imageUrl: 'https://image.tmdb.org/t/p/w500/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg"',
    voteAverage: 7.7,
    releaseDate: 'Jul 20th 19',
    onPress: jest.fn(),
  };

  it('deve renderizar corretamente', () => {
    const tree = render(<CardMovie {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
