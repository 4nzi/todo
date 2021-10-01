import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import { Task, Form, Spacer } from './components/index'
import { Layout } from './templats/index'

const App: React.VFC = () => {
  const [tasks, setTasks] = useState([{ id: '', title: '' }])

  useEffect(() => {
    const unSub = db.collection('tasks').onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      )
    })
    return () => unSub()
  }, [])

  return (
    <Layout>
      <Form />
      <Spacer />
      <ul className="w-6/12">
        {tasks.map((task) => (
          <li key={task.id} className="m-3">
            <Task key={task.id} id={task.id} title={task.title} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default App
