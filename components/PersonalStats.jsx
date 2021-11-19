import { Box, Heading, Text, useColorModeValue as mode, SimpleGrid } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function PersonalStats() {

    return (
        <Box my='8'>
            <Heading fontSize='2xl' my='4'>Personal Stats 🚀</Heading>

            <SimpleGrid 
            my='4' 
            spacing='8'
            columns={{
                base:'1',
                lg:'3'
            }}
            >
                <Box border='4px solid #2a5fff' height='150px' minWidth='200px' rounded='xl'/>
                <Box border='4px solid #2a5fff' height='150px' minWidth='200px' rounded='xl'/>
                <Box border='4px solid #2a5fff' height='150px' minWidth='200px' rounded='xl'/>
            </SimpleGrid>
        </Box>
    )
}