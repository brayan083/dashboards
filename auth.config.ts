import type { NextAuthConfig } from "next-auth"; // Importa el tipo NextAuthConfig para la configuración de NextAuth
import Credentials from "next-auth/providers/credentials"; // Importa el proveedor de credenciales para la autenticación
import { loginSchema } from "./lib/zod"; // Importa el esquema de validación de credenciales
import db from "./lib/db"; // Importa la instancia de la base de datos
import bcrypt from "bcryptjs"; // Importa bcryptjs para comparar contraseñas
import { nanoid } from "nanoid"; // Importa nanoid para generar tokens únicos

// Exporta la configuración de NextAuth
export default {
  providers: [
    // Configura el proveedor de credenciales
    Credentials({
      // Función de autorización que se ejecuta cuando un usuario intenta iniciar sesión
      authorize: async (credentials) => {
        // Valida las credenciales usando el esquema de validación
        const { data, success } = loginSchema.safeParse(credentials);

        console.log(data);
        console.log(success);

        // Si la validación falla, lanza un error
        if (!success) {
          throw new Error("Invalid credentials");
        }

        // Verifica si el usuario existe en la base de datos
        const user = await db.user.findUnique({
          where: {
            email: data.email,
          },
        });

        // Si no se encuentra el usuario o no tiene contraseña, lanza un error
        if (!user || !user.password) {
          throw new Error("No user found");
        }

        // Compara la contraseña proporcionada con la almacenada en la base de datos
        const isValid = await bcrypt.compare(data.password, user.password);

        // Si la contraseña no es válida, lanza un error
        if (!isValid) {
          throw new Error("Invalid password");
        }

        // // Si el correo electrónico no está verificado
        // if (!user.emailVerified && user.email) {
        //   // Verifica si ya existe un token de verificación para este correo
        //   const verifyTokenExist = await db.verificationToken.findFirst({
        //     where: {
        //       identifier: user.email,
        //     },
        //   });

        //   // Si existe un token de verificación, elimínalo
        //   if (verifyTokenExist?.identifier) {
        //     await db.verificationToken.delete({
        //       where: {
        //         identifier: user.email,
        //       },
        //     });
        //   }

        //   // Genera un nuevo token de verificación
        //   const token = nanoid();
        //   await db.verificationToken.create({
        //     data: {
        //       identifier: user.email,
        //       token,
        //       expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // El token expira en 24 horas
        //     },
        //   });

        //   // Lanza un error indicando que el correo no está verificado
        //   throw new Error("Email not verified");
        // }

        // Si todo es válido, retorna el usuario
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig; // Asegura que la configuración cumple con el tipo NextAuthConfig
