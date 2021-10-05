import React, { useState } from 'react'
import { db } from '../firebase'
import { useAtom } from 'jotai'
import { userAtom } from '../atoms'
import { Button } from './index'

interface PROPS {
  id: string
  title: string
  isDone: boolean
}

const Task: React.VFC<PROPS> = ({ title, id, isDone }) => {
  const [userID] = useAtom(userAtom)
  const [text, setText] = useState(title)

  const editTask = () => {
    db.collection('tasks').doc(id).set({ title: text }, { merge: true })
  }

  const doneTask = () => {
    db.collection('users')
      .doc(userID)
      .collection('tasks')
      .doc(id)
      .set({ isDone: !isDone }, { merge: true })
  }

  const deleteTask = () => {
    db.collection('users').doc(userID).collection('tasks').doc(id).delete()
  }

  return (
    <div className="flex">
      <div className="flex-auto flex items-center gap-2">
        <span
          className={
            isDone
              ? 'cursor-pointer text-white line-through'
              : 'cursor-pointer text-white'
          }
          onClick={doneTask}
        >
          {title}
        </span>
        <p className="text-red-700">{isDone && 'DONE!!'}</p>
      </div>
      <Button type="button" onClick={deleteTask}>
        del
      </Button>
    </div>
  )
}

export default Task
