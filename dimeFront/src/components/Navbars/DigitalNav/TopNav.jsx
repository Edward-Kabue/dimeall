import React from 'react';

const TopNav = () => {
  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains('dropdown-toggle')
      ? event.target
      : event.target.querySelector('.dropdown-toggle');
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add('show');
    dropDownMenu?.classList?.add('show');
  };

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains('dropdown')
      ? event.target
      : event.target.closest('.dropdown');
    const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
    const dropDownMenu = dropdown.querySelector('.dropdown-menu');

    dropDownToggler?.classList?.remove('show');
    dropDownMenu?.classList?.remove('show');
  };

  return (
    <div className='top-navbar style-1'>
      <div className='container'>
        <div className='content'>
          <div className='row align-items-center'>
            <div className='col-lg-8'>
              <div className='top-links'>
                <div className='text text-white p-2'>
                  <a href='#' className='me-4'>
                    <i className='fas fa-envelope-open me-2 color-blue7'></i>
                    <span>info@dimetechgroup.com</span>
                  </a>
                  <a href='#'>
                    <i className='fas fa-phone me-2 color-blue7'></i>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='r-side'>
                <div className='socail-icons'>
                  <a href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
