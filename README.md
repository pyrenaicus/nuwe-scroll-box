![header](https://res.cloudinary.com/do6vrwdse/image/upload/v1652689652/scroll-box/storybook-header_fwhtal.jpg)

# JOBarcelona'22 ⚛ Frontend Challenge

This project is my response to the first challenge of JOBarcelona'22 hackathon, organized by [Nuwe](https://nuwe.io/challenge/jobarcelona-22-front-end).

The main objective is to build a component library to show a custom list of gift cards in a horizontal scroll component (vertical for mobile or tablet).

In order to participate, a **pre-requisite** was to solve a problem, to decrypt a password protected PDF with further instructions. The main issue was to calculate the sum of all the digits of 2 raised to the power of the number of people working in a given project. I solved the preliminary task this way:

```js
// import to use with node
const BigNumber = require("bignumber.js");
const teams = [250, 200, 130, 170, 50];
// total people
const total = teams.reduce((a, b) => a + b);
// use BigNumber
let x = new BigNumber(2);
x = x.exponentiatedBy(total);
x = x.toFixed();
const sumX = x
  // no need of .toString() as BigNumbers are strings
  .split("")
  .map(Number)
  .reduce((a, b) => a + b);
console.log(sumX);
```

## The Challenge 💪

**Tasks**:

- Component with a title and a group of gifts showing this info:
  - Title
  - Description
  - Group tags
- Component is responsive:
  - Horizontal scroll in PC
  - List view for mobile / tablet
- When the user clicks on a gift group, it executes an action (not yet defined)
- Use an atomic system
- Comment all the development of the component

We were given a password protected PDF with a screenshot of proposed design for the component and the requirement to use [Storybook](https://storybook.js.org/) library to document the component

## Usage 🍜

You can see a **Storybook** with a live deploy of the component library in the following link: [scroll-box-nuwe.surge.sh](https://scroll-box-nuwe.surge.sh). Don't miss the **Docs** tab, where you will see all the components thoroughly documented.

## Main Component 🧬

Component is built following a [Component-Driven Development](https://www.componentdriven.org/) methodolgy and [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles.

In a nutshell, **Component-Driven Development** means that we'll build our UI components from the bottom up, starting with basic components and progressively combine them into complex ones, each one with a well-defined API and a fixed series of states that are mocked.

**Atomic design** is the process of creating design systems by breaking down the elements into five distinct levels: atoms, molecules, organisms, templates and pages:

- **Atoms** are the basic building blocks, the smallest components that can be incorporated, and cannot be broken down into subcomponents while still keeping them functional

- **Molecules** are groups of atoms bonded together, and form a small group of elements that work together to provide some functionality.

- **Organisms** are groups of molecules and atoms joined together to form a relatively complex, distinct section of an interface.

- **Templates** wrap organisms in a layout an provide the content structure of a page.

- **Pages** are specific instances of templates with real-world content in place.

For our project we are only required to build our component up to the organism level.

Using an atomic design approach will allow us to break our components down into smaller units that can be developed and tested in isolation.

Organizing our component's folder following atomic design principles can help us as things scale up.

```
├── components
│   ├── atoms
│   │   ├── CardDescription.js
│   │   ├── CardDescription.stories.mdx
│   │   ├── CardTitle.js
│   │   ├── CardTitle.stories.mdx
│   │   ├── TagPill.js
│   │   └── TagPill.stories.mdx
│   ├── molecules
│   │   ├── Card.js
│   │   ├── Card.stories.mdx
│   │   ├── TagList.js
│   │   └── TagList.stories.mdx
│   └── organisms
│       ├── ScrollBox.js
│       └─ ScrollBox.stories.mdx
```

We will use [Storybook](https://storybook.js.org/) to develop our UI components in isolation. This will help us to rule out ambiguity in component state, as Storybook allows us to create explicit stories that document exactly how the component responds to given situations.

In `ScrollBox`, our main component, we create three different stories for its three different states. A _standard_ state, a _loading_ state that shows a skeleton while the app is loading data, and an _empty_ state in case something went wrong.

Overall our component is composed of other components, say atoms and molecules.

### Atoms ⚛️

`CardTitle`, `CardDescription` and `TagPill` are the **atoms**, the simplest building blocks from which we build up our component.

### Molecules 🧪

`TagList` is our first **molecule**, a component that represents a list of tags in a pill shape. It's built on top of our `TagPill`component.

`Card` is also a **molecule** albeit a complex one. Built on top of our previous `CardTitle` and `CardDescription` atoms, and our `TagList` molecule. It represents a card displaying all the information about one single pack of gifts, it has a title, produced by `CardTitle`, a description, `CardDescription` and a list of tags associated with it, a `TagList`molecule.

![card component](https://res.cloudinary.com/do6vrwdse/image/upload/v1652689008/scroll-box/scrollbox-card_yxvrnh.jpg)

It displays a minimal interactivity, changing background color on hover as well as changing the cursor to `pointer` giving a hint at being clicked. Right now the only action executed is a `console.log()` just to show it's operative.

`Card` is the core component of our `ScrollBox`. It needs four props:

- `title` - a string describing the group of gifts
- `desc` - a string representing a short description of the group
- `tags`- an array of tags
- `handleClick`- an action fired when card id clicked

Besides the default `Card` story, there is as well a `Long text card` story, visually testing what will happen if we accidentally use an extremely long title or description.

![awkward card component](https://res.cloudinary.com/do6vrwdse/image/upload/v1652689008/scroll-box/scrollbox-card-long_gmg7fu.jpg)

Our `Card` component can handle this scenario limiting the length of text via CSS only.

`CardTitle` is limiting text to one line only and width within bounds of `Card`.

```css
.card-title {
  max-width: 20rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: capitalize;
  font-size: 1.5rem;
}
```

`CardDescription` also limits width and height to 2 lines of text.

```css
.card-description {
  max-width: 20rem;
  overflow: hidden;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

And `TagList` is limiting the number of tags to 3 only by implementing `slice` array method on its `tags` array.

```js
const slicedTags = tags.length > 3 ? tags.slice(0, 3) : tags;
```

### Organisms 🐙

`ScrollBox` is our main component and objective of this exercise.

![default scroll box component](https://res.cloudinary.com/do6vrwdse/image/upload/v1652689008/scroll-box/scrollbox-default_p22riw.jpg)

It displays a list of cards in a responsive way, horizontal scroll in a large screen, and vertical scroll in mobile / tablet. Setting our breakpoint at 800px width.

![responsive scroll box component](https://res.cloudinary.com/do6vrwdse/image/upload/v1652689007/scroll-box/scrollbox-mobile_bkahdm.jpg)

With the help of [Storybook's viewport addon](https://storybook.js.org/addons/@storybook/addon-viewport) we can easily test different devices.

![addon-viewport](https://res.cloudinary.com/do6vrwdse/image/upload/v1652687577/scroll-box/ScreenCap2_nn1a59.jpg)

`ScrollBox` is the first of our components that displays three different [stories](https://storybook.js.org/docs/react/writing-stories/introduction) according to it's different state (Stories in Storybook are a way to capture the rendered state of a UI component):

- **default** state
- **loading** state that shows a skeleton while the app is loading data from some backend API
- **empty** state in case something went wrong and there is no data to display.

**Default state**

![default scroll box component](https://res.cloudinary.com/do6vrwdse/image/upload/v1652689008/scroll-box/scrollbox-default_p22riw.jpg)

**Loading state**

![loading scroll box component](https://res.cloudinary.com/do6vrwdse/image/upload/v1652689008/scroll-box/scrollbox-loading_jusbkv.jpg)

**Empty state**

![empty scroll box component](https://res.cloudinary.com/do6vrwdse/image/upload/v1652689007/scroll-box/scrollbox-empty_vbc3tf.jpg)

Our component requires three props:

1. `scrollBoxTitle` - a string representing the title of a `ScrollBox` component
2. `loading`- a boolean representing it's loading state
3. `cards` - an array of cards, each one with a unique `id` string value, as [React requires a unique `key` prop when rendering a list of components](https://reactjs.org/docs/lists-and-keys.html#keys).

### Accesibility 🎯

Stoybook has an addon helpul to test our component's compliance with web accessibility standards, [storybook-addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y/) it adds a tab to the Docs Addon (below the rendered component).

## Stack 🖌

- TypeScript
- CSS
- React
- Storybook

## Installation ⚙️

Clone this repo, `cd` into newly created dir and install dependencies

```bash
git clone
cd scroll-box
yarn
```

## Contributing 💌

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

1. Clone repo and create a new branch: $ git checkout https://github.com/pyrenaicus/nuwe-scroll-box -b name_for_new_branch.
2. Make changes and test
3. Submit Pull Request with comprehensive description of changes

## Acknowledgements 🙏

- [@Hellodorahardy](https://www.instagram.com/hellodorahardy/?hl=en) for Gif Sad Xiao Long Bao Sticker
- [Storybook](https://storybook.js.org/tutorials/) for it's rich tutorials that were incredibly helpful
- [Reasonable Colors](https://reasonable.work/colors/) for it's interesting color system

## License 📃

MIT License
