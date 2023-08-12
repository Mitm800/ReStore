import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,  
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  
        autoplaySpeed: 3000,  
    };

    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src="/images/img1.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight: 500 }} />
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight: 500 }} />
                </div>
                <div>
                    <img src="/images/img3.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight: 500 }} />
                </div>
            </Slider>
            <Box display='flex' justifyContent='center' sx={{ p: 4 }}>
                <Typography variant='h1'>
                    Welcome to ReStore
                </Typography>
            </Box>
        </>
    );
}
