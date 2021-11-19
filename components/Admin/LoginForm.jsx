import AuthContext from '../../context/AuthContext'
import * as React from 'react'

import {
  Button, chakra, Stack,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  useDisclosure,
  useColorModeValue as mode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast
} from '@chakra-ui/react'
import { useState, useContext } from 'react'

export const LoginForm = (props) => {
  const toast = useToast();
  const { login } = useContext(AuthContext);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    login({ password })
  }

  return (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault() // your login logic here
    }}
    {...props}
  >
    <Stack spacing="6">
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
                <Button onClick={onClose}>
                Close
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        <Flex justify="space-between">
            <FormLabel>Password</FormLabel>
            <Box as='button' onClick={onOpen}  color='#2a5fff' fontWeight="semibold" fontSize="sm">
                Need a hint?
            </Box>
        </Flex>
        <InputGroup>
            <Input
            name="password"
            type='password'
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
        </InputGroup>
        </FormControl>
      <Button type="submit" size="lg" fontSize="md" onClick={() => handleSignIn()}>
        Sign in
      </Button>
    </Stack>
  </chakra.form>
)}