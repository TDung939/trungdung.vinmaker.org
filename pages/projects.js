import { Box, Flex, Img, Heading, Text, Link } from '@chakra-ui/react'
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

      <Box my='12'>
        <Heading fontSize='2xl' my='4'>Event Projects 🎉</Heading>
        {dataEvent.map((item, idx) => (
          <ProjectCard key={idx} id={idx} title={item.title} url={item?.url} description={item.description} imageSrc={item.imageSrc}/>
        ))}

        <Heading fontSize='2xl' my='4'>Web Development Projects 💻</Heading>
        {dataWeb.map((item, idx) => (
          <ProjectCard key={idx} id={idx} title={item.title} url={item?.url} description={item.description} imageSrc={item.imageSrc}/>
        ))}

        <Heading fontSize='2xl' my='4'>Electronic Projects 💡</Heading>
        {dataElec.map((item, idx) => (
          <ProjectCard key={idx} id={idx} title={item.title} url={item?.url} description={item.description} imageSrc={item.imageSrc}/>
        ))}

      </Box>

      <Footer/>
    </Box>
  )
}

const ProjectCard = ({id, imageSrc, title, url, description}) => {
  return (
  <Flex my='12' align='center' justify='space-between' direction={{base:'column', lg: `${id%2==0?'row':'row-reverse'}`}}>
    <Img border='4px solid #2a5fff' my='4' draggable={false} rounded='xl' maxW='xs' objectFit='cover' src={imageSrc}/>
    <Box maxW='xs'>
      <Link isExternal href={url}><Heading fontSize='lg'>{title}</Heading></Link>
      <Text mt='2' fontSize='sm'>{description}</Text>
    </Box>
  </Flex>
  )}

const dataWeb = [
  {
    title:'VinMaker Portal (Fullstack)',
    url: 'https://vinmaker.org/',
    description: "https://fb.watch/j6E-dGJKN3/ Our new website portal, which has been designed to personalize membership experience. Personal dashboard, Active community forum, One-click register for future events",
    imageSrc: 'https://res.cloudinary.com/dpec7wjtk/image/upload/v1642935353/myPortfolio-website/Screen_Shot_2022-01-23_at_17.54.11_goacnx.png'
  },
  
  {
    title:'VinUni Makerspace Network (Fullstack)',
    url: 'https://makerspaces.vinmaker.org/',
    description: "A one-stop learning hub for VinUniversity's many makerspaces and labs with unlimited resources, information, and training modules. Members come here to get info about the makerspaces, get trained, and book machines to use for their projects.",
    imageSrc: 'https://res.cloudinary.com/dpec7wjtk/image/upload/v1642935353/myPortfolio-website/Screen_Shot_2022-01-23_at_17.54.11_goacnx.png'
  },
  {
    title:'VinUni Research Bootcamp (Fullstack)',
    url: 'https://www.vinuniresearchbootcamp.org/',
    description: "VRB is an online one-week immersive event for students to spend a week focused on learning the researching skills they’ve always wanted to tackle. I created a custom Event Management System, which (IMHO) makes hosting this online event more tolerable.",
    imageSrc: 'https://res.cloudinary.com/dpec7wjtk/image/upload/v1642933979/myPortfolio-website/vinuni-research-bootcamp_clovfh.png'
  },

  {
    title:'VinMagazine (Frontend)',
    url: 'https://vinmag.co/',
    description: 'I designed and developed the website for VinMagazine, a media platform founded by VinUniversity students to create a space for Vietnamese youths to share their creations, ideas, and perspectives on their own terms.',
    imageSrc: 'https://res.cloudinary.com/dpec7wjtk/image/upload/v1642934965/myPortfolio-website/Screen_Shot_2022-01-23_at_17.48.20_zz7oep.png'
  },
  
]


const dataElec = [
  {
    title:'Gesture Recognition for Zoom',
    url: 'https://github.com/TDung939/Gesture-recognition-for-Zoom',
    description: 'A wearable gadget that will allow users to focus on their Zoom meeting rather than messing with the mouse to operate tiny on-screen buttons',
    imageSrc: 'https://res.cloudinary.com/dpec7wjtk/image/upload/v1678174154/20220531_043450-min_rhzviw.jpg'
  },

  {
    title:'Touch of Life',
    url: 'https://github.com/TDung939/touch-of-life',
    description: 'An interactive art display that comes to life when you touch the plant pot, generating life to an invisible plant, capturing its shadow. Created using Processing 3 and Arduino, with a ton of love.',
    imageSrc: 'https://camo.githubusercontent.com/0793d95372c08dbd7a990565d3eda69cb337bdd1538cffe4f2a74868c4d52164/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6f62534a5332564e736b6d6f5168746c46552f67697068792e676966'
  },

  {
    title:'Halloween Animated Prop',
    url: 'https://fb.watch/aIYYcH3xLb/',
    description: 'To make the Halloween event more exciting, I made this half-body guy with PVC tubes and a wiper motor. It took me 2 weeks to design and bought the materials.',
    imageSrc: 'https://res.cloudinary.com/dpec7wjtk/image/upload/v1642936685/myPortfolio-website/halloween_fwwx8r.png'
  }
]

const dataEvent = [
  {
    title:'STEAM Festival 2021',
    url: 'https://vinuni.edu.vn/vinunians-spread-their-passion-for-technology/',
    description: 'Partnered with the National Innovation Center, a unit under the Ministry of Planning and Investment, to co-organized the STEAM Festival 2021 to promote STEAM knowledge. Successfully attracted 8,000 attendees, including high-schoolers, university students, and government officials to visit and experience.',
    imageSrc: 'https://res.cloudinary.com/dpec7wjtk/image/upload/v1642936686/myPortfolio-website/STEAM-VinMaker_y93fzq_yvyqcm.jpg'
  },
]