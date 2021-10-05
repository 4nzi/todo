import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { db, auth } from '../firebase'
import { useAtom } from 'jotai'
import { userAtom } from '../atoms'
import { Task, Input, Button } from '../components/index'

const App: React.VFC = (props: any) => {
  const [user, setUser] = useAtom(userAtom)
  const [tasks, setTasks] = useState([{ id: '', title: '', isDone: false }])
  const [text, setText] = useState('')

  useEffect(() => {
    const unSub = db
      .collection('users')
      .doc(user)
      .collection('tasks')
      .onSnapshot((snapshot) => {
        setTasks(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            isDone: doc.data().isDone,
          }))
        )
      })
    return () => unSub()
  }, [])

  const newTask = () => {
    db.collection('users').doc(user).collection('tasks').add({
      title: text,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      isDone: false,
    })
    setText('')
  }

  return (
    <>
      <div className="flex gap-3 w-full">
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
      <ul className="w-full">
        {tasks.map((task) => (
          <li key={task.id} className="my-3">
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              isDone={task.isDone}
            />
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
            setUser('')
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
