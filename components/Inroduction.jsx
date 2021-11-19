import { Flex, Box, Heading, Text, Button, HStack, Badge, Avatar, Wrap, useColorModeValue as mode } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

export default function Introduction() {

    return (
        <Box>
            <Flex mt={{base:'2', lg:'8'}} justify='space-between' mx='auto' direction={{base:'column-reverse', lg:'row'}}>
                <Box maxW='lg'>
                    <Heading fontSize='2xl' my='4'>Nguyen Hoang Trung Dung</Heading>
                    <Wrap>
                        <Badge mr='2' bg='#2A5FFF20' border='2px solid #2A5FFF'>Student</Badge>
                        <Badge mr='2' bg='#FF262620' border='2px solid #FF2626'>Maker</Badge>
                        <Badge mr='2' bg='#66DE9320' border='2px solid #66DE93'>Traveller</Badge>
                        <Badge bg='#F7EA0020' border='2px solid #F7EA00'>Dog Lover</Badge>
                    </Wrap>
                    <Text my='4'>I am an Electrical Engineering student at VinUniversity. I am the founder and president of VinMaker Society, the engineering society at VinUniversity. I mainly work with microcontrollers, but I also dabble in Web Development.</Text>
                </Box>
                <Avatar  border={mode('none', '3px solid #2A5FFF')} mt='4' size='2xl' src='https://github.com/TDung939.png'/>
            </Flex>
            <HStack>
                <Button>Explore Projects</Button>
                <Button  bg='transparent' border={mode('2px solid black', '2px solid white')} leftIcon={<FaDownload/>}>Download Resume</Button>
            </HStack>
        </Box>
    )
}