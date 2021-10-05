import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '../atoms'
import { auth } from '../firebase'

export const useAuthSub = () => {
  const [isLogin, setIsLogin] = useAtom(userAtom)
  const [isLoading, setIsLoading] = useState(true)

  // サブスクリプション
  useEffect(() => {
    console.log('mounted useAuthSub')
    const unSub = auth.onAuthStateChanged(async (user) => {
      user && setIsLogin(user.uid)
      setIsLoading(false)
    })
    return () => unSub()
  }, [])

  return { isLogin, isLoading }
}
