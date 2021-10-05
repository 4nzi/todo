import React from 'react'
import { useAuthSub } from './hooks/useAuthSub'
import { Main, Login, Layout } from './templates/index'

const App: React.FC = () => {
  const { isLogin, isLoading } = useAuthSub()

  if (isLoading === true) return <Layout></Layout>
  return <Layout>{isLogin ? <Main /> : <Login />}</Layout>
}

export default App
