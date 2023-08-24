/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetails } from "../../services/fetchData";
import { Button, Card } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getDetails(id).then((res) => setData(res));
  }, [id]);

  const { isUserLogin } = useContext(AuthContext);

  const btnClickHandler = () => {
    if (isUserLogin) {
      alert("Order Successfull");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {data && (
        <center>
          <Card style={{ width: "18rem", marginTop: "20px" }}>
            <Card.Img variant="top" src={data.thumbnail} alt="img" />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text> Price: 💲{data.price}</Card.Text>
              <Card.Text>{data.description}</Card.Text>
              <Button variant="primary" onClick={btnClickHandler}>
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </center>
      )}
    </>
  );
};

export default ProductDetails;
