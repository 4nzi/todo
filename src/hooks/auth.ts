import { auth, db } from '../firebase'
import firebase from 'firebase/app'

export const signUp = async (email: string, password: string) => {
  try {
    const result = await auth.createUserWithEmailAndPassword(email, password)

    if (result.user) {
      const payload = {
        name: 'anonymous',
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('users').doc(result.user.uid).set(payload)
    }
  } catch (error: any) {
    alert(error.message)
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
  } catch (error: any) {
    alert(error.message)
  }
}
