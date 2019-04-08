import React from "react"
import { MDXProvider } from "@mdx-js/react"
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'


const components = {
	pre: props => (
		<LiveProvider code={props.children.props.children.trim()}>
	      <LiveEditor />
  	      <LiveError />
	      <LivePreview />
  	    </LiveProvider>)
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  )
}