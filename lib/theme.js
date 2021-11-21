import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const styles = {
  global: props => ({
    body: {
      bg: mode('white', '#161616')(props),
    },
  }),
};

const fonts = {
    body: "IBM Plex Sans",
    heading: "IBM Plex Mono",
    mono: "Menlo, monospace",
}


const theme = extendTheme({ config, styles, fonts })

export default theme