import { Box, Heading, Text } from '@chakra-ui/react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import BlogCard from '../../components/BlogCard';
import usePosts from '../../lib/getposts';
import usePost from '../../lib/post';
import moment from 'moment';
import { useRouter } from 'next/router'
import style from '../../styles/Article.module.css';

export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const { post, isLoading, isError } = usePost(id);

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
      <NavBar page='blog'/>
      <Heading mt='8'>{post?.title}</Heading>
      <Text fontSize='sm' mt='2'>{moment(post?.createdAt).format('DD MMMM YYYY')}</Text>
      <Text className={style.content} my='8' dangerouslySetInnerHTML={{__html: post?.content}}></Text>
      <Footer/>
    </Box>
  )
}

