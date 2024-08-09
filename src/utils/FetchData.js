import axios from "axios";
// fetch emoji from giphy api
export const fetchData = async () => {
  let response;
  const url =
    "https://api.giphy.com/v2/emoji?api_key=x600WWV0cF8CXazg47alOC5HewB5g0gr&limit=6&offset=0";
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
