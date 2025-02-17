
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
            <SwiperSlide className='min-h-[calc(100vh-65px)] '>
                <div className='flex items-center p-5 gap-10'>
                    <div className='flex-1 space-y-5'>
                        <h3 className='text-4xl font-semibold'>Achieve Your Goals</h3>
                        <p>Turn your dreams into reality with structured planning and discipline. Track your progress and stay motivated!</p>
                    </div>
                    <div className='flex-1'>
                        <img  src="/goals.webp" alt="" />
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className='h-screen  '>
                <div className='flex items-center p-5 gap-10 flex-row-reverse'>
                    <div className='flex-1 space-y-5'>
                        <h3 className='text-4xl font-semibold'>Stay Consistent</h3>
                        <p>Consistency is the key to success. Develop habits that keep you moving forward every day!"
                            Image Idea: A calendar with checkmarks, symbolizing daily progress</p>
                    </div>
                    <div className='flex-1'>
                        <img src="/consistent.webp" alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-screen '>
                <div className='flex items-center p-5 gap-10'>
                    <div className='flex-1 space-y-5'>
                        <h2 className='text-4xl font-semibold'>Overcome Challenges</h2>
                        <p>Success comes from overcoming obstacles. Stay strong, stay focused, and keep going!"
                            Image Idea: A person breaking through a barrier or crossing a finish line</p>
                    </div>
                    <div className='flex-1'>
                        <img src="/challenges.webp" alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-screen '>
                <div className='flex items-center p-5 gap-10 flex-row-reverse'>
                    <div className='flex-1 space-y-5'>
                        <h3 className='text-4xl font-semibold'>Celebrate Your Wins</h3>
                        <p>Every step forward is a success! Celebrate your achievements and use them as fuel for your next challenge.</p>
                    </div>
                    <div className='flex-1'>
                        <img src="/wins.webp" alt="" />
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;


