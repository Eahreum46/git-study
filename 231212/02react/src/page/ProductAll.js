import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Alret } from "react-bootstrap";

const ProductAll = () => {
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products`;
    let response = fetch(url);
    let data = (await response).json();
    setProducts(data);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  });
  return (
    <Container>
      {products.map((item) => {
        <Col md={3} sm={12} key={item.id}>
          <div>{item.title}</div>
          <div>{item.price}</div>
        </Col>;
      })}
    </Container>
  );
};

export default ProductAll;
