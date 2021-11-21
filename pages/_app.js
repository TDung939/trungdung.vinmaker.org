import * as React from "react"
import {  ChakraProvider, useColorModeValue as mode } from "@chakra-ui/react"
import '/styles/fonts.css'
import theme from "../lib/theme"
import { AuthProvider } from "../context/AuthContext"
import NextNprogress from 'nextjs-progressbar';


function MyApp({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <NextNprogress
            color="#2A5FFF"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
        <Component />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp;