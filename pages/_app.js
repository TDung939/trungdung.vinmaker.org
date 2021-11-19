import * as React from "react"
import {  ChakraProvider } from "@chakra-ui/react"
import '/styles/fonts.css'
import theme from "../lib/theme"
import { AuthProvider } from "../context/AuthContext"

function MyApp({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp;