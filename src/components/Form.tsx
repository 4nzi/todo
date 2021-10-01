import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

const Form: React.VFC = () => {
  const [text, setText] = useState('')

  const newTask = () => {
    db.collection('tasks').add({ title: text })
    setText('')
  }

  return (
    <div className="flex gap-3">
      <input
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></input>
      <button
        disabled={!text}
        onClick={newTask}
        className="font-sans bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
      >
        add
      </button>
    </div>
  )
}

export default Form
