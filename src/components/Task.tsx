import React, { useState } from 'react'
import { db } from '../firebase'

interface PROPS {
  id: string
  title: string
}

const Task: React.VFC<PROPS> = ({ title, id }) => {
  const [text, setText] = useState(title)

  const editTask = () => {
    db.collection('tasks').doc(id).set({ title: text }, { merge: true })
  }

  const deleteTask = () => {
    db.collection('tasks').doc(id).delete()
  }

  return (
    <div>
      <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
        {title}
      </span>
      <button className="float-right" onClick={deleteTask}>
        delete
      </button>
    </div>
  )
}

export default Task
