import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase'
import { Task, Input, Button } from '../components/index'

const App: React.VFC = (props: any) => {
  const [tasks, setTasks] = useState([{ id: '', title: '' }])
  const [text, setText] = useState('')

  useEffect(() => {
    const unSub = db.collection('tasks').onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      )
    })
    return () => unSub()
  }, [])

  const newTask = () => {
    db.collection('tasks').add({ title: text })
    setText('')
  }

  return (
    <>
      <div className="flex gap-3">
        <Input
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <Button disabled={!text} onClick={newTask}>
          add
        </Button>
      </div>
      <br />
      <ul className="w-6/12">
        {tasks.map((task) => (
          <li key={task.id} className="m-3">
            <Task key={task.id} id={task.id} title={task.title} />
          </li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={async () => {
          try {
            await auth.signOut()
          } catch (error) {
            alert(error.message)
          }
        }}
      >
        logout
      </button>
    </>
  )
}

export default App
