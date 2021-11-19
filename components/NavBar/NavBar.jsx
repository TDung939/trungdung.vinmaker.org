import {
  Box,
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
import { useState } from 'react'

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [page, setPage] = useState('home')

  return (
    <Box as="header" bg='transparent' borderBottomWidth="1px" py="4">
        <Flex as="nav" justify="space-between">
            <HStack
              display={{
                base: 'none',
                lg: 'flex',
              }}
              spacing="8"
            >
              <NavLink.Desktop onClick={() => setPage('home')} active={page==='home'? true : false}>Home</NavLink.Desktop>
              <NavLink.Desktop onClick={() => setPage('projects')} active={page==='projects'? true : false}>Projects</NavLink.Desktop>
              <NavLink.Desktop onClick={() => setPage('blog')} active={page==='blog'? true : false}>Blog</NavLink.Desktop>
              <NavLink.Desktop onClick={() => setPage('contact')} active={page==='contact'? true : false}>Contact</NavLink.Desktop>
            </HStack>
            <Box mr="5">
              <MobileNav />
            </Box>
          <IconButton onClick={toggleColorMode} icon={mode(<HiMoon />, <HiSun/>)}/>
        </Flex>
    </Box>
  )
}
