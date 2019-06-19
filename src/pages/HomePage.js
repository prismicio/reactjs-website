import React, { Fragment, useEffect, useState } from 'react'
import { Link, RichText } from 'prismic-reactjs'
import { Header, Footer, Loader } from '../components'
import { SliceZone } from '../components/slices'
import NotFound from './NotFound'
import { client, linkResolver } from '../prismic-configuration'

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [homePage, setHomePageData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.getSingle('homepage')
      if (result) {
        window.PrismicToolbar.setupEditButton()
        setHomePageData(result)
      } else {
        console.warn('Homepage document not found. Make sure it exists in your Prismic repository')
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const homePageBanner = (banner) => (
    <section className='homepage-banner'
      style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + banner.image.url + ')' }}>
      <div className='banner-content container'>
        <h2 className='banner-title'>{RichText.asText(banner.title)}</h2>
        <p className='banner-description'>{RichText.asText(banner.tagline)}</p>
        {RichText.asText(banner.button_label) !== '' ? (
          // Displays the button link only if it's been defined
          <a className='banner-button' href={Link.url(banner.button_link, linkResolver)}>
            {RichText.asText(banner.button_label)}
          </a>
        ) : ''}
      </div>
    </section>
  )

  if (loading) {
    return <Loader />
  }

  return (
    <Fragment>
      {
        homePage ? (
          <div className='homepage' data-wio-id={homePage.id}>
            <Header />
            {homePageBanner(homePage.data.homepage_banner[0])}
            <div className='container'>
              <SliceZone sliceZone={homePage.data.page_content} />
            </div>
            <Footer />
          </div>
        ) : <NotFound />
      }
    </Fragment>
  )
}

export default HomePage
