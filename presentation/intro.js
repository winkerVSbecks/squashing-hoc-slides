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
  <Slide bgColor="tertiary">
    <Heading size={1} lineHeight={1} textColor="primary">
      Higher-order Components
    </Heading>
  </Slide>,
  <Slide bgColor="primary">
    <Heading
      size={5}
      lineHeight={1}
      textColor="secondary"
      textAlign="left"
      margin="2rem 0"
    >
      React Redux Connect
    </Heading>
    <CodePane
      textSize="1.25rem"
      lang="javascript"
      source={`
export connect(mapStateToProps, mapDispatchToProps)(TodoApp)

`}
    />
  </Slide>,
  <Slide>
    <Heading size={5} lineHeight={1} textColor="tertiary" textAlign="left">
      Higher-order Components
    </Heading>
    <List>
      <ListItem margin="1rem 0">Handle cross-cutting concerns</ListItem>
      <ListItem margin="1rem 0">Control Rendering</ListItem>
      <ListItem margin="1rem 0">State abstraction (Redux, MobX, etc.)</ListItem>
      <ListItem margin="1rem 0">Manipulate Props</ListItem>
    </List>
  </Slide>,
];
