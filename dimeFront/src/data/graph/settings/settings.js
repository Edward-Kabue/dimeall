import fetchData from '@utils/fetchData';

export const getsettingsData = async () => {
  const data = await fetchData(
    `query settingsData {
            siteSettings {
                siteLogo {
                     id
                     title
                }
            }
    }`,
    {
      variables: {},
    }
  );

  return data.data.siteSettings;
};
