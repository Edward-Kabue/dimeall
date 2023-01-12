import { getsettingsData } from '@data/graph/globals/settings';
import assetUrl from '@utils/assetUrl';
import React from 'react';
import { useQuery } from 'react-query';

const Logo = () => {
  const found = async () => await getsettingsData();
  const { data: generalSettings } = useQuery(
    'generalSettings',
    async () => await getsettingsData(),
    {
      refetchOnMount: false,
      retry: 2,
      refetchOnWindowFocus: false,
    }
  );
  console.log(generalSettings);
  return <img src={`${assetUrl}/${generalSettings.Logo.id}`} alt='' />;
};
export default Logo;
