'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import FormRegister from '@/components/formRegister';

export default function RegisterPage() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const router = useRouter();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Aquí iría la lógica de registro
  //   console.log('Registrando usuario:', { name, email, password });
  //   // Redirigir al usuario después del registro exitoso
  //   router.push('/dashboard');
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Registrarse</CardTitle>
        </CardHeader>
        <CardContent>
          <FormRegister />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Inicia sesión
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}