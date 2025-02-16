
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className='max-h-screen border '>
                <img className='w-full' src="https://templates.envytheme.com/psylo/default/assets/images/main-slides/slides-1.jpg" alt="" />
                
                
            </SwiperSlide>
            <SwiperSlide className='h-screen border '>
                <img src="https://templates.envytheme.com/psylo/default/assets/images/main-slides/slides-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className='h-screen border '>
                <img src="https://templates.envytheme.com/psylo/default/assets/images/main-slides/slides-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className='h-screen border '>
                <img src="https://templates.envytheme.com/psylo/default/assets/images/main-slides/slides-1.jpg" alt="" />
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;


