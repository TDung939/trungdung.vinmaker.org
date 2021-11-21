import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

export const links = [
  {
    title: 'Site',
    links: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Projects',
        href: '/projects',
      },
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'Contact',
        href: '/contact',
      }
    ],
  },
  {
    title: 'More stuff',
    links: [
      {
        label: 'My music',
        href: '#',
      },
      {
        label: 'Free Life Tips',
        href: '#',
      }
    ],
  },
  {
    title: 'Support',
    links: [
      {
        label: 'VinMaker Society',
        href: 'https://vinmaker.org/',
      },
      {
        label: 'Makers for Kindness',
        href: '#',
      },
      {
        label: 'Buy me a coffee',
        href: '#',
      },
    ],
  }
]
export const socialLinks = [
  {
    label: 'Facebook',
    icon: <FaFacebook />,
    href: 'https://www.facebook.com/dung.nguyenhoangtrung',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/dung-nht/',
  },
  {
    label: 'Github',
    icon: <FaGithub />,
    href: 'https://github.com/TDung939',
  },
]
