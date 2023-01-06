import fetchData from '@utils/fetchData';

export const getprojectCatData = async () => {
  const data = await fetchData(
    `
        query projectCatData {
            linkTabs {
            id
            name
            tab
            control
          }
        }
        `,
    {
      variables: {},
    }
  );

  return data.data.linkTabs;
};
