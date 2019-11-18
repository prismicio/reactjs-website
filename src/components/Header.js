import React, { useEffect, useState, Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../prismic-configuration'
import NotFound from '../pages/NotFound'

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
          <RouterLink to={Link.url(menuLink.link, linkResolver)}>
            {RichText.asText(menuLink.label)}
          </RouterLink>
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
