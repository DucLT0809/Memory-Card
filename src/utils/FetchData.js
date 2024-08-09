import axios from "axios";
// fetch emoji from giphy api
export const fetchData = async () => {
  let response;
  const url = import.meta.env.VITE_API_ENDPOINT;

  await axios
    .get(url)
    .then((res) => {
      response = res.data.data;
    })
    .catch(() => {
      console.log("error");
    });
  return response;
};
// destructuring data and duplicate it
export const handleResponseData = async (data) => {
  const duplicatedData = data.concat(data);
  return duplicatedData.map((e, index) => ({
    newId: index,
    name: e.id,
    imgUrl: e.images.fixed_height.url,
  }));
};
