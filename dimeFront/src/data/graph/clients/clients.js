import fetchData from '@utils/fetchData';

export const getclientData = async () => {
  const data = await fetchData(
    `
          #graphql
        query clientData {
            client_logos{
                id 
                logos{
                    id
             directus_files_id{
                    id
                    }
                 }
            }`,
    {
      variables: {},
    }
  );

  return data.data.client_logos;
};
