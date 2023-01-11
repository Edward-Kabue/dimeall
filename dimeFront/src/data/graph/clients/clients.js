import fetchData from '@utils/fetchData';

export const getclientData = async () => {
  const data = await fetchData(
    ` query clientData {
         clientLogos{
            Logo{
              id
              title
            }
          }
        }`,
    {
      variables: {},
    }
  );

  return data.data.clientLogos;
};
