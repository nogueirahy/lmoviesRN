import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Card } from 'react-native-paper';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import { CardMovieStyle } from './styles';

function CardMoviePlaceholder({ numItems }) {
  function createCard() {
    return Array.from(Array(numItems).keys()).map((el) => (
      <Card key={el} style={[CardMovieStyle.container, { height: 264 }]}>
        <Placeholder Animation={Fade}>
          <PlaceholderMedia style={{ height: '76%', width: '100%' }} />
          <PlaceholderLine
            style={{ marginTop: 16, alignSelf: 'center' }}
            width={70}
          />
          <PlaceholderLine style={{ alignSelf: 'center' }} width={50} />
        </Placeholder>
      </Card>
    ));
  }

  return <View style={{ flexDirection: 'row' }}>{createCard()}</View>;
}

export default CardMoviePlaceholder;
