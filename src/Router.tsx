import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from './ui/pages/SignIn'
import SignUp from './ui/pages/SignUp'
import TodoList from './ui/pages/TodoList'

const Router = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/todo" element={<TodoList />} />
  </Routes>
)

export default Router
