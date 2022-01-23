import { Box, Button, Text, Heading, Flex, HStack, useColorModeValue as mode, useColorMode, IconButton,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input
} from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { HiMoon, HiSun } from 'react-icons/hi';
import AuthContext from '../../context/AuthContext';
import usePosts from '../../lib/getposts';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';


export default function Dashboard() {
    const { posts, isLoading, isError } = usePosts();
    const { toggleColorMode } = useColorMode();
    const {logout} = useContext(AuthContext)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const handleReset = () => {
        setTitle('');
        setDescription('');
        setContent('');
    }
    const handleSubmit = async() => {
        try {
        const res = await axios.post('/api/posts', 
        {
            title: title,
            description: description,
            content: content
        });
        console.log(res)
        handleReset();
        onClose();
        } catch (err) {
            console.log(err)
        }

    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
    
    const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image'
    ]
    

  return (
      <Box my='12' >
           <Drawer onClose={onClose} isOpen={isOpen} size='full'>
                <DrawerOverlay />
                <DrawerContent background={mode('white','#161616')}>
                <DrawerHeader>
                    <Input 
                    placeholder='Title'
                    maxW='xl'
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    />
                </DrawerHeader>
                <DrawerBody>
                   
                    <Input 
                    placeholder='Description'
                    maxW='xl'
                    mb='6'
                    mr={{base:'0', lg:'8'}}
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    />
                    <ReactQuill modules={modules} formats={formats} theme="snow" value={content} onChange={setContent}/>
                </DrawerBody>
                <DrawerFooter>
                    <Button onClick={() => handleSubmit()} mr='4'>Publish</Button>
                    <Button onClick={() => handleReset()} colorScheme='red'>Discard</Button>
                </DrawerFooter>
                <DrawerCloseButton />
                </DrawerContent>
            </Drawer>
            <Flex justify='space-between'>
                <HStack>
                    <IconButton onClick={toggleColorMode} icon={mode(<HiMoon />, <HiSun/>)}/>
                    <Button leftIcon={<FaPlus/>} onClick={onOpen}>Add post</Button>
                </HStack>
                
                <Button onClick={() => logout()}>Log out</Button>
            </Flex>
           <Heading mt='8'>All posts</Heading>
           {isLoading? <Heading my='8'>Loading...</Heading> : posts?.map((post, idx) => {
          return (
              <BlogCard key={idx} id={post.id} title={post.title} description={post.description}/>
          )
      })}
      </Box>
   
  )
}


const BlogCard = ({ id, title, description, createdAt }) => {
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/api/posts/${id}`);
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Box my='8'>
            <Heading _hover={{color:'#2a5fff'}} cursor='pointer' fontSize='xl'>{title}</Heading>
            <Text mt='2'>{description}</Text>
            <HStack my='2'>
                <IconButton size='xs' icon={<FaEdit/>}/>
                <IconButton onClick={() => handleDelete()} colorScheme='red' size='xs' icon={<FaTrash/>}/>
            </HStack>
        </Box>
    )
}
