import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href={"/auth/signup"}>Sign up</Link>
      <br />
      <Link href={"/auth/login"}>Login</Link>
    </main>
  );
}
