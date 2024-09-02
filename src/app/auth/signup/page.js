import Link from "next/link";
import { signup } from "./actions";
export default function SignUpPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={signup}>Sign Up</button>
      <br />
      <p>Have an account already ?</p>
      <Link href="/auth/login">Log in</Link>
    </form>
  );
}
