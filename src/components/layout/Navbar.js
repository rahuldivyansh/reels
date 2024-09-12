"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar({ isAuthenticated: initialAuthState }) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);
  const router = useRouter();

  useEffect(() => {
    // You can handle client-side authentication updates here
    // For example, you might want to re-fetch or listen for auth changes
    console.log("auth state updated ", isAuthenticated);
  }, [isAuthenticated]);

  const handleLogout = async () => {
    try {
      const response = await fetch("/auth/logout");
      if (response.success) {
        // setIsAuthenticated(false);
      }
      router.push("/");
    } catch (error) {
      console.log(error, " while logging out");
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </>
  );
}
