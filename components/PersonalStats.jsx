import { Box, Heading, Text, useColorModeValue as mode, SimpleGrid, Spinner, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react";
import useGithub from "../lib/github";
import { FaGithub } from "react-icons/fa";

export default function PersonalStats() {
    const { github, isLoading, isError } = useGithub();
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
                <Box border='4px solid #2a5fff' height='150px' minWidth='200px' rounded='xl' p='4'>
                    <Flex>
                        <FaGithub/> 
                        <Heading ml='2' fontSize='md'>Github</Heading>
                    </Flex>
                    
                    {isLoading? <Spinner/> :
                    <Box mt='2'>
                        <Text>{github.publicRepos} Public Repos</Text>
                        <Text>{github.followers} Followers</Text>
                        <Text>{github.following} Following</Text>
                    </Box>
                    }
        
                </Box>
                {/* <Box border='4px solid #2a5fff' height='150px' minWidth='200px' rounded='xl'/>
                <Box border='4px solid #2a5fff' height='150px' minWidth='200px' rounded='xl'/> */}
            </SimpleGrid>
        </Box>
    )
}