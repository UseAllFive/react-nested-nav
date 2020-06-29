# react-nested-nav

> React nested navigation menu

[![NPM](https://img.shields.io/npm/v/react-nested-nav.svg)](https://www.npmjs.com/package/react-nested-nav) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-nested-nav
```

## Usage

### Format your data

[See example data here](https://github.com/UseAllFive/react-nested-nav/blob/master/example/src/data.js)

```jsx
const MenuShape = {
  title: PropTypes.string,
  id: PropTypes.string
}
const ItemsShape = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string
}
ItemsShape.menu = PropTypes.shape(MenuShape)
MenuShape.items = PropTypes.arrayOf(PropTypes.shape(ItemsShape))
NestedNav.propTypes = {
  menus: PropTypes.shape(MenuShape),
  onLinkClick: PropTypes.func
}
```

```jsx
import React from 'react'

import { NestedNav } from 'react-nested-nav'
import { data } from './data' // see data formatting
import 'react-nested-nav/dist/index.css' // custom css

const App = () => {
  return (
    <NestedNav
      menus={data}
      onLinkClick={(link) => {
        console.log(`go to: ${link}`)
      }}
    />
  )
}

export default App
```

## License

MIT © [UseAllFive](https://github.com/UseAllFive)
