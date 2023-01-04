import {
    Box,
    Menu,
    MenuButton,
    Button,
    Center
} from '@chakra-ui/react'

import logo from '../../public/logo.svg'
import Image from 'next/image'


export default function Header() {
    return (
        <Box sx={
            {
                width: '100%',
                paddingTop: 2,
                paddingBottom: 2,
                backgroundColor: '#1D1B22',
                borderBottom: '0.5px solid grey'
            }
        }>
                <Menu>
                    <MenuButton as={Button}
                        size='lg'
                        sx={
                            {color: 'white'}
                        }
                        leftIcon={<Image src={logo} />}
                        variant="text"></MenuButton>
                </Menu>
        </Box>
    )
}
