import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false)
  const router = useRouter()

  useEffect(() => checkUserLoggedIn(), [])

  // Login user
  const login = async ({ password }) => {
    if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD) {
        setCookie(null, 'cookieAuth', 'true', {
            maxAge: 24 * 60 * 60,
            path: '/',
        })
        setUser(true)
    }
  }

  // Logout user
  const logout = async () => {
    destroyCookie(null, 'cookieAuth')
    setUser(false)
  }

  // Check if user is logged in
  const checkUserLoggedIn = async () => {
    const cookies = parseCookies()
    if (cookies.cookieAuth) {
        setUser(true);
    } else {
        setUser(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
