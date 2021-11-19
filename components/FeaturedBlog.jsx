import { Box, Heading, Text, useColorModeValue as mode, HStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function FeaturedBlog() {

    return (
        <Box my='8'>
            <Heading fontSize='2xl' my='4'>Stuff I write ✍️</Heading>

            <HStack my='4' spacing='8' overflow='scroll' sx={{'&::-webkit-scrollbar': {display: 'none'}}}>
                <Box border='2px solid #2a5fff' height='240px' minWidth='200px' rounded='xl'/>
                <Box border='2px solid #2a5fff' height='240px' minWidth='200px' rounded='xl'/>
                <Box border='2px solid #2a5fff' height='240px' minWidth='200px' rounded='xl'/>
                <Box border='2px solid #2a5fff' height='240px' minWidth='200px' rounded='xl'/>
                <Box border='2px solid #2a5fff' height='240px' minWidth='200px' rounded='xl'/>
                <Box border='2px solid #2a5fff' height='240px' minWidth='200px' rounded='xl'/>
            </HStack>

            <Text 
            as='button' 
            color={mode('gray.600', 'gray.400')}
            _hover={{
                color: `${mode('black', 'white')}`
            }}
            >
                More posts here <ArrowForwardIcon/>
            </Text>
        </Box>
    )
}