import fetchData from '@utils/fetchData';

export const getsettingsData = async () => {
  const data = await fetchData(
    `query settingsData {
        generalSettings {
            Logo {
              id
            }
            siteFavicon {
                id
            }
            siteTitle
        }
    }`,
    {
      variables: {},
    }
  );

  return data.data.generalSettings;
};
