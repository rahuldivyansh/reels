'use client'
import { useState } from "react";
import { signin } from "@/utils/auth";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signin(email, password);

    if (result.error) {
      setError(result.error);
    } else {
      alert("Login Successful");
      redirect("/"); // Redirect to home page
    }
  };
  return (
    <form>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Login" onClick={handleSubmit} />
      {error && <p>{error}</p>}
      {!error && <p>Login Here !</p>}
    </form>
  );
}
