"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { getUserCharts, saveChart } from '@/actions/charts';

// const data = [
//   { name: "Jan", searches: 4000 },
//   { name: "Feb", searches: 3000 },
//   { name: "Mar", searches: 2000 },
//   { name: "Apr", searches: 2780 },
//   { name: "May", searches: 1890 },
//   { name: "Jun", searches: 2390 },
// ];

// Define la interfaz para los props
interface TotalSearchesChartProps {
  data: { name: string; searches: number }[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-2 border border-gray-300">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const TotalSearchesChart: React.FC<TotalSearchesChartProps> = ({ data }) => {
  const chartData = {
    name: "Búsquedas Mensuales",
    type: "bar",
    data: JSON.stringify(data),
    userId: 1, // ID del usuario que crea el gráfico
  };
  // console.log('chartData', chartData);

  const handleSaveChart = async () => {
    try {
      const result = await saveChart(chartData);
      console.log("Gráfico guardado:", result);
    } catch (error) {
      console.error("Error al guardar el gráfico:", error);
    }
  };
  
  const handlepermisoChart = async () => {
    try {
      const result = await getUserCharts();
      console.log("ver result: ", result);
    } catch (error) {
      console.error("Error ver result:", error);
    }
  };

  return (
    <section>
      <button onClick={handleSaveChart} className="btn">
        Guardar Gráfico
      </button>
      <br />
      <button onClick={handlepermisoChart} className="btn">
        ver permisos
      </button>


      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="searches" fill="hsl(var(--chart-1))">
            <LabelList dataKey="searches" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default TotalSearchesChart;
