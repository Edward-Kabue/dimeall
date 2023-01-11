import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { useQuery } from 'react-query';
import { getprojectData } from '@data/graph/projects/projects';
import 'swiper/css';
import 'swiper/css/autoplay';
import ProjectCat from './ProjectCat';

SwiperCore.use([Autoplay]);

const Projects = () => {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const { data: tabContent, isSuccess } = useQuery(
    'tabContent',
    async () => await getprojectData()
  );
<<<<<<< HEAD

=======
  console.log(tabContent);
>>>>>>> 5159643f8954cf854cf4964ffc8243a8e41e29ae
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadSwiper(true);
    }, 0);
  }, []);

  return (
    <section className='projects section-padding style-13 overflow-hidden'>
      <div className='container'>
        <div className='section-head text-center mb-40 style-13'>
          <h6> portfolio </h6>
          <h2> Our Case & Projects </h2>
        </div>
        <ProjectCat />
        <div className='tab-content' id='pills-tabContent'>
          {isSuccess &&
            tabContent.map((cont, idx) => (
              <div
                className={`tab-pane fade ${idx === 1 ? 'show active' : ''}`}
                id={`pills-${cont.projCat[0].linkTabs_id.tab}`}
                role='tabpanel'
                aria-labelledby={`pills-${cont.projCat[0].linkTabs_id.tab}-tab`}
                key={idx}
              >
                <div className='projects-slider13'>
                  {loadSwiper && (
                    <Swiper
                      className='swiper-container overflow-visible'
                      spaceBetween={30}
                      observer={true}
                      observeParents={true}
                      speed={1000}
                      autoplay={{
                        delay: 5000,
                      }}
                      loop={false}
                      pagination={false}
                      navigation={false}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        480: {
                          slidesPerView: 1,
                        },
                        787: {
                          slidesPerView: 2,
                        },
                        991: {
                          slidesPerView: 2,
                        },
                        1200: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      {cont.slides.map((slide) => (
                        <SwiperSlide key={slide.directus_files_id.id}>
                          <div className='project-card'>
                            <a href='#' className='img img-cover'>
                              <img
                                src={`${assetsUrl}/${slide.directus_files_id.id}`}
                                alt=''
                              />
                              <div className='info'>
                                <div className='row align-items-center'>
                                  <div className='col-8'>
                                    <div className='inf'>
                                      <p> {slide.subTitle} </p>
                                      <h6> {slide.directus_files_id.title} </h6>
                                    </div>
                                  </div>
                                  <div className='col-4'>
                                    <div className='logo'>
                                      <img
                                        src='/assets/img/logos/39.png'
                                        alt=''
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  <div className='text-center mt-50'>
                    <a
                      href='#0'
                      className='btn rounded-pill text-dark bg-white border-1 brd-gray shadow-lg hover-orange3'
                      target='_blank'
                    >
                      <small>
                        {' '}
                        More Works <i className='fal fa-plus ms-2'></i>{' '}
                      </small>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className='links'>
          <div className='links-content'>
            <a href='#'>
              {' '}
              <img src='/assets/img/logos/40.png' alt='' />{' '}
            </a>
            <a href='#'>
              {' '}
              <img src='/assets/img/logos/41.png' alt='' />{' '}
            </a>
            <a href='#'>
              {' '}
              <img src='/assets/img/logos/42.png' alt='' />{' '}
            </a>
            <a href='#'>
              {' '}
              <img src='/assets/img/logos/43.png' alt='' />{' '}
            </a>
            <a href='#'>
              {' '}
              <img src='/assets/img/logos/44.png' alt='' />{' '}
            </a>
          </div>
          <p className='text-center'>
            {' '}
            <strong> 10000+ </strong> Happy users from around the world{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
