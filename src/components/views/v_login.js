import { useState, useRef, useEffect } from 'react';

function VLogin() {
  var [isSubmit, setIsSubmit] = useState(false);
  var [userId, setUserId] = useState('');
  var [password, setPassword] = useState('');
  
  const idInputFocus = useRef(null);
  const pwInputFocus = useRef(null);

  // useEffect(() => {
  //   inputFocus.current.focus();
  // }, []);

  function validate() {
    if (userId === '') {
      idInputFocus.current.focus();
      return '아이디를 입력해 주세요.';
    }
    else if (password === '') {
      pwInputFocus.current.focus();
      return '비밀번호를 입력해 주세요.';
    }
    else
      return true;
  }

  function submitLogin(e) {
    var validateResult = validate();
    if (validateResult !== true) {
      alert(validateResult);
      return;
    } else {
      setIsSubmit(true);
      try {
        // call post login api
        // login 성공 시
        alert('로그인되었습니다.');
        e.preventDefault();
        // 글 목록으로 이동하고 팝업 닫기
        window.opener.location.href="/index/search"
        window.close();
      } catch (e) {
        alert('login error: ', e);
        console.log('login error', e);
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

  return (
    <div className="m-5 flex-column">
      <div className="m-4">
        <div className="d-flex justify-content-center align-items-center">
          <img className="size-40" alt="logo" src={`${process.env.PUBLIC_URL}/favicon-32x32.png`}/>
          <div className="fw-bold color-primary fnt-size-13">COLLABIZ TOY</div>
        </div>
        
        <div className="mg-t-80 d-flex flex-column align-items-center">
          {/* <div className="w-100pct">아이디와 비밀번호를 입력해 주세요!&nbsp;&nbsp;:)</div> */}
          <div className="w-100pct d-flex flex-row align-items-center" >
            {/* Bootstrap icon - svg type */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>
            <input name="userId" type="text"
              ref={idInputFocus}
              autoFocus
              className="w-100pct mg-l-10 pd-l-10"
              value={userId}
              onChange={handleInputChange}
              placeholder="아이디"/>
          </div>
          <div className="w-100pct mg-t-10 d-flex flex-row align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-file-lock2" viewBox="0 0 16 16">
              <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224z"/>
              <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
            </svg>
            <input name="pw" type="password"
              ref={pwInputFocus}
              className="w-100pct mg-l-10 pd-l-10"
              value={password}
              onChange={handleInputChange}
              placeholder="비밀번호"/>
          </div>
          
        </div>
        <div className="mg-t-30" style={{bottom: `${38}%`, right: `${25}%`}}>
          <button
            type="button"
            className={"w-100pct mg-t-40 py-1 btn fnt-size-8 fw-700" + (!isSubmit ? " btn-primary" : " btn-ccc")}
            onClick={!isSubmit ? submitLogin : null}
          >
            <div className="pd-y-8">{!isSubmit ? '로그인' : '요청 중...'}</div>
          </button>
          <button
            type="button"
            className={"w-100pct py-1 mt-2 btn fnt-size-8 fw-700 btn-naver"}
            // onClick={!isSubmit ? submitRegister : null}
          >
            <div className="d-flex justify-content-center align-items-center">
              <div className="pe-1">
                <img className="size-40" alt="logo" src={`${process.env.PUBLIC_URL}/images/naver_logo.png`}/>
              </div>
              <div>네이버 로그인</div>
            </div>
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default VLogin;