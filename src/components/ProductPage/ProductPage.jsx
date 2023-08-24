/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ProductContext } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        textAlign: "center",
        justifyContent: "space-evenly",
        gap: "30px",
      }}
    >
      {products &&
        products.map((value, index) => (
          <div key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={value.images[0]}
                height={"300px"}
                width={"200px"}
              />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/productdetail/${value.id}`)}
                >
                  Click Here
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default ProductPage;
