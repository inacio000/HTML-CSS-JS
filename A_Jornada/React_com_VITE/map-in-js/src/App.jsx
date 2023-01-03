import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const users = [
  {
    id: 1,
    name: 'Inácio',
    address: 'Kazanskoe',
    age: 20,
    isAdmin: true
  },
  {
    id: 2,
    name: 'Martinho',
    address: 'Shocce',
    age: 22,
    isAdmin: false
  },
  {
    id: 3,
    name: 'Raimundo',
    address: 'Tulskaya',
    age: 25,
    isAdmin: false
  }
]

function App() {
  return (
    <>    
      <div>
        { users.map((user, index) => ( 
          <div key={ user.id }>
            <h1>{ user.name }, { user.age } years old, index = {index}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
