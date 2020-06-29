export const data = {
  title: 'Menu',
  id: 'home',
  items: [
    {
      text: 'Menu 1',
      menu: {
        title: 'Menu 1',
        id: 'menu-1',
        items: [
          {
            text: 'Menu 1 - Child 1',
            menu: {
              title: 'Menu 1 - Child 1',
              id: 'menu-1-1',
              items: [
                {
                  text: 'Menu 1 - Child 1 - Child 1',
                  link: 'https://google.com'
                },
                {
                  text: 'Menu 1 - Child 1 - Child 2',
                  link: 'https://google.com'
                },
                {
                  text: 'Menu 1 - Child 1 - Child 3',
                  menu: {
                    title: 'Menu 1 - Child 1 - Child 3',
                    id: 'menu-1-1-3',
                    items: [
                      {
                        text: 'Menu 1 - Child 1 - Child 3 - Child 1',
                        link: 'https://google.com'
                      },
                      {
                        text: 'Menu 1 - Child 1 - Child 3 - Child 2',
                        link: 'https://google.com'
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      text: 'Menu 2',
      menu: {
        title: 'Menu 2',
        id: 'menu-2',
        items: [
          {
            text: 'Menu 2 - Child 1',
            link: 'https://google.com'
          },
          {
            text: 'Menu 2 - Child 2',
            link: 'https://google.com'
          }
        ]
      }
    },
    {
      text: 'Menu 3',
      menu: {
        title: 'Menu 3',
        id: 'menu-3',
        items: [
          {
            text: 'Menu 3 - Child 1',
            link: 'https://google.com'
          },
          {
            text: 'Menu 3 - Child 2',
            link: 'https://google.com'
          },
          {
            text: 'Menu 3 - Child 3',
            menu: {
              title: 'Menu 3 - Child 3',
              id: 'menu-3-3',
              items: [
                {
                  text: 'Menu 3 - Child 3 - Child 1',
                  link: 'https://google.com'
                },
                {
                  text: 'Menu 3 - Child 3 - Child 2',
                  link: 'https://google.com'
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
