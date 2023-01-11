import Link from 'next/link';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import portfolios from '@data/Digital/portfolio.json';
import { getclientData } from '@data/graph/clients/clients';
import assetUrl from '@utils/assetUrl';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);
const found = async () => await getclientData();
const Clients = () => {
  const { data: clientLogos, isSuccess } = useQuery('clientLogos', found, {
    refetchOnMount: false,
    retry: 2,
    refetchOnWindowFocus: false,
  });
  console.log(clientLogos);
  return (
    <section
      className='portfolio section-padding bg-gray style-1'
      data-scroll-index='4'
    >
      <div className='container'>
        <div className='row'>
          <div className='col offset-lg-1'>
            <div className='section-head mb-60'>
              <h6 className='color-main text-uppercase wow fadeInUp'>
                Portfolio
              </h6>
              <h2 className='wow fadeInUp' data-wow-duration='1.3s'>
                Latest Projects <span className='fw-normal'>From Our Team</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='content slow'>
          <div className='portfolio-slider'>
            <Swiper
              className='swiper-container'
              slidesPerView={4}
              spaceBetween={50}
              speed={1000}
              pagination={{
                el: '.portfolio-slider .swiper-pagination',
              }}
              navigation={{
                nextEl: '.portfolio-slider .swiper-button-next',
                prevEl: '.portfolio-slider .swiper-button-prev',
              }}
              mousewheel={false}
              keyboard={true}
              autoplay={{
                delay: 4000,
              }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                787: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {isSuccess &&
                clientLogos.map((log, index) => (
                  <SwiperSlide key={index}>
                    <div className='links'>
                      <div className='links-content'>
                        <img
                          src={`${assetUrl}/${log.Logo.id}`}
                          alt={log.Logo.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className='swiper-pagination'></div>

            <div className='swiper-button-next'></div>
            <div className='swiper-button-prev'></div>
          </div>
          <p className='text-center'>
            {' '}
            <strong> 10000+ </strong> Happy users from around the world{' '}
          </p>
        </div>
      </div>
      <img
        src='/assets/img/projects/prog/shap_r.png'
        alt=''
        className='shap_r'
      />
      <img
        src='/assets/img/projects/prog/shap_l.png'
        alt=''
        className='shap_l'
      />
    </section>
  );
};

export default Clients;
