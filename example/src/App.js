import React from 'react'

import { NestedNav } from 'react-nested-nav'
import { data } from './data' // see data formatting
import 'react-nested-nav/dist/index.css' // custom css

const App = () => {
  return <NestedNav menus={data} />
}

export default App
