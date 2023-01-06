import React from 'react';

import { useQuery } from 'react-query';
import { getprojectCatData } from '@data/graph/projects/projectCategories';

function ProjectCat() {
  const { data: linkTabs, isSuccess } = useQuery(
    'linkTabs',
    async () => await getprojectCatData()
  );

  console.log(linkTabs);

  return (
    <div className='links-tabs'>
      <ul
        className='nav nav-pills mb-40 justify-content-center'
        id='pills-tab'
        role='tablist'
      >
        {isSuccess &&
          linkTabs.map((link) => (
            <li className='nav-item' role='presentation' key={link.id}>
              <button
                className={`nav-link ${link.id === 0 ? 'active' : ''}`}
                id={`pills-${link.id}-tab`}
                data-bs-toggle='pill'
                data-bs-target={`#pills-${link.tab}`}
                type='button'
                role='tab'
                aria-controls={link.control}
                aria-selected={link.id === 0 ? 'true' : 'false'}
              >
                {link.name}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProjectCat;
