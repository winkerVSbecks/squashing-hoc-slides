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
  MarkdownSlides,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

export default [
  <CodeSlide
    transition={[]}
    textSize="1.5rem"
    lang="js"
    code={require('raw-loader!../assets/hof.example')}
    ranges={[
      {
        loc: [0, 9],
        title: 'Higher-order Function',
        note: 'A function that returns a function',
      },
      { loc: [11, 12], title: 'In ES6' },
      { loc: [14, 17], title: 'Generic HOF Form' },
      {
        loc: [19, 22],
        title: 'Higher-order Component',
        note: 'A function that returns a component',
      },
      { loc: [24, 27] },
    ]}
  />,
  <CodeSlide
    transition={[]}
    textSize="1.25rem"
    lang="js"
    code={require('raw-loader!../assets/hoc.example')}
    ranges={[
      {
        loc: [0, 11],
        title: 'HOC Example',
        note: 'if isLoading then show loader else render component',
      },
      {
        loc: [1, 6],
        title: 'WithLoader HOC',
        note: 'hocFactory:: React.Component → React.Component',
      },
      {
        loc: [7, 8],
        title: 'Display Name',
        note: 'eg: WithLoader(MyComponent)',
      },
      {
        loc: [12, 19],
        title: 'Display Name',
        note: (
          <p>
            from{' '}
            <a
              style={{ color: '#7FDBFF' }}
              href="https://facebook.github.io/react/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging"
            >
              convention-wrap-the-display-name-for-easy-debugging
            </a>
          </p>
        ),
      },
      { loc: [20, 21], title: 'Enhance a Component' },
      { loc: [22, 27], title: 'Usage' },
    ]}
  />,
];
