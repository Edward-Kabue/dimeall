import fetchData from '@utils/fetchData';

export const getprojectData = async () => {
  const data = await fetchData(
    `
        query projectData {
            tabContent {
		          id
		          slides {
			            id
			            title
			            description
		            }
		          SlideTitle
		          subTitle
	          }
        }
        `,
    {
      variables: {},
    }
  );

  return data.data.tabContent;
};
