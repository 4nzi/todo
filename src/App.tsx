import React, { useEffect, useState } from 'react'
import { auth } from './firebase'
import { Main, Login, Layout } from './templates/index'

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      user && setIsLogin(true)
    })
    return () => unSub()
  })

  return <Layout>{isLogin ? <Main /> : <Login />}</Layout>
}

export default App
