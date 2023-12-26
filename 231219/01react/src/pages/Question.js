import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  margin: 20px 0;
  font-size: 30px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-item: center;
  gap: 20px;
`;

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  console.log(totalScore);

  // const handleClickButtonA = (no) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1);
  // };
  // const handleClickButtonB = (no) => {
  //   setQuestionNo(questionNo + 1);
  // };

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    console.log(newScore);
    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };
  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: "20px" }}
      />
      <Title>{QuestionData[0].title}</Title>
      <div>
        <ButtonGroup>
          <Button
            onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
            style={{
              width: "40%",
              fontSize: "15px",
              height: "200px",
            }}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            onClick={() => handleClickButton(0, QuestionData[questionNo])}
            style={{
              width: "40%",
              fontSize: "15px",
              height: "200px",
            }}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </div>
    </Wrapper>
  );
};

export default Question;
