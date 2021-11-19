import * as React from 'react'
import { FaAward, FaBaby, FaBicycle, FaChalkboard, FaDizzy, FaGraduationCap, FaPaperclip, FaPauseCircle, FaPlane, FaSchool, FaUserFriends } from 'react-icons/fa'
import { Box, Heading, Icon, Collapse, Button } from '@chakra-ui/react'
import { List } from './List'
import { ListItem } from './ListItem'
import { useState } from 'react'

export const ListWithVerticalLine = () => {
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)

  return (
    <Box as="section">
      <Collapse startingHeight='320px' in={show} >
        <Heading fontSize='xl' my='4'>2020</Heading>
        <List spacing="12">
          <ListItem
            title="Came back to Vietnam"
            // subTitle="Somehow I managed"
            icon={<Icon as={FaPlane} boxSize="4" />}
          />
          <ListItem
            title="Started at VinUniversity"
            // subTitle="I was planning to study in the US but eventually didn't go. Best decision I have ever made. I learned a lot this year."
            icon={<Icon as={FaSchool} boxSize="4" />}
          />
        </List>

        <Heading fontSize='xl' my='4'>2019</Heading>
        <List spacing="12">
          <ListItem
            title="Landed First Internship"
            subTitle="Loved the people, loved the work, hated the back pain from sitting 8 hours a day"
            icon={<Icon as={FaPaperclip} boxSize="4" />}
          />
          <ListItem
            title="Became a Part-time Lecturer"
            subTitle="Best way to make some money while having fun. I taught kids programming and building robots."
            icon={<Icon as={FaChalkboard} boxSize="4" />}
          />
          <ListItem
            title="Got into University of New South Wales, Sydney"
            subTitle="The Engineering program is great and all, but I honestly just wanted to see kangaroos in person."
            icon={<Icon as={FaSchool} boxSize="4" />}
          />
          <ListItem
            title="Joined the Engineering Society"
            subTitle="Just great experiences overall. Made a lot of friends. Participated in many eye-opening projects. Fixed bicycles for free."
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
            subTitle="I was planning to study in the US but eventually didn't go. Best decision I have ever made. I learned a lot this year."
            icon={<Icon as={FaPauseCircle} boxSize="4" />}
          />
        </List>

        <Heading fontSize='xl' my='4'>2007</Heading>
        <List spacing="12">
          <ListItem
            title="Learned how to ride a bike"
            subTitle="Successfully destroyed my parents' social lives"
            icon={<Icon as={FaBicycle} boxSize="4" />}
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