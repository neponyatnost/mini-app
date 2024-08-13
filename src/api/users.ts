import { supabase } from '.'

export async function getUsersWithTokens() {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('tokens, username, city, country, firstName, lastName')
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

export async function getUserByUsername(username: string) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('city, country')
      .eq('username', username)
      .single()
    if (error) {
      console.log('Error while fetching user by username')
      throw error
    }
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
