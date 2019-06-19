import { string, shape, func } from 'prop-types'

export const imagePropType = shape({
  url: string.isRequired,
  alt: string
})

export const locationPropType = shape({
  pathname: string.isRequired
})

export const historyPropType = shape({
  push: func.isRequired
})

export const prismicPropType = shape({
  client: shape({
    getSingle: func.isRequired,
    getByUID: func.isRequired,
    previewSession: func.isRequired
  }),
  linkResolver: func.isRequired
})
