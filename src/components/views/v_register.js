import { useState, useRef } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Header, MainContainer } from '../fragments.js';

function VRegister() {
  var [isSubmit, setIsSubmit] = useState(false);
  var [termsChecked, setTermsChecked] = useState(false);
  
  var [userId, setUserId] = useState('');
  var [password, setPassword] = useState('');
  var [pwCheckMessage, setPwCheckMessage] = useState('');

  const idInputFocus = useRef(null);
  const pwInputFocus = useRef(null);
  
  function validate() {
    if (userId === '') {
      idInputFocus.current.focus();
      return '아이디를 입력해 주세요.';
    }
    else if (password === '' || password.trim().length < 8) {
      pwInputFocus.current.focus();
      return '8자리 이상의 비밀번호를 입력해 주세요.';
    }
    else if (!termsChecked) {
      return '이용약관 동의에 체크해 주세요.';
    }
    else
      return true;
  }

  function submitRegister(e) {
    var validateResult = validate();
    if (validateResult !== true) {
      alert(validateResult);
      return;
    } else {
      setIsSubmit(true);
      try {
        // register 성공 시
        alert('회원가입되었습니다.');
      } catch (e) {
        alert('register error: ', e);
        console.log('register error', e);
      }
      setIsSubmit(false);
      
      return;
    }
  }

  function handleInputChange(e) {
    const target = e.target;
    const name = target.name;

    if (name === 'userId')
      setUserId(target.value);
    else if (name === 'pw')
      setPassword(target.value);
  }
  
  function handleCheckboxChange() {
    setTermsChecked(!termsChecked)
  }
 
  function checkPwLength(e) {
    if (password.trim().length < 8)
        setPwCheckMessage('비밀번호는 8자리 이상이어야 합니다.')
    else
      setPwCheckMessage('')
  }
  
  return (
    <MainContainer className="w-100-full">
      <Header/>
      <div className="d-flex justify-content-center">
        <div className="register mg-t-40">
          <div className="fw-500 fnt-size-13"
            style={{letterSpacing: "normal"}}
          >COLLABIZ TOY에 오신 것을 환영합니다&nbsp;&nbsp;:)</div>
          <div className="mg-t-40 d-flex flex-column">
            <div className="fw-700">아이디</div>
            <input name="userId" type="text"
              className="mg-t-10 p-2"
              onChange={handleInputChange}
              placeholder="아이디를 입력해 주세요"
              autoFocus
              ref={idInputFocus}
            />
          </div>
          <div className="mg-t-20 d-flex flex-column">
            <div className="fw-700">비밀번호</div>
            <input name="pw" type="password"
              className="mg-t-10 p-2"
              onChange={handleInputChange}
              onKeyUp={checkPwLength}
              placeholder="8자리 이상 입력해 주세요"
              ref={pwInputFocus}
            />
            <div className="mt-1 fnt-size-7">{pwCheckMessage}</div>
          </div>
          <div className="mg-t-20 d-flex align-items-center">
            <input type="checkbox" checked={termsChecked} onChange={handleCheckboxChange}/>
            <div className="pd-l-6 align-items-center">
              <NavLink
                className="terms color-secondary"
                to={{pathname: "/terms"}}
                onClick={e => {
                  e.preventDefault();
                  window.open(e.target.href, "이용약관", "width=430,height=500")
                }}
              >이용약관
              </NavLink>
                &nbsp;동의&nbsp;
                <span className="color-red">(필수)</span>
            </div>
          </div>
          <div className="" style={{bottom: `${38}%`, right: `${25}%`}}>
            <button
              type="button"
              className={"w-100pct mg-t-40 py-3 btn fnt-size-9 fw-700" + (!isSubmit ? " btn-primary" : " btn-ccc")}
              onClick={!isSubmit ? submitRegister : null}
            >
              {!isSubmit ? '회원가입' : '요청 중...'}</button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default VRegister;