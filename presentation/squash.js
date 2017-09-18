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
  Link,
  Quote,
  Slide,
  Text,
  MarkdownSlides,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

export default [
  <Slide>
    <Heading size={6} lineHeight={1.25} textColor="tertiary" textAlign="left">
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
  <Slide bgColor="secondary">
    <Heading size={1} lineHeight={1} textColor="primary">
      🗜️ Squash!
    </Heading>
  </Slide>,
  <CodeSlide
    transition={[]}
    textSize="1.5rem"
    lang="js"
    code={require('raw-loader!../assets/squash.example')}
    ranges={[
      {
        loc: [0, 1],
        title: 'JSX',
        note: 'but what does this really mean 🤷🏽‍♂️',
      },
      { loc: [3, 4], title: 'JSX ➡️ JS', note: 'JSX compiles into this' },
      {
        loc: [3, 4],
        note: "MyComponent doesn't get executed until render time",
      },
      {
        loc: [6, 7],
        title: 'Eager Evaluation!',
        note:
          'Referentially Transparent Components === components that can be called like a function',
      },
      {
        loc: [9, 22],
        note: (
          <p>
            Create Eager Element –{' '}
            <a
              style={{ color: 'white' }}
              href="https://s.codepen.io/winkerVSbecks/debug/ZXQOZR"
            >
              demo!
            </a>
          </p>
        ),
      },
    ]}
  />,
  <Slide>
    <Heading size={6} lineHeight={1.25} textColor="secondary" textAlign="left">
      Eager Evaluation in Recompose{' '}
      <Text textSize="0.5em" textColor="secondary">
        <Link
          textColor="tertiary"
          href="https://github.com/acdlite/recompose/blob/master/src/packages/recompose/createEagerElement.js"
        >
          createEagerElement
        </Link>{' '}
        &{' '}
        <Link
          textColor="tertiary"
          href="https://github.com/acdlite/recompose/blob/master/src/packages/recompose/isReferentiallyTransparentFunctionComponent.js"
        >
          isReferentiallyTransparentFunctionComponent
        </Link>
      </Text>
    </Heading>
    <CodePane
      margin="2rem 0 0 0"
      textSize="1rem"
      lang="javascript"
      source={require('!raw-loader!../assets/create-eager-element.example')}
    />
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
      Distributive Property of Composition
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
  <Slide>
    <Heading size={6} lineHeight={1.25} textColor="secondary" textAlign="left">
      Squashed 🤐
    </Heading>
    <CodePane
      margin="2rem 0 0 0"
      textSize="1.5rem"
      lang="javascript"
      source={`<withBaz(withBar(withFoo))>
	<MyComponent />
</withBaz>`}
    />
  </Slide>,
];
