import { Flex, Box, Heading, Text, Container, Badge, Avatar, Wrap, useColorModeValue as mode } from "@chakra-ui/react";
import ListWithVerticalLine from "./ListWithVerticalLine";

export default function Timeline() {

    return (
        <Box my='8'>
            <Heading fontSize='2xl' my='4'>My life so far 🧑‍💻</Heading>
            <ListWithVerticalLine/>
        </Box>
    )
}