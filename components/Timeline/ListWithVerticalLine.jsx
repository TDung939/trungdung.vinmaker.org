import * as React from 'react'
import { FaAward, FaBaby, FaBicycle, FaChalkboard, FaDizzy, FaGraduationCap, FaHandsHelping, FaPaperclip, FaPauseCircle, FaPlane, FaRobot, FaSchool, FaTerminal, FaUserFriends } from 'react-icons/fa'
import { Box, Heading, Icon, Collapse, Button } from '@chakra-ui/react'
import { List } from './List'
import { ListItem } from './ListItem'
import { useState } from 'react'
import {GiForearm, GiGuitar, GiGuitarHead, GiLabCoat, GiMadScientist, GiMicroscope} from 'react-icons/gi'

export const ListWithVerticalLine = () => {
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)

  return (
    <Box as="section">
      <Collapse startingHeight='320px' in={show} >

        <Heading fontSize='xl' my='4'>2022</Heading>
        <List spacing="12">
          <ListItem
            title="Research Assistant at VinUni-Illinois Smart Health Center"
            subTitle="Designed and built a low-cost and remote-controlled sampler device with Google Spreadsheets as an alternative
            to ISCO 3700 Waste Water Sampler"
            icon={<Icon as={GiMicroscope} boxSize="4" />}
          />
           <ListItem
            title="Formed a Indie rock Band"
            subTitle="Disband after one song"
            icon={<Icon as={GiGuitarHead} boxSize="4" />}
          />
        </List>


        <Heading fontSize='xl' my='4'>2021</Heading>
        <List spacing="12">
          <ListItem
            title="Started at Vulcan Augmetics"
            subTitle="Intern. Technical Support Engineer. Cool robotic hands."
            icon={<Icon as={GiForearm} boxSize="4" />}
          />
        </List>

        <Heading fontSize='xl' my='4'>2020</Heading>
        <List spacing="12">
          <ListItem
            title="Started at VinUniversity"
            icon={<Icon as={FaSchool} boxSize="4" />}
          />
           <ListItem
            title="Founded VinMaker Society"
            subTitle="Might be a bit biased but this club is so cool"
            icon={<Icon as={FaTerminal} boxSize="4" />}
          />
        </List>

        <Heading fontSize='xl' my='4'>2019</Heading>
        <List spacing="12">
          <ListItem
            title="Landed First Internship"
            subTitle="Loved the people. Loved the work. Hated the back pain from sitting 8 hours a day"
            icon={<Icon as={FaPaperclip} boxSize="4" />}
          />
          <ListItem
            title="Became a Part-time Lecturer"
            subTitle="Taught kids programming and building robots."
            icon={<Icon as={FaChalkboard} boxSize="4" />}
          />
          <ListItem
            title="Got into University of New South Wales, Sydney"
            subTitle="Kangaroos, Koalas, and so... many... Flies"
            icon={<Icon as={FaSchool} boxSize="4" />}
          />
          <ListItem
            title="Joined the Engineering Society"
            subTitle="Made friends. Fixed bicycles for free."
            icon={<Icon as={FaUserFriends} boxSize="4" />}
          />
        </List>

        <Heading fontSize='xl' my='4'>2018</Heading>
        <List spacing="12">
          <ListItem
            title="Graduated High School"
            subTitle="Somehow I managed"
            icon={<Icon as={FaGraduationCap} boxSize="4" />}
          />
          <ListItem
            title="Took a gap year"
            subTitle="Travel. Work. Learn."
            icon={<Icon as={FaPauseCircle} boxSize="4" />}
          />
        </List>

        <Heading fontSize='xl' my='4'>2010</Heading>
        <List spacing="12">
          <ListItem
            title="Won first place at TiNiWorld's Yo-Yo Championship"
            subTitle="Proudest moment of my life"
            icon={<Icon as={FaAward} boxSize="4" />}
          />
        </List>

        <Heading fontSize='xl' my='4'>2000</Heading>
        <List spacing="12">
          <ListItem
            title="Born"
            subTitle="Successfully destroyed my parents' social lives"
            icon={<Icon as={FaBaby} boxSize="4" />}
          />
        </List>
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem">
        Show {show ? "Less" : "More"}
      </Button>
    </Box>
  )
}

export default ListWithVerticalLine;