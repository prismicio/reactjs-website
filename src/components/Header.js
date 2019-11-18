import React, { useEffect, useState, Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { RichText } from 'prismic-reactjs'
import { client } from '../prismic-configuration'
import NotFound from '../pages/NotFound'
import { PrismicLink } from './';

const Header = () => {
  const [loading, setLoading] = useState(true)
  const [menu, setMenuData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.getSingle('menu')
      if (result) {
        setMenuData(result)
      } else {
        console.warn('Menu navigation not found. Make sure it exists in your Prismic repository')
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const menuLinks = () => {
    return menu.data.menu_links.map((menuLink) => {
      return (
        <li key={menuLink.link.id}>
          <PrismicLink link={menuLink.link}>
            {RichText.asText(menuLink.label)}
          </PrismicLink>
        </li>
      )
    })
  }

  if (loading) {
    return null
  }

  return (
    <Fragment>
      {
        menu ? (
          <header className='site-header'>
            <RouterLink to='./'>
              <div className='logo'>Example Site</div>
            </RouterLink>
            <nav>
              <ul>
                {menuLinks()}
              </ul>
            </nav>
          </header>
        ) : <NotFound />
      }
    </Fragment>
  )
}

export default Header
