"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TotalSearchesChart from "./charts/TotalSearchesChart";
import Top10SearchesChart from "./charts/Top10SearchesChart";
import KeywordPositionTable from "./tables/KeywordPositionTable";
import LandingPositionTable from "./tables/LandingPositionTable";
import MetricsTable from "./tables/MetricsTable";
import ComparisonMetricsTable from "./tables/ComparisonMetricsTable";
import ClicksImpressionsChart from "./charts/ClicksImpressionsChart";
import MonthlyComparisonTable from "./tables/MonthlyComparisonTable";
import { saveChart } from "@/actions/charts";
import { auth } from "@/auth";

// Simulación de función para verificar permisos
const tienePermiso = (chartId: string): boolean => {
  // Lógica para verificar permisos del usuario
  // Por ejemplo, puedes hacer una llamada a una API o verificar en el estado de la aplicación
  const permisos = ["totalSearches", "top10Searches"]; // IDs de gráficos permitidos
  return permisos.includes(chartId);
};

const handleSaveChart = async (chartData: any) => {
  try {
    const result = await saveChart(chartData);
    console.log(result);
  } catch (error) {
    console.error("Error al guardar el gráfico:", error);
  }
};

const GSCReport: React.FC = () => {

  const dataTop10SearchesChart = [
    { keyword: "SEO", organic: 4000, paid: 2400 },
    { keyword: "Marketing", organic: 3000, paid: 1398 },
    { keyword: "Analytics", organic: 2000, paid: 9800 },
    { keyword: "PPC", organic: 2780, paid: 3908 },
    { keyword: "Content", organic: 1890, paid: 4800 },
    { keyword: "Social", organic: 2390, paid: 3800 },
    { keyword: "Email", organic: 3490, paid: 4300 },
  ];
  
  const dataTotalSearchesChart = [
    { name: "Jan", searches: 4000 },
    { name: "Feb", searches: 3000 },
    { name: "Mar", searches: 2000 },
    { name: "Apr", searches: 2780 },
    { name: "May", searches: 1890 },
    { name: "Jun", searches: 2390 },
  ];
  
  const dataClicksImpressionsChart = [
    { name: "Jan", clicks: 4000, impressions: 2400, position: 1 },
    { name: "Feb", clicks: 3000, impressions: 1398, position: 2 },
    { name: "Mar", clicks: 2000, impressions: 9800, position: 2.5 },
    { name: "Apr", clicks: 2780, impressions: 3908, position: 1.8 },
    { name: "May", clicks: 1890, impressions: 4800, position: 3 },
    { name: "Jun", clicks: 2390, impressions: 3800, position: 2.2 },
  ];

  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="keywords">Keywords</TabsTrigger>
        <TabsTrigger value="landings">Landings</TabsTrigger>
        <TabsTrigger value="comparison">Comparison</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {/* {tienePermiso("Búsquedas Mensuales") && (
            <Card>
              <CardHeader>
                <CardTitle>Total Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <TotalSearchesChart data={dataTotalSearchesChart} />
              </CardContent>
            </Card>
          )}
          {tienePermiso("top10Searches") && (
            <Card>
              <CardHeader>
                <CardTitle>Top 10 Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <Top10SearchesChart data={dataTop10SearchesChart} />
              </CardContent>
            </Card>
          )}
          {tienePermiso("clicksImpressions") && (
            <Card>
              <CardHeader>
                <CardTitle>Clicks and Impressions</CardTitle>
              </CardHeader>
              <CardContent>
                <ClicksImpressionsChart data={dataClicksImpressionsChart} />
              </CardContent>
            </Card>
          )} */}
          <Card>
            <CardHeader>
              <CardTitle>Total Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <TotalSearchesChart data={dataTotalSearchesChart} />
              <button
                onClick={() =>
                  handleSaveChart({
                    name: "Total Searches",
                    data: JSON.stringify(dataTotalSearchesChart),
                    type: "line",
                  })
                }
                className="btn"
              >
                Guardar Gráfico
              </button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Top 10 Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <Top10SearchesChart data={dataTop10SearchesChart} />
              <button
                onClick={() =>
                  handleSaveChart({
                    name: "Top 10 Searches",
                    data: dataTop10SearchesChart,
                    type: "line",
                  })
                }
                className="btn"
              >
                Guardar Gráfico
              </button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Clicks and Impressions</CardTitle>
            </CardHeader>
            <CardContent>
              <ClicksImpressionsChart data={dataClicksImpressionsChart} />
              <button
                onClick={() =>
                  handleSaveChart({
                    name: "Clicks and Impressions",
                    data: dataClicksImpressionsChart,
                    type: "line",
                  })
                }
                className="btn"
              >
                Guardar Gráfico
              </button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="keywords">
        <Card>
          <CardHeader>
            <CardTitle>Keyword Position Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <KeywordPositionTable />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="landings">
        <Card>
          <CardHeader>
            <CardTitle>Landing Page Position Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <LandingPositionTable />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="comparison">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <MetricsTable />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Metrics Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ComparisonMetricsTable />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <MonthlyComparisonTable />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default GSCReport;
