import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../view/SignIn';
import { SignUp } from '../view/SignUp';


export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}