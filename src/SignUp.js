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
  
  width: 585px;
  height: 794px;
  border-radius: 11px;
  border: solid 1px #dadce0;
`;

const SubConstudioBox = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-start;
`;

const FontType = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  margin-top:50px;
  text-align:center;
  color: rgba(0, 0, 0, 0.6);
`;

const SubConstudioContent = styled.p`
text-align:center;
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
    toast.success("회원가입을 축하드립니다 😊")
  }
  Hello();
  return (
    <Container>
      <GonstudioBox>

        <SubConstudioContent>회원가입 및 로그인에 성공하셨습니다 🎉</SubConstudioContent>

        <FontType >
          <a style={{ textDecoration: "none", color: "#646464" }} href="https://twigfarm.net/">메인 화면으로 이동하시겠습니까?</a>
        </FontType>
        <FontType></FontType>
      </GonstudioBox>
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
    </Container>
  );
}