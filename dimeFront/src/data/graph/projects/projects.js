import fetchData from '@utils/fetchData';

export const getprojectData = async () => {
  const data = await fetchData(
    `
          #graphql
        query projectData {
           tabContent {
                slides(limit: 4) {
                  id
                  directus_files_id {
                    id
                    title
                  }
                }
                SlideTitle
                subTitle
                projCat {
                  id
                  linkTabs_id {
                    tab
                  }
                }
              }
        }
        `,
    {
      variables: {},
    }
  );

  return data.data.tabContent;
};
