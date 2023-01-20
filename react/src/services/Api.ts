export const getHouse = () => {
  fetch("http://127.0.0.1:8787/viviendas")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
