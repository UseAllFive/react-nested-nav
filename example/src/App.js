import React from 'react'

import { NestedNav } from 'react-nested-nav'
import { data } from './data'
import 'react-nested-nav/dist/index.css'

const App = () => {
  return <NestedNav menus={data} />
}

export default App
