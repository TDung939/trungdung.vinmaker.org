import {
  Box,
  Button,
  IconButton,
  Flex,
  HStack,
  useColorModeValue as mode,
  useColorMode
} from '@chakra-ui/react'
import * as React from 'react'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'
import { HiMoon, HiSun } from 'react-icons/hi'

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box minH="480px">
      <Box as="header" bg='transparent' borderBottomWidth="1px">
        <Box
          maxW="7xl"
          mx="auto"
          py="4"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <HStack
                display={{
                  base: 'none',
                  lg: 'flex',
                }}
                spacing="8"
              >
                <NavLink.Desktop active>Home</NavLink.Desktop>
                <NavLink.Desktop>Projects</NavLink.Desktop>
                <NavLink.Desktop>Blog</NavLink.Desktop>
                <NavLink.Desktop>Contact</NavLink.Desktop>
              </HStack>
            </HStack>
            <Flex align="center" >
              <IconButton onClick={toggleColorMode} icon={mode(<HiMoon />, <HiSun/>)}/>
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
