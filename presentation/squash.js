import React from 'react';
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Fit,
  Fill,
  Image,
  Layout,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  MarkdownSlides,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';

const images = {
  tree: require('../assets/tree.png'),
};

preloader(images);

export default [
  <Slide>
    <Heading textColor="secondary" size={6} lineHeight={1.25} textAlign="left">
      Composing Multiple HOCs{' '}
      <Link
        textColor="tertiary"
        textSize="0.75em"
        href="https://codepen.io/winkerVSbecks/pen/GMpYxP"
      >
        (CodePen Demo)
      </Link>
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
  <Slide bgColor="primary" textColor="secondary" margin="0">
    <Heading textColor="secondary" size={4} lineHeight={1.5} textAlign="left">
      Challenges
    </Heading>
    <Layout>
      <Fill>
        <List margin="0 2rem 0 0">
          <ListItem margin="1rem 0">Performance</ListItem>
          <ListItem margin="1rem 0">Debugging</ListItem>
        </List>
      </Fill>
      <Fit>
        <Image src={images.tree} width={650} />
      </Fit>
    </Layout>
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
          <p style={{ margin: 0 }}>
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
      Stateless Pure Function HOC<br />eg: Prop Transformers!
    </Heading>
    <CodePane
      margin="2rem 0 0 0"
      textSize="1.5rem"
      lang="javascript"
      source={`const hoc = transform => Component => props => (
  <Component { ...transform(props) } />;
)`}
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
      source={`compose(
  hoc(bazTransformation),
  hoc(barTransformation),
  hoc(fooTransformation),
)(MyComponent);

// The above is equivalent to
hoc(
  compose(
    bazTransformation,
    barTransformation,
    fooTransformation,
  )
)(MyComponent);`}
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
      source={`<withBaz(withBar(withFoo(MyComponent)))>
	<MyComponent />
</withBaz>`}
    />
  </Slide>,
];
