import LoginForm from "@/components/ui/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <p>Login Here</p>
      <LoginForm />
      <Link href="/auth/signup">Sign up</Link>
    </div>
  )
}
