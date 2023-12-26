import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const onSubmit = (data) => {
    const updateConfirm = window.confirm("일기를 정말 수정할까요?");
    if (updateConfirm) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/", { replace: true });
    } else {
      navigate("/");
    }
  };
  const onClickDelete = () => {
    const deleteConfirm = confirm(
      "일기를 정말 삭제할까요? 다시 복구 불가합니다"
    );
    if (deleteConfirm) {
      onDelete(id);
      navigate("/", { replace: true });
    } else {
      navigate("/");
    }
  };

  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
          title={"일기 수정하기"}
          rightChild={
            <Button
              text={"삭제하기"}
              type={"negative"}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
