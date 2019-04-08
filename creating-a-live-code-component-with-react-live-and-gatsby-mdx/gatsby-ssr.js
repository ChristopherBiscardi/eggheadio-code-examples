import React from "react"
import { MDXProvider } from "@mdx-js/react"

const components = {
	h1: props => (
		<h1 style={{color: 'hotpink'}} {...props} />
	)
}
export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  )
}