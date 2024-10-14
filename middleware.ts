import NextAuth from "next-auth"; // Importa NextAuth para manejar la autenticación
import authConfig from "./auth.config"; // Importa la configuración de autenticación
import { NextResponse } from "next/server"; // Importa NextResponse para manejar las respuestas del servidor

// Extrae el middleware de autenticación de NextAuth usando la configuración proporcionada
const { auth: middleware } = NextAuth(authConfig);

// Define las rutas públicas que no requieren autenticación
const publicRoutes = ["/", "/login", "/register"];

// Exporta el middleware de autenticación
export default middleware((req, res) => {
  const { nextUrl, auth } = req; // Extrae la URL de la solicitud y la información de autenticación
  const isLogged = !!auth?.user; // Verifica si el usuario está autenticado

  // Si la ruta no es pública y el usuario no está autenticado, redirige a la página de login
  if (!publicRoutes.includes(nextUrl.pathname) && !isLogged) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  // Si el usuario está autenticado y la ruta es la página de login, redirige a la página de inicio
  if (isLogged && nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  // Si la ruta es pública o el usuario está autenticado, permite el acceso
  return NextResponse.next();
});

// Configuración del middleware
export const config = {
  matcher: [
    // Excluye los archivos estáticos y las rutas internas de Next.js, a menos que se encuentren en los parámetros de búsqueda
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Siempre ejecuta el middleware para las rutas de API
    "/(api|trpc)(.*)",
  ],
};