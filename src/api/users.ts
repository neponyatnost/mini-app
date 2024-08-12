import { supabase } from '.'

export async function getUsersWithTokens() {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('tokens, username')
      .gte('tokens', 2)
    if (error) {
      console.log('Error while fetching userrs with tokens > 2')
      throw error
    }

    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
