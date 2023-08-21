export const getData = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getDetails = (id) => {
  return fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );
};
