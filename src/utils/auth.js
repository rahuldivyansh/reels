// /src/utils/auth.js
import { createClient } from '@/utils/supabase/client.js'; // Adjust the import path as needed
const supabase = createClient()
export async function signUpNewUser(email, password) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error signing up:', error.message);
    return { error: error.message };
  }
}
