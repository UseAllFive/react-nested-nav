import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const NestedNav = ({ menus, onLinkClick }) => {
  const active = { title: menus.title, id: menus.id }
  const initialState = {
    active: active,
    previous: [],
    // Need to store previous state to re-establish `initial` value for `motion`
    // after it re-renders due to prop changes
    previousState: {
      active: active,
      previous: []
    }
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'forward': {
        const previous = [...state.previous, state.active]
        const previousState = { ...state }
        delete previousState.previousState
        return {
          active: action.payload,
          previous,
          previousState: previousState
        }
      }
      case 'back': {
        const active = [...state.previous][state.previous.length - 1]
        const previous = [...state.previous]
        previous.pop()
        const previousState = { ...state }
        delete previousState.previousState
        return {
          active,
          previous,
          previousState: previousState
        }
      }
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const Menu = ({ menu, onLinkClick }) => {
    // base case
    if (!menu) {
      return null
    }

    return (
      <React.Fragment>
        <motion.ul
          className='menu'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            bottom: 0,
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}
          transition={{ type: 'tween' }}
          animate={
            menu.id === state.active.id
              ? 'active'
              : state.previous.find((m) => m.id === menu.id)
              ? 'previous'
              : 'inactive'
          }
          initial={
            menu.id === state.previousState.active.id
              ? 'active'
              : state.previousState.previous.find((m) => m.id === menu.id)
              ? 'previous'
              : 'inactive'
          }
          variants={{
            active: { x: 0 },
            inactive: { x: '100%' },
            previous: { x: '-100%' }
          }}
        >
          {menu.items.map(({ text, link, menu: subMenu }, i) => (
            <li className='menu-item' key={i}>
              {!subMenu ? (
                <a className='menu-item-link' onClick={() => onLinkClick(link)}>
                  {text}
                </a>
              ) : (
                <button
                  className='menu-item-link menu-item-button'
                  onClick={() =>
                    dispatch({
                      type: 'forward',
                      payload: { title: subMenu.title, id: subMenu.id }
                    })
                  }
                >
                  {text}
                </button>
              )}
            </li>
          ))}
        </motion.ul>
        <React.Fragment>
          {menu.items.map(({ menu }, i) => (
            <Menu key={i} menu={menu} onLinkClick={onLinkClick} />
          ))}
        </React.Fragment>
      </React.Fragment>
    )
  }

  return (
    <div>
      {/* <div>active: {JSON.stringify(state.active, null, 2)}</div>
      <div>prev: {JSON.stringify(state.previous, null, 2)}</div> */}
      <div className='menu-header' style={{ display: 'flex' }}>
        {state.previous.length > 0 && (
          <button className='back' onClick={() => dispatch({ type: 'back' })}>
            Back
          </button>
        )}
        <div className='menu-title'>{state.active.title}</div>
      </div>
      <div
        className='menu-container'
        style={{ position: 'relative', height: 600, overflow: 'hidden' }}
      >
        <Menu menu={menus} onLinkClick={onLinkClick} />
      </div>
    </div>
  )
}

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

export { NestedNav }
