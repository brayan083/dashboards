import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import db from "./lib/db"
 
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
 
// const prisma = new PrismaClient()
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    // jwt() se ejecuta cada vez que se crea un token JWT
    // aqui es donde puedes agregar informacion adicional al token
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.role = user.role
      }
      return token
    },
    // session() se utiliza para agregar la informacion del token a la sesion del usuario
    // lo que hace que este disponible en el cliente
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role
      }
      return session
    },
  },
})