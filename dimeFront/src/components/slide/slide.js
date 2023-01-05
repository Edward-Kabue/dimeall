import { useEffect, useState } from 'react';

export default function Slide() {
  // Declare a state variable to store the current slide index
  const [slideIndex, setSlideIndex] = useState(0);

  // Use the useEffect hook to set up an effect that will be triggered
  // when the component is rendered or the slide index changes
  useEffect(() => {
    // Initialize WOW.js
    new WOW().init();

    // Set up a timer to change the slide every 5 seconds
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    // Return a cleanup function to stop the timer when the component is unmounted
    return () => clearInterval(timer);
  }, [slideIndex]);

  // Render the slide using the current slide index
  return (
    <div
      className='container-fluid'
      style={{
        backgroundImage: `url(${
          slideIndex === 0
            ? '/assets/img/header/header10_img.svg'
            : slideIndex === 1
            ? '/assets/img/header/header10_img.svg'
            : '/assets/img/header/header10_img.svg'
        })`,
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }}
    >
      <div className='row'>
        <div className='col-6'>
          {slideIndex === 0 && <h1 className='wow'>Slide 1</h1>}
          {slideIndex === 1 && <h1 className='wow'>Slide 2</h1>}
          {slideIndex === 2 && <h1 className='wow'>Slide 3</h1>}
        </div>
      </div>
    </div>
  );
}
