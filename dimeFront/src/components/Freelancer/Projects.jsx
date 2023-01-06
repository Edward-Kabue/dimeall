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

  console.log(tabContent);
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
            tabContent.map((tab) => (
              <div
                className={`tab-pane fade ${tab.id === 0 ? 'show active' : ''}`}
                id={`pills-${tab.id}`}
                role='tabpanel'
                aria-labelledby={`pills-${tab.id}-tab`}
                key={tab.id}
              ></div>
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
