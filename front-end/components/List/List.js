import {Box, Text, Flex, Spacer} from '@chakra-ui/react'

export default function List({title, rating, popularity}) {
    return (
        <>
            <Box 
                padding='2'
                borderTop='0.5px solid grey'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                _hover={
                    {bg: '#2E2188'}
                }
                _active={
                    {
                        bg: '#dddfe2',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9'
                    }
                }
                fontWeight='semibold'
                _focus={
                    {boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'}
            }>
                <Flex>
                    <Text fontSize='1x1' as='samp' p='4'>
                        {title}</Text>
                    <Spacer/>
                    <Text fontSize='1xl' as='samp' p='3'>
                        {rating}</Text>
                    <Text fontSize='1xl' as='samp' p='3'>
                        {popularity}</Text>
                </Flex>
            </Box>
        </>
    )
}
