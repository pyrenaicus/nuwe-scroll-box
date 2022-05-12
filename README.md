porque de las tecnologias utilizadas
como se documenta el proyecto
como se plantea la distribución de carpetas, la arquitectura
como empezar a trabajar o contribuir en la repo
Se recomienda utilizar el "common-readme", "standard-readme" o similiares

# CUSTOM HORIZONTAL SCROLL BOX

This project is a response to the chalenge JOBarcelona '22 online hackathon.

The commission is to build a component library to show custom lists of gifts in a horizontal scroll component (vertical for mobile or tablet).

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

We were given a password protected PDF with a screenshot of proposed design for the component and the need to use Storybook to document the component

## Usage

You can see a live deploy of the component library in _Chromatic_ here: **Link**

## Component

We will build our component following a [Component-Driven Development](https://www.componentdriven.org/) methodolgy and [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles.

In a nutshell, **Component-Driven Development** means that we'll build our UI components from the bottom up, starting with basic components and progressively combine them into complex ones, each one with a well-defined API and fixed series of states that are mocked.

**Atomic design** is the process of creating design systems by breaking down the elements into five distinct levels: atoms, molecules, organisms, templates and pages:

- **atoms** are the basic building blocks, the smallest components that can be incorporated, and cannot be broken down into subcomponents while still keeping them functional

- **molecules** are groups of atoms bonded together, and form a small group of elements that work together to provide some functionality.

- **organisms** are groups of molecules and atoms joined together to form a relatively complex, distinct section of an interface.

- **templates** wrap organisms in a layout an provide the content structure of a page.

- **pages** are specific instances of templates with real-world content in place.

For our project we will build up our component to the organism level.

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

In our `ScrollBox` component we create three different stories for its three different states. A _standard_ state, a _loading_ state that shows a skeleton while the app is loading data, and an _empty_ state in case something went wrong.

Overall our component is composed of other components, say atoms and molecules.

### Atoms

`CardTitle`, `CardDescription` and `TagPill` are the **atoms**, the simplest building blocks from which we build up our component.

### Molecules

`TagList` is our first **molecule**, a component that represents a list of tags in a pill shape. It's built on top of our `TagPill`component.

`Card` is also a **molecule** albeit a complex one. Built on top of our previous atoms and molecule. It represents a card displaying all the information about one single pack of gifts, it has a title, produced by `CardTitle`, a description, `CardDescription` and a list of tags associated with it, a `TagList`molecule.

It displays a minimal interactivity, changing background color on hover as well as changing the cursor to `pointer` giving a hint at being clicked. Right now the only action executed is a `console.log()` just to show it's operative.

`Card` is the core component of our `ScrollBox`. It needs three props:

- `title` - a string describing the group of gifts
- `desc` - a string representing a short description of the group
- `tags`- an array of tags

### Organisms

`ScrollBox`is our main component. It displays a list of cards in a responsive way, horizontal scroll in a PC, and vertical scroll in mobile / tablet.

`ScrollBox`is the first of our components that displays three different [stories](https://storybook.js.org/docs/react/writing-stories/introduction) according to it's different state (Stories in Storybook are a way to capture the rendered state of a UI component), a _standard_ state, a _loading_ state that shows a skeleton while the app is loading data from some backend API, and an _empty_ state in case something went wrong and there is no data to display.

Our component accepts two props:

- `cards` - an array of cards
- `loading`- a `bool` representing it's loading state

### Accesibility

Stoybook has an addon helpul to test our component's compliance with web accessibility standards

## Stack

- React
  -Storybook

## Installation

Clone this repo
cd into newly created dir
install dependencies

```bash
git clone
cd scroll-box
yarn
```

## Roadmap and visuals

## Contributing

## Reconocimientos

Gif Sad Xiao Long Bao Sticker from @Hellodorahardy

Colors from

## License
