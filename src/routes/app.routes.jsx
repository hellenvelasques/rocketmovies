import { Routes, Route } from 'react-router-dom';

import { Home } from '../view/Home';
import { New } from '../view/New';
import { Profile } from '../view/Profile';
import { Details } from '../view/Details';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}