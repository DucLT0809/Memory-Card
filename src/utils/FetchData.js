import axios from "axios";

const fetchData = async () => {
  await axios
    .get(url)
    .then((res) => {
      const dog = {
        id: res.data.data.id,
        imgUrl: res.data.data.images.original.url,
      };
      console.log(JSON.stringify(dog));

      return dog;
    })
    .catch((error) => console.log(error));
};
const url =
  "https://api.giphy.com/v1/gifs/random?api_key=x600WWV0cF8CXazg47alOC5HewB5g0gr&tag=dog&rating=g";
export const getData = async () => {
  const arr = [];
  for (let index = 0; index < 12; index++) {
    const res = await fetchData();
    arr.push(res);
  }
  return arr;
};
fetchData();
