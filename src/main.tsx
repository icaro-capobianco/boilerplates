import { ChakraProvider, Heading } from '@chakra-ui/react'
import React from 'react'
import { createRoot } from 'react-dom/client'

export const Main = ( { name } : { name : string } ) => (
    <Heading>Hello {name}!</Heading>
)

const root = document.getElementById('root')

if ( ! root )
    throw new Error('No root element found')


createRoot(root).render((
    <ChakraProvider>
        <Main name='React' />
    </ChakraProvider>
))
