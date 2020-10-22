import React from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";


const Container = styled.div`
  width: 1920px;
  height: 1024px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:73px;
`;

const GonstudioBox = styled.div`
  text-align:center;
  width: 585px;
  height: 794px;
  border-radius: 11px;
  border: solid 1px #dadce0;
`;

const SubConstudioBox = styled.div`
`;

const FontType = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  margin-top:50px;
  color: rgba(0, 0, 0, 0.6);
`;

const SubConstudioContent = styled.p`
width: 251px;
  height: 29px;
  font-family: Arial;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2f2f2f;
  `;



export default () => {
  const Hello = () => {
    toast.error("회원가입에 실패하였습니다. 😢")
  }
  Hello();
  return (
    <Container>
      <GonstudioBox>
        <FontType>
          회원가입에 실패하였습니다.
        </FontType>
        <FontType>
          <a href="https://twigfarm.net/">메인 홈페이지로 이동하시겠습니까?</a>
        </FontType>
        <FontType>
          <a href="http://localhost:3000/">이전 페이지로 이동하시겠습니까?</a>
        </FontType>
      </GonstudioBox>
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
    </Container>
  );
}