import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Text} from '@chakra-ui/react'

const config = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    initialSlide: 1,
    centerMode: true,
};


export default function SliderDiscover() {
    return (
        <>
        <Box sx={
            {paddingTop: 5, paddingLeft: 5}
        }>
            <Text fontSize='2xl' as='b'>Discover</Text>
        </Box>

        <Box sx={
            {padding: '6', marginBottom: 5}
        }>
            <Slider {...config}>
                <Box bg={'white'}
                    sx={
                        {
                            height: 380,
                            background: 'no-repeat center',
                            backgroundImage: "https://s2.vndb.org/cv/77/49977.jpg"
                        }
                    }/>
                <Box bg={'white'}
                    sx={
                        {
                            height: 380,
                            background: 'no-repeat center',
                            backgroundImage: "https://s2.vndb.org/cv/92/46492.jpg"
                        }
                    }/>
                <Box bg={'white'}
                    sx={
                        {
                            height: 380,
                            background: 'no-repeat center',
                            backgroundImage: "https://s2.vndb.org/cv/67/45667.jpg"
                        }
                    }/>
                <Box bg={'white'}
                    sx={
                        {
                            height: 380,
                            background: 'no-repeat center',
                            backgroundImage: "https://s2.vndb.org/cv/06/33706.jpg"
                        }
                    }/>

            </Slider>
        </Box>
        </>
    )
}
