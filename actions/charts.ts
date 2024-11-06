'use server'

import { auth } from '@/auth';
import db from '@/lib/db';

export async function saveChart(chartData: {
  name: string;
  type: string;
  data: string;
  userId: number;
}) {

  // console.log('Aqui toy');

  // Convertimos el string de data a un objeto
  chartData.data = JSON.parse(chartData.data);


  const session = await auth();
  // console.log('session', session);
  if (!session || !session.user || !session.user.email) {
    throw new Error("No se ha iniciado sesión o el email no está disponible");
  }

  const user = await db.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }


  try {
    const savedChart = await db.chart.create({
      data: chartData,
    });

    // Crear el permiso para el usuario que creó el gráfico
    await db.userChartPermission.create({
      data: {
        userId: user.id,
        chartId: savedChart.id,
      },
    });

    return { success: true, chart: savedChart };
  } catch (error) {
    console.error('Error al guardar el gráfico:', error);
    return { success: false, error: 'Error al guardar el gráfico' };
  }
}


export async function getUserCharts() {
  const session = await auth();
  if (!session || !session.user || !session.user.email) {
    throw new Error("No se ha iniciado sesión o el email no está disponible");
  }

  const user = await db.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const permissions = await db.userChartPermission.findMany({
    where: { userId: user.id },
    include: { chart: true },
  });

  return permissions.map(permission => permission.chart);
}


export async function getAccessibleCharts(userId: number) {
  const accessibleCharts = await db.userChartPermission.findMany({
    where: { userId: userId },
    include: { chart: true }, // Incluye los detalles del gráfico si es necesario
  });

  // console.log('accessibleCharts', accessibleCharts);

  return accessibleCharts;
}