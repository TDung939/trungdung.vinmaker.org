import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
    useMergeRefs,
    useColorModeValue as mode,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'
import * as React from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
  
export const PasswordField = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <FormControl id="password">
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Shhh...</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {process.env.NEXT_PUBLIC_PASSWORD_HINT}
            </ModalBody>

            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        <Flex justify="space-between">
            <FormLabel>Password</FormLabel>
            <Box as='button' onClick={onOpen}  color='#2a5fff' fontWeight="semibold" fontSize="sm">
                Need hint?
            </Box>
        </Flex>
        <InputGroup>
            <Input
            name="password"
            type='password'
            autoComplete="current-password"
            />
        </InputGroup>
        </FormControl>
    )
}