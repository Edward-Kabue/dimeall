import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { getsliderData } from '@data/graph/slider/slider';
import 'swiper/css';
import 'swiper/css/autoplay';
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HeroSlider = () => {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const { data: heroSlider, isSuccess } = useQuery(
    'heroSlider',
    async () => await getsliderData()
  );
  console.log(heroSlider);
  return (
    <>
      <div className='home-area'>
        <Swiper
          slidesPerView={1}
          navigation={true}
          speed={1000}
          autoplay={{
            delay: 5000,
          }}
          loop={true}
          pagination={true}
          className='mySwiper home-slides'
        >
          {isSuccess &&
            heroSlider.map((slide) => (
              <SwiperSlide
                key={slide.id}
                style={{
                  backgroundImage: `url(${assetsUrl}/${slide.image.id})`,
                }}
              >
                <div className='banner-item'>
                  <div className='container'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12'>
                        <div className='home-content'>
                          <span className='sub-title'>{slide.subTitle}</span>
                          <h1>{slide.title}</h1>
                          <Link href='/'>
                            <a className='default-btn style-two'>
                              <span className='ri-arrow-right-s-line'></span>
                              {slide.btnText}
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default HeroSlider;
