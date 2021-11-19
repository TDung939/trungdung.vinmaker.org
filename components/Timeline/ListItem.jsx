import { Stack, Flex, Circle, Text, useColorModeValue, Heading } from '@chakra-ui/react'
import * as React from 'react'

export const ListItem = (props) => {
  const { title, subTitle, icon, isLastItem, children, ...stackProps } = props
  return (
    <Stack as="li" direction="row" spacing="4" {...stackProps}>
      <Flex direction="column" alignItems="center" aria-hidden="true">
        <Circle
          bg='transparent'
          size="8"
          borderWidth="2px"
          borderColor={useColorModeValue('black', 'white')}
          color={useColorModeValue('black', 'white')}
        >
          {icon}
        </Circle>
        {!isLastItem && <Flex flex="1" borderRightWidth="1px" mb="-12" />}
      </Flex>
      <Stack spacing="4" pt="1" flex="1">
        <Flex direction="column">
          <Heading fontSize="md" fontWeight="semibold">
            {title}
          </Heading>
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            {subTitle}
          </Text>
        </Flex>
      </Stack>
    </Stack>
  )
}
