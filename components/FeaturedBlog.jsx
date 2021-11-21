import { Box, Heading, Text, useColorModeValue as mode, HStack, Flex, Spacer, Spinner } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import moment from "moment";
import usePosts from "../lib/getposts";
import Router from "next/router";
import Link from 'next/link'

export default function FeaturedBlog() {
    const { posts, isLoading, isError } = usePosts()
    return (
        <Box my='8'>
            <Heading fontSize='2xl' my='4'>Stuff I write ✍️</Heading>

            <HStack my='4' spacing='8' overflow='scroll' sx={{'&::-webkit-scrollbar': {display: 'none'}}}>
                {isLoading? <Spinner /> : posts?.slice(0,5).map((post, idx) => (
                    <FeauturedBlogCard key={idx} id={post.id} title={post.title} description={post.description} createdAt={post.createdAt}/>
                ))}
            </HStack>

            <Text 
            as='button' 
            onClick={()=>Router.push('/blog')}
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

const FeauturedBlogCard = ({ id, title, createdAt, description}) => (
    <Link as={`/blog/${id}`} href="/blog/[id]" passHref>
        <Flex  border={mode('2px solid black', '2px solid white')} minHeight='240px' minWidth='200px' rounded='xl' p='4' direction='column' justify='space-between'>
            <Box>
                <Heading _hover={{color:'#2a5fff'}} cursor='pointer' fontSize='md'>{title}</Heading>
                <Text fontSize='sm' mt='2' noOfLines={2}>{description}</Text>
            </Box>
            <Spacer />
            <Text fontSize='xs' >{moment(createdAt).format('DD MMMM YY')}</Text>
        </Flex>
    </Link>
)