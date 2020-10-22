import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import useInput from './Hooks/useInput';
import {
  RadioGroup,
  FormControlLabel,
  Radio, TextField, Select, MenuItem, FormHelperText, FormControl, InputLabel
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify"
import InputBase from '@material-ui/core/InputBase';



const Container = styled.div`
  width: 1920px;
  height: 1024px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:73px;
`;

const GonstudioBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
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

const MiniSubConstudioContent = styled.p`
   width: 410px;
  height: 19px;
  font-family: Arial;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #1f1f1f;
`;

const CheckBoxDiv = styled.div`
  display:flex;
  justify-content:flex-start;
`;

const Label = styled.label`
  background: red;
  display: block;
  padding: 1rem;
`;

const CheckBox = styled.input.attrs({
  type: "radio",
})`
  
  margin-right:12px;
  
  &:nth-child(1){
      margin-left:0px;
      margin-right:12px;
  }
  &:nth-child(2){
      margin-left:12px;
  }
  &:last-child{
      margin-left:12px;
  }
`;

const CheckInput = styled.input`
  width:98%;
  height:50px;
  
`;

const WarningFont = styled.p`
  font-size:12px;
`;


const SelectBox = styled.select`
  width:100%;
  height:50px;
`;

const CheckBtn = styled.button`
  width:90px;
  height:40px;
  background-color:#F05642;
  border:none;
  border-radius:5px;
  margin-right:20px;
  
`;

const LoginP = styled.p`
  color:white;
  
`;

const SmallNextBox = styled.div`
  display:flex;
  justify-content:flex-start;
`;

const GoncstudioForm = styled.form``;

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);


const App = () => {
  //직업의 value를 담는 hooks
  const [jobCategory, setJobCategory] = useState("");
  console.log(jobCategory);

  //email이 정규식에 부합하는지 보기위한 hooks
  const [emailRegularExpression, setEmailRegularExpression] = useState(false);

  //비빌번호가 정규식에 부합하는지 보기위한 hooks
  const [passwordRegularExpression, setPasswordRegularExpression] = useState(false);

  //회사 이메일 정규식
  const [companyNameRegularExpression, setCompanyNameRegularExpression] = useState(false);

  //화폐단위를 선택하는지를 보는 hooks
  const [isCurrency, setIsCurrency] = useState("화폐단위를 선택하세요.");


  //회사 설립 년도를 선택하는지를 보는 hooks
  const [isChoiceYear, setIsChoiceYear] = useState("");


  const email = useInput("");
  const password = useInput("");
  const companyEmail = useInput("");

  //회원가입 정규식
  const regExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  //비밀번호 정규식 
  var num = /[0-9]/g;
  var eng = /[a-z]/ig;
  var spe = /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi;


  useEffect(() => {
    //이메일 정규식 filter
    setEmailRegularExpression(regExp.test(email.value));

    //password 정규식 filter
    if (password.value.length >= 8 && password.value.length <= 16 && num.test(password.value) && eng.test(password.value) && spe.test(password.value)) {
      setPasswordRegularExpression(true);
    } else {
      setPasswordRegularExpression(false)
    }

    //회사이메일 정규식 filter
    setCompanyNameRegularExpression(regExp.test(companyEmail.value));

    // 설립일 Vanilla JS를 활용하여 만드는 스타일 코드를 위한 조건코드(1-1)
    // var today = new Date();
    // var previousYear = 1919;
    // var birthday = today.getFullYear();

    // var strYear = "";
    // for (var i = previousYear; i <= birthday; i++) {
    //   if (i === previousYear) {
    //     strYear += "<option value=" + 0 + ">" + "설립일을 선택하세요" + "</option>";
    //   } else {
    //     strYear += "<option value=" + i + ">" + i + "</option>";
    //   }
    // }
    // document.getElementById("year").innerHTML = strYear;


  }, [email.value, password.value, companyEmail.value])



  return (
    <div className="App">
      <Container>
        <GoncstudioForm method="post" action={`https://goncstudio.herokuapp.com/signUp?jobCategory=${jobCategory}&email=${email.value}&password=${password.value}&companyEmail=${companyEmail.value}&isCurrency=${isCurrency}&isChoiceYear=${isChoiceYear}`}>
          <GonstudioBox>
            <SubConstudioBox>
              <SubConstudioContent>Gconstudio 계정 만들기</SubConstudioContent>
              <MiniSubConstudioContent>하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.</MiniSubConstudioContent>
              <RadioGroup style={{ display: "block" }} aria-label="job" value={jobCategory} onChange={(e) => {
                const { target: { value } }
                  = e
                setJobCategory(value);
              }}>
                <FormControlLabel value="translationCompany" control={<Radio style={{ color: "#f15642" }} />} label="번역가" />
                <FormControlLabel value="client" control={<Radio style={{ color: "#f15642" }} />} label="의뢰인" />
                <FormControlLabel value="translator" control={<Radio style={{ color: "#f15642" }} />} label="번역가" />
              </RadioGroup>

              <SubConstudioContent>기본정보입력</SubConstudioContent>

              <TextField type="email" style={{ width: "100%" }} {...email} label="이메일(아이디)를 입력하세요" variant="outlined" />
              {emailRegularExpression === false ? <WarningFont style={{ color: "red" }}>이메일양식을 확인하세요</WarningFont> : <WarningFont style={{ color: "green" }}>올바른 양식 입니다!</WarningFont>}

              <TextField type="password" style={{ width: "100%" }} {...password} label="비밀번호를 입력하세요" variant="outlined" />
              {passwordRegularExpression === false ? <WarningFont style={{ color: "red" }}>비밀번호는 8자리 이상, 16자리 이하이고 영문, 숫자, 특수문자가 각 1자리 이상 포함되어야 합니다</WarningFont> : <WarningFont style={{ color: "green" }}>올바른 양식 입니다!</WarningFont>}

              <TextField type="email" style={{ width: "100%" }} {...companyEmail} label="회사명을 입력하세요." variant="outlined" />
              {companyNameRegularExpression === false ? <WarningFont style={{ color: "red" }}>이메일 양식을 확인하세요</WarningFont> : <WarningFont style={{ color: "green" }}>올바른 양식 입니다!</WarningFont>}

              <FormControl style={{ width: "100%" }} >
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={isCurrency}

                  onChange={(e) => {
                    const { target: { value } } = e;
                    setIsCurrency(value);
                  }}
                  input={<BootstrapInput />}
                >
                  <MenuItem value="화폐단위를 선택하세요.">
                    <FontType>화폐단위를 선택하세요.</FontType>
                  </MenuItem>
                  <MenuItem value={"won"}>원(₩)</MenuItem>
                  <MenuItem value={"GBP"}>파운드(£)</MenuItem>
                  <MenuItem value={"CNY"}>위안(¥)</MenuItem>
                  <MenuItem value={"USD"}>달러($)</MenuItem>
                </Select>
              </FormControl>

              {isCurrency === "화폐단위를 선택하세요." || isCurrency === "" ? <WarningFont style={{ color: "red" }}>필수입력 사항입니다.</WarningFont> : <WarningFont style={{ color: "green" }}>올바른 양식 입니다!</WarningFont>}

              {/* 
              //해당 부분의 주석을 제거하고 310번째줄을 주석처리 후, useEffect Function의 227~239번을 하면 다른 스타일의 설립기념을 볼 수 있습니다 (227번째 줄의 1-1).
              <SelectBox
              id="year"
              title="년"
              onChange={(e) => {
                const { target: { value } } = e;
                setIsChoiceYear(value);
              }}
              /> 
            */}
              <TextField
                id="date"
                type="date"
                style={{ width: "450px" }}
                input={<BootstrapInput />}
                onChange={(e) => {
                  const { target: { value } } = e;
                  setIsChoiceYear(value);
                }}
              />




              {isChoiceYear === "" ? <WarningFont style={{ color: "red" }}>필수입력 사항입니다.</WarningFont> : <WarningFont style={{ color: "green" }}>올바른 양식 입니다!</WarningFont>}
              <SmallNextBox>
                <CheckBtn onClick={(e) => {
                  if (!emailRegularExpression ||
                    !passwordRegularExpression ||
                    !companyNameRegularExpression || isCurrency === "화폐단위를 선택하세요." ||
                    isChoiceYear === "") {
                    toast.error("해당 정보를 정확히 기입해주시기 바랍니다");
                    e.preventDefault();
                  } else {
                    toast.success("계정 정보 확인 및 생성중입니다");
                  }
                }} >
                  <LoginP>다음</LoginP>
                </CheckBtn>
                <LoginP style={{ color: "grey", borderBottom: "solid 1px" }} onClick={() => { toast.warning("해당 이벤트는 아직 개발중에 있습니다 😢") }}>로그인</LoginP>
              </SmallNextBox>
            </SubConstudioBox>
          </GonstudioBox>
        </GoncstudioForm>
      </Container>
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
    </div >
  );
}

export default App;
