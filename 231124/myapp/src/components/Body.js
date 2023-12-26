import React from "react";
import "./Body.css";

function Body(props) {
  console.log(props);
  const { name, location } = props;
  //지금 작성하고 있는 이 문법이 JSX _ 함수(num,str,bool) 모두 계산 가능
  //단락회로평가! => 둘 중 하나를 가져올 때, 별 조건이 없다면 A 또는 B일때 A가 먼저 온다
  //리액트 출력문에 원시타입 자료는 특정한 제약조건없이 입출력이 가능하나 객체타입 자료는 원천적으로 불가!!
  //(+ 객체 통째로는 x, 객체안의 키값은 가져올수 있음(. 온점표기법 / {} 대괄호표기법)으로)

  //JSX 문법에서 반드시 지켜야하는 유의사항
  //1) 객체타입은 직접적으로 사용불가!
  //2) 반드시 마크업 타입으로 작성!
  //3) 반드시 최상위 부모가 존재해야 함!

  // const objA = {
  //   a: 1,
  //   b: 2,
  // };
  // return (
  //   <div>
  //     <h1>body</h1>
  //     <h2>{objA.a}</h2>
  //     <h2>{objA.b}</h2>
  //   </div>
  // );
  // return (
  //   <React.Fragment>
  //     <div>div 1</div>
  //     <div>div 2</div>
  //   </React.Fragment>
  // );

  /* <React.Fragment> 의미없는 부모태그 */

  // return (
  //   <>
  //     <div>div 1</div>
  //     <div>div 2</div>
  //   </>
  // );

  /* 18버전부터 <> 이렇게만 간략하게 쓰고 프래그먼트라고 함 */

  // const num = 19;
  // return (
  //   <h2>
  //     {num}는 {num % 2 === 0 ? "짝수" : "홀수"}
  //   </h2>
  // );

  // const num = 19;
  // return (
  //   <div style={{ backgroundColor: "red", color: "blue" }}>
  //     <h1>body</h1>
  //   </div>
  // );

  // const num = 19;
  // return (
  //   <div className="body">
  //     <h1>body</h1>
  //   </div>
  // );

  return (
    <div>
      <h1>
        {name}는 {location}에 거주중입니다.
      </h1>
    </div>
  );
}

export default Body;

/*props = (App.js에서 할당한)name,location*/
//{props.name}는 {props.location}에 거주중입니다. => 함수로 정의 => 객체가 아닌 변수가 되어서 props 안써도 됨
