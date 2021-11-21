import { Box, Heading, Text } from '@chakra-ui/react'
import moment from 'moment';
import Link from 'next/link'
const BlogCard = ({ id, title, description, createdAt }) => {
    console.log(id)
    return (
        <Link as={`/blog/${id}`} href="/blog/[id]" passHref>
            <Box my='8'>
                <Heading _hover={{color:'#2a5fff'}} cursor='pointer' fontSize='xl'>{title}</Heading>
                <Text fontSize='xs' mt='1'>{moment(createdAt).format('DD MMMM YY')}</Text>
                <Text mt='2'>{description}</Text>
            </Box>
        </Link>
    )
}

export default BlogCard;