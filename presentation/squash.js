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
  <Slide>
    <Heading size={6} lineHeight={1.25} textColor="secondary" textAlign="left">
      Multiple HOCs
    </Heading>
    <CodePane
      margin="2rem 0 0 0"
      textSize="1.5rem"
      lang="javascript"
      source={`const enhance = compose(
  withFoo,
  withBar,
  withBaz,
);

const EnhancedMyComponent = enhance(MyComponent);`}
    />
  </Slide>,
  <Slide>
    <iframe
      height="600"
      scrolling="no"
      title="Squash Higher-order Components"
      src="//codepen.io/winkerVSbecks/embed/GMpYxP/?height=300&theme-id=26435&default-tab=js,result&embed-version=2"
      frameBorder="no"
      allowTransparency="true"
      allowFullScreen="true"
      style={{
        width: '100%',
        border: 'none',
      }}
    >
      See the Pen{' '}
      <a href="https://codepen.io/winkerVSbecks/pen/GMpYxP/">
        Squash Higher-order Components
      </a>{' '}
      by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">
        @winkerVSbecks
      </a>) on <a href="https://codepen.io">CodePen</a>.
    </iframe>
  </Slide>,
  <Slide>
    <Heading size={6} lineHeight={1.25} textColor="secondary" textAlign="left">
      JSX
    </Heading>
    <CodePane
      margin="2rem 0 0 0"
      textSize="1.5rem"
      lang="javascript"
      source={`// This JSX
<MyComponent foo="foo" />


// Compiles into
React.createElement(MyComponent, { foo: "foo" });
`}
    />
  </Slide>,
  <Slide>
    <Heading size={6} lineHeight={1.25} textColor="secondary" textAlign="left">
      Eager Evaluation of Referentially Transparent Component
    </Heading>
    <Text textSize="1.5rem" textAlign="left" textColor="#777" margin="2rem 0">
      Components that can be called like a function
    </Text>
    <CodePane
      margin="2rem 0 0 0"
      textSize="1.5rem"
      lang="javascript"
      source={`// Instead of using JSX
<MyComponent foo="foo" />


// Evaluate is as a function
MyComponent({ foo: 'foo' })
`}
    />
  </Slide>,
  <Slide>
    https://github.com/acdlite/recompose/blob/master/src/packages/recompose/createEagerElement.js
  </Slide>,
  <Slide>
    <Heading size={6} lineHeight={1.25} textColor="secondary" textAlign="left">
      Stateless Pure Function HOC<br />Prop Transformers!
    </Heading>
    <CodePane
      margin="2rem 0 0 0"
      textSize="1.5rem"
      lang="javascript"
      source={`const hoc = Component => props => <Component {transform(props)} />;`}
    />
  </Slide>,
  <Slide>
    <Heading size={6} lineHeight={1.25} textColor="secondary" textAlign="left">
      Prop Transformers – Distributive Property of Composition
    </Heading>
    <CodePane
      margin="2rem 0 0 0"
      textSize="1.5rem"
      lang="javascript"
      source={`// This
compose(
  hoc(bazTransformation),
  hoc(barTransformation),
  hoc(fooTransformation),
);

// is equivalent to
hoc(compose(
  hoc(bazTransformation),
  hoc(barTransformation),
  hoc(fooTransformation),
));`}
    />
  </Slide>,
];
