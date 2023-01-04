import {
    Box,
    Menu,
    MenuButton,
    Button,
    Center
} from '@chakra-ui/react'
import Link from "next/link"
import {RiHome2Fill, RiPriceTag3Fill, RiFocus3Fill} from "react-icons/ri";
import { GiPerspectiveDiceSixFacesRandom} from "react-icons/gi";

function randomVn(){
    const maxtam = 30000
    const random = Math.floor(Math.random() * maxtam) + 1;
    return random
}

export default function Navbar () {
    return (<Box sx={
        {
            width: '100%',
            position: 'fixed',
            bottom: 0,
            paddingTop: 4,
            paddingBottom: 4,
            backgroundColor: '#1D1B22',
            borderTop: '0.5px solid grey',
            zIndex: 1
        }
    }>
        <Center>
            <Menu>
                <Link href='/'>
                <MenuButton as={Button}
                    size='lg'
                    sx={
                        {color: 'white'}
                    }
                    leftIcon={<RiPriceTag3Fill/>}
                    variant="text">
                    tags
                </MenuButton>
                </Link>
                <Link href='/'>
                <MenuButton as={Button}
                    size='lg'
                    sx={
                        {color: 'white'}
                    }
                    leftIcon={<RiHome2Fill/>}
                    variant="text">
                    Home
                </MenuButton>
                </Link>
                <Link href={'/vn/' + randomVn()}>
                <MenuButton as={Button}
                    size='lg'
                    sx={
                        {color: 'white'}
                    }
                    leftIcon={<GiPerspectiveDiceSixFacesRandom/>}
                    variant="text">
                    Random
                </MenuButton>
                </Link>
            </Menu>
        </Center>
    </Box>)
}
