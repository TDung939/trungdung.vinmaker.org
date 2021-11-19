import * as React from "react"
import {  ChakraProvider } from "@chakra-ui/react"
import '/styles/fonts.css'
import theme from "../lib/theme"

function MyApp({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      <Component />
    </ChakraProvider>
  )
}

export default MyApp;