import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { VMain, VLogin, VRegister, VTerms } from './views.js';

function App() {
  return (
    <div style={{minHeight: `${100}vh`}}>
    <Router>
      <Routes>
        <Route path="/"               element={<VMain     />} />
        <Route path="/login"          element={<VLogin    />} />
        <Route path="/signup"         element={<VRegister />} />
        <Route path="/mypost"         element={<VMain     />} />
        <Route path="/mypost/:id"     element={<VMain     />} />
        <Route path="/index/search"   element={<VMain     />} />
        <Route path="/mypage/account" element={<VMain     />} />
        <Route path="/terms"          element={<VTerms    />} />
        <Route path="*"               element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
