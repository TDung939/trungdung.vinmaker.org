import { Box, Flex, Img, Heading, Text } from '@chakra-ui/react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'


export default function Home() {
  return (
    <Box 
    as='section' 
    maxW='3xl' 
    mx='auto'
    px={{
      base: '6',
      lg:'8'
    }}
    >
      <NavBar page='projects'/>
      {data.map((item, idx) => (
        <ProjectCard key={idx} id={idx} title={item.title} description={item.description} imageSrc={item.imageSrc}/>
      ))}

      <Footer/>
    </Box>
  )
}

const ProjectCard = ({id, imageSrc, title, description}) => {
  return (
  <Flex my='12' align='center' justify='space-between' direction={{base:'column', lg: `${id%2==0?'row':'row-reverse'}`}}>
    <Img border='4px solid #2a5fff' my='4' draggable={false} rounded='xl' maxW='xs' objectFit='cover' src={imageSrc}/>
    <Box maxW='xs'>
      <Heading fontSize='2xl'>{title}</Heading>
      <Text mt='2' fontSize='sm'>{description}</Text>
    </Box>
  </Flex>
  )}

const data = [
  {
    title:'Touch of Life',
    description: 'An interactive art display that comes to life when you touch the plant pot, generating life to an invisible plant, capturing its shadow. Created using Processing 3 and Arduino, with a ton of love.',
    imageSrc: 'https://camo.githubusercontent.com/0793d95372c08dbd7a990565d3eda69cb337bdd1538cffe4f2a74868c4d52164/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6f62534a5332564e736b6d6f5168746c46552f67697068792e676966'
  },

  {
    title:'Halloween Animated Prop',
    description: 'To make the Halloween event more exciting, I made this half-body guy with PVC tubes and a wiper motor. It took me 2 weeks to design and bought the materials.',
    imageSrc: 'https://www.thecuriousseal.com/halloween.png'
  },

  {
    title:'STEAM Festival 2021',
    description: 'Partnered with the National Innovation Center, a unit under the Ministry of Planning and Investment, to co-organized the STEAM Festival 2021 to promote STEAM knowledge. Successfully attracted 8,000 attendees, including high-schoolers, university students, and government officials to visit and experience.',
    imageSrc: 'https://res.cloudinary.com/dpec7wjtk/image/upload/v1622788495/VinMakerSpace%20Network/STEAM-VinMaker_y93fzq.jpg'
  },

  {
    title:'VinMagazine',
    description: 'I designed and developed the website for VinMagazine, a media platform founded by VinUniversity students to create a space for Vietnamese youths to share their creations, ideas, and perspectives on their own terms.',
    imageSrc: 'https://www.thecuriousseal.com/vinmag.png'
  },
  
]