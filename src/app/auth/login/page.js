import Link from 'next/link'
import { login } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <br />
      <p>Don't have an account ?</p>
      <Link href="/auth/signup">Sign up</Link>
    </form>
  )
}