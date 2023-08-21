/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../services/fetchData";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getDetails(id).then((res) => setData(res));
  }, [id]);
  return (
    <>
      <div>{data.title}</div>
      <button onClick={() => {}}>Buy Now</button>
    </>
  );
};

export default ProductDetails;
