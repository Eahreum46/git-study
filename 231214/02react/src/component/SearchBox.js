import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Form, Button } from "react-bootstrap";

const SearchBox = () => {
  const [keyWord, setKeyWord] = useState();
  const changeKeyword = (event) => {
    setKeyWord(event.target.value);
  };
  const searchByname = (event) => {
    const Dispatch = useDispatch();
    event.preventDefault();
    dispatch;
  };
  return (
    <Form onSubmit={SearchBox}>
      <Row className="SearchBox">
        <Col>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={changeKeyword}
          />
        </Col>
        <Col>
          <Button type="submit">검색</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
