import React from 'react';
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  MarkdownSlides,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import preloader from 'spectacle/lib/utils/preloader';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import intro from './intro';
import hocExplained from './hoc-explained';
import squash from './squash';

const images = {
  me: require('../assets/me.png'),
};

preloader(images);

const systemSans = `-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif`;

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#333',
    tertiary: '#0074D9',
    quartenary: '#CECECE',
  },
  {
    primary: systemSans,
    secondary: systemSans,
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} progress="bar" theme={theme}>
        <Slide bgColor="tertiary">
          <Heading size={4} lineHeight={1} textColor="primary">
            Squashing 🤐
          </Heading>
          <Heading size={4} lineHeight={1.25} textColor="primary">
            🗜️ Higher-order Components
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Text textAlign="left" margin="0 0 5rem 0">
            <Image src={images.me} margin="0" width={128} height={128} />
          </Text>
          <Heading
            size={3}
            lineHeight={1.25}
            textColor="secondary"
            textAlign="left"
          >
            Varun Vachhar
          </Heading>
          <Text
            textAlign="left"
            textSize="2rem"
            lineHeight={1.5}
            margin="0 0.25rem"
            textColor="secondary"
          >
            @winkerVSbecks<br />
            <Link textColor="secondary" href="http://varun.ca/">
              varun.ca
            </Link>
          </Text>
        </Slide>
        {React.Children.toArray(intro)}
        {React.Children.toArray(hocExplained)}
        {React.Children.toArray(squash)}
        <Slide bgColor="#000">
          <Heading
            size={3}
            textColor="#000"
            textAlign="left"
            padding="2rem"
            margin="0 0 4rem 0"
            bgColor="white"
          >
            Thank You!
          </Heading>
          <Text
            textColor="white"
            textAlign="left"
            style={{ fontFamily: 'monospace' }}
          >
            @winkerVSbecks
          </Text>
        </Slide>
      </Deck>
    );
  }
}
