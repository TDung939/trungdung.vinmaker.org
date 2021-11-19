import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  Link
} from '@chakra-ui/react'
import * as React from 'react'
import { FaHeart } from 'react-icons/fa'
import { SocialLink } from './SocialLink'
import { links, socialLinks } from './_data'
import { LinkGroup } from './LinkGroup'
import NowPlaying from '../NowPlaying'

export default function Footer() {
  return (
    <Box as="footer" borderTopWidth="1px" >
      <Box
        py='8'
      >
        <NowPlaying/>
        <Flex
          direction={{
            base: 'column',
            lg: 'row',
          }}
          justify="space-between"
          mb={{
            base: '10',
            lg: '16',
          }}
          align="flex-start"
          id="top"
        >
          <SimpleGrid
            flex="1"
            w={{
              base: 'full',
              lg: 'auto',
            }}
            maxW={{
              lg: '2xl',
            }}
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={{
              base: '12',
              md: '10',
            }}
            fontSize="sm"
            marginEnd={{
              md: '4',
              lg: '16',
            }}
          >
            {links.map((group, idx) => (
              <LinkGroup key={idx} data={group} />
            ))}
          </SimpleGrid>
        </Flex>

        <Flex
          direction={{
            base: 'column-reverse',
            lg: 'row',
          }}
          align={{
            base: 'flex-start',
            lg: 'center',
          }}
          justify="space-between"
          fontSize="sm"
        >
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '4',
              md: '12',
            }}
            mt={{
              base: '8',
              lg: 0,
            }}
            w={{
              base: 'full',
              lg: 'auto',
            }}
            justify={{
              base: 'space-between',
              lg: 'flex-start',
            }}
            align={{
              base: 'flex-start',
              md: 'center',
            }}
          >
            <HStack
              spacing="2"
              mt={{
                lg: '8',
              }}
              as="ul"
              listStyleType="none"
            >
              {socialLinks.map((link, idx) => (
                <Box as="li" key={idx}>
                  <SocialLink href={link.href}>
                    <Box srOnly>{link.label}</Box>
                    {link.icon}
                  </SocialLink>
                </Box>
              ))}
            </HStack>
          </Stack>
          <Box maxW='sm'>
            <Text mt="2">
              Built with <Link href='https://nextjs.org/' isExternal >Next.js</Link>, <Link href='https://chakra-ui.com/' isExternal >ChakraUI</Link>, and <Link href='https://www.prisma.io/' isExternal >Prisma</Link>. Feel free to <Link href='#' isExternal fontWeight='bold'>clone</Link> this project and build your own site <Heart/>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
const Heart = () => (
  <Box
    display="inline-block"
    mx="1"
    color={mode('black', '#2a5fff')}
    fontSize="xs"
    role="img"
    aria-label="Love"
    as={FaHeart}
  />
)
