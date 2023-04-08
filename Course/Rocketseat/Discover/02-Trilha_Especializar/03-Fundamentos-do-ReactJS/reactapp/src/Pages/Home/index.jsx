import React, { useState, useEffect } from 'react';
import './style.css'

import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState(); // armazenando o valor digitado
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: ''});

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents(prevState => [...prevState, newStudent]) // SpedOperator Pegando o conteudo anterior do estado

    // ['first content']
    // ['first content', 'second content']
  }

  useEffect(() => {
    async function fecthData() {
      const response = await fetch('https://api.github.com/users/inacio000')
      const data = await response.json()
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fecthData()

  }, [])

  return (
      <div className="container">
          <header>
            <h1>Presence List</h1>

            <div>
              <strong>{user.name}</strong>
              <img src={user.avatar} alt="profile picture" />
            </div>
          </header>

          <input 
            type="text" 
            placeholder="Type your name..." 
            onChange={ e => setStudentName(e.target.value)}
          />

          <button type="button" onClick={handleAddStudent}>
            Add
          </button>

          {
              students.map( student => 
                  <Card key={student.time} name={student.name} time={student.time}/>
              )
          }
      </div>
  )
}