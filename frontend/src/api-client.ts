import PocketBase, { type RecordModel } from 'pocketbase'

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL || 'http://127.0.0.1:8080')

export type AuthUser = {
  id: string
  email: string
}

export function getAuthUser(): AuthUser | null {
  const record = pb.authStore.record
  if (!record) return null
  return { id: record.id, email: record.email }
}

export function isAuthenticated(): boolean {
  return pb.authStore.isValid
}

export async function login(email: string, password: string): Promise<AuthUser> {
  const authData = await pb.collection('users').authWithPassword(email, password)
  const record = authData.record as RecordModel
  return { id: record.id, email: record.email }
}

export async function register(
  email: string,
  password: string,
  passwordConfirm: string,
): Promise<AuthUser> {
  const record = await pb.collection('users').create({
    email,
    password,
    passwordConfirm,
  })
  // auto-login after registration
  await pb.collection('users').authWithPassword(email, password)
  return { id: record.id, email: record.email }
}

export function logout(): void {
  pb.authStore.clear()
}

export function onAuthChange(callback: (user: AuthUser | null) => void): () => void {
  return pb.authStore.onChange(() => {
    callback(getAuthUser())
  })
}

export { pb }
