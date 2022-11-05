import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { greetUser, User } from '@monorepo/shared'

function App() {
  const user: User = {
    firstName: "Admin",
    lastName: "User",
    email: "adminuser@test.com",
    isAdmin: true,
  }

  const onGreetClicked = () => {
    greetUser(user);
  }

  return (
    <div className="App">
      <h1>Admin App</h1>
      <button onClick={onGreetClicked}>Gree Admin!</button>
    </div>
  )
}

export default App
