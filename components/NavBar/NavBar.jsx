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
import Router from 'next/router'

export default function NavBar({page}) {
  const { toggleColorMode } = useColorMode();

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
              <NavLink.Desktop onClick={() => Router.push('/')} active={page==='home'? true : false}>Home</NavLink.Desktop>
              <NavLink.Desktop onClick={() => Router.push('/projects')} active={page==='projects'? true : false}>Projects</NavLink.Desktop>
              <NavLink.Desktop onClick={() => Router.push('/blog')} active={page==='blog'? true : false}>Blog</NavLink.Desktop>
              <NavLink.Desktop onClick={() => Router.push('/contact')} active={page==='contact'? true : false}>Contact</NavLink.Desktop>
            </HStack>
            <Box mr="5">
              <MobileNav />
            </Box>
          <IconButton onClick={toggleColorMode} icon={mode(<HiMoon />, <HiSun/>)}/>
        </Flex>
    </Box>
  )
}
