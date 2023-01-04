import {
    Box,
    Center,
    Text,
    Image,
    useToast
} from "@chakra-ui/react";
import Cover from "../Cover/cover";
import Slider from "react-slick";
import bannerBlocked from '../../public/bannerBlocked.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useState} from "react";

const config = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    initialSlide: 1,
    centerMode: true
}

export default function Vninfo({
    title,
    titleJpn,
    cover,
    isNsfw,
    description,
    screenshots = []
}) {

    const [coverProtection, setCoverProtection] = useState(cover)

    function coverVerify() {
        if (isNsfw == true) 
            return "https://i.ibb.co/ZWQpFTL/banner-Blocked.jpg"
        else
            return cover
    }

    useEffect(() => {
        setCoverProtection(coverVerify())
      }, [cover]);


    function show() {
        setCoverProtection(cover)
    }


    return (<Box sx={
        {padding: '5'}
    }>
        <Center>
            <Text fontSize='2xl' as='b' p='2' align='center'> {title}</Text>
        </Center>

        <Center>
            <Text fontSize='1xl' as='b' p='2' align='center'> {titleJpn}</Text>
        </Center>

        <Cover show={show} coverVerify={coverProtection}/>

        <Center>
            <Text fontSize='sm' p='12'> {description}</Text>
        </Center>

        <Center>
            <Text fontSize='2xl' as='b' p='2' align='center'> screenshots</Text>
        </Center>

        <Box sx={
            {
                marginBottom: 24,
                padding: 3
            }
        }>
            <Slider {...config}> {
                screenshots.map((iten, index) => (<Box>
                    <Image src={iten}/>
                </Box>))
            } </Slider>
        </Box>
    </Box>)
}
