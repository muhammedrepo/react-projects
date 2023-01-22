import axios from "axios";

const url = "https://api.unsplash.com/search/photos";

const searchImage = async (term) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: "Client-ID IO5SqkcPuk1Jcy1V3GBX8_mSba76vf5aIm_Vc15p2c4",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImage;
