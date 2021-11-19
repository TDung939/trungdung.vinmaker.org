import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const styles = {
  global: props => ({
    body: {
      bg: mode('white', '#161616')(props),
    },
  }),
};

// const components = {
//   Drawer: {
//     // setup light/dark mode component defaults
//     baseStyle: props => ({
//       dialog: {
//         bg: mode('white', '#141214')(props),
//       },
//     }),
//   },
// };

// 3. extend the theme
const theme = extendTheme({ config, styles })

export default theme