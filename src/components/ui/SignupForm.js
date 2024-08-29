// /src/components/SignupForm.js
'use client'
import React, { useState } from 'react';
import { signUpNewUser } from '@/utils/auth'; // Import your function
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const result = await signUpNewUser(email, password);

    if (result.error) {
      setError(result.error); // Display error to the user
    } else {
      alert('Email Confirmation Sent!. Kindly check your email to confirm your account');
      // Redirect or perform additional actions
      router.push('/auth/login');
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {! error && <p>Sign up for an account</p>}
    </form>
  );
}
