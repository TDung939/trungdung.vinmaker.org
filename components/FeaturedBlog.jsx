import { Box, Heading, Text, useColorModeValue as mode, HStack, Flex, Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import useSWR from "swr";
import axios from "axios";
import moment from "moment";

const fetcher = url => axios.get(url).then(res => res.data)

export default function FeaturedBlog() {
    const { data } = useSWR('/api/posts', fetcher);
    console.log(data)
    return (
        <Box my='8'>
            <Heading fontSize='2xl' my='4'>Stuff I write ✍️</Heading>

            <HStack my='4' spacing='8' overflow='scroll' sx={{'&::-webkit-scrollbar': {display: 'none'}}}>
                {data?.slice(0,5).map((post, idx) => (
                    <FeauturedBlogCard key={idx} title={post.title} description={post.description} createdAt={post.createdAt}/>
                ))}
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

const FeauturedBlogCard = ({title, createdAt, description}) => (
    <Flex  border={mode('2px solid black', '2px solid white')} minHeight='240px' maxWidth='200px' rounded='xl' p='4' direction='column' justify='space-between'>
        <Box>
            <Heading _hover={{color:'#2a5fff'}} cursor='pointer' fontSize='md'>{title}</Heading>
            <Text fontSize='sm' mt='2' noOfLines={2}>{description}</Text>
        </Box>
        <Spacer />
        <Text fontSize='xs' >{moment(createdAt).format('DD MMMM YY')}</Text>
    </Flex>
)