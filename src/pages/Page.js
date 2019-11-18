import React, { Fragment, useEffect, useState } from 'react'
import { Header, Footer } from '../components'
import { SliceZone } from '../components/slices'
import NotFound from './NotFound'
import { client } from '../prismic-configuration'

const Page = ({ match: { params: { uid } } }) => {
  const [loading, setLoading] = useState(true)
  const [page, setPageData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.getByUID('page', uid)
      setLoading(false)
      if (result) {
        window.PrismicToolbar.setupEditButton()
        return setPageData(result)
      } else {
        console.warn('Page document not found. Make sure it exists in your Prismic repository')
      }
    }
    fetchData()
  }, [uid])

  if (loading) {
    return null;
  }

  return (
    <Fragment>
      {
        page ? (
          <div className='page' data-wio-id={page.id}>
            <Header />
            <div className='container'>
              <SliceZone sliceZone={page.data.page_content} />
            </div>
            <Footer />
          </div>
        ) : <NotFound />
      }
    </Fragment>
  )
}

export default Page
