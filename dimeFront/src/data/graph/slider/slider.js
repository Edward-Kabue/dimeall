import fetchData from '@utils/fetchData';

export const getsliderData = async () => {
  const data = await fetchData(
    `query sliderData {
        heroSlider {
            title
            btnLink
            btnText
            subTitle
            image{
                id
            }
        }
    }`,
    {
      variables: {},
    }
  );

  return data.data.heroSlider;
};
