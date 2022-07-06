import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Main } from './main'

export default { title: 'Example' }

export const MainStory = () => (
    <ChakraProvider>
        <Main name='Storybook' />
    </ChakraProvider>
)
