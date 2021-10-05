import React, { useState } from 'react'
import { Button, Input } from '../components/index'
import { signUp, signIn } from '../hooks/auth'

const Login: React.VFC = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h1 className="text-3xl">{isLogin ? 'Login' : 'Register'}</h1>
      <br />
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              E-mail
            </label>
            <Input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <Input
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="button"
              onClick={
                isLogin
                  ? () => signIn(email, password)
                  : () => signUp(email, password)
              }
            >
              {isLogin ? 'Login' : 'Register'}
            </Button>
            <span
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Create new account ?' : 'Back to login'}
            </span>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
