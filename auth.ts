import NextAuth from "next-auth"; // Importa NextAuth para manejar la autenticación
import authConfig from "@/auth.config"; // Importa la configuración de autenticación personalizada
import db from "./lib/db"; // Importa la instancia de la base de datos

import { PrismaClient } from "@prisma/client"; // Importa PrismaClient para interactuar con la base de datos
import { PrismaAdapter } from "@auth/prisma-adapter"; // Importa PrismaAdapter para usar Prisma con NextAuth

// const prisma = new PrismaClient(); // Comentado: Inicializa una nueva instancia de PrismaClient

// Exporta los manejadores de NextAuth, incluyendo auth, signIn y signOut
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db), // Usa PrismaAdapter con la instancia de la base de datos
  session: { strategy: "jwt" }, // Configura la estrategia de sesión para usar JWT
  ...authConfig, // Extiende la configuración de NextAuth con la configuración personalizada
  callbacks: {
    // jwt() se ejecuta cada vez que se crea un token JWT
    // Aquí es donde puedes agregar información adicional al token
    jwt({ token, user }) {
      if (user) { // Si el usuario está disponible durante el inicio de sesión
        token.role = user.role; // Agrega el rol del usuario al token
      }
      return token; // Retorna el token modificado
    },
    // session() se utiliza para agregar la información del token a la sesión del usuario
    // lo que hace que esté disponible en el cliente
    session({ session, token }) {
      if (session.user) { // Si la sesión del usuario está disponible
        session.user.role = token.role; // Agrega el rol del token a la sesión del usuario
      }
      return session; // Retorna la sesión modificada
    },
  },
});