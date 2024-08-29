import SignupForm from "@/components/ui/SignupForm"
import Link from "next/link"
export default function SignUpPage() {
  return (
    <div>
      <h2>Sign Up</h2>
      <SignupForm />
      <Link href="/auth/login">Login</Link>
    </div>
  )
}
