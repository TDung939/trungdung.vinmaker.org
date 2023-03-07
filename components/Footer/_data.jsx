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
        href: 'https://soundcloud.com/trungdung939',
      },
      {
        label: 'Life Pro Tips',
        href: '#',
      }
    ],
  },
  {
    title: 'Support',
    links: [
      {
        label: 'VinMaker Society',
        href: 'https://www.facebook.com/vinmakersoc/',
      },
      // {
      //   label: 'Makers for Kindness',
      //   href: '#',
      // },
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
