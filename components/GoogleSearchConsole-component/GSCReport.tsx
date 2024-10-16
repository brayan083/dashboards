"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TotalSearchesChart from './charts/TotalSearchesChart';
import Top10SearchesChart from './charts/Top10SearchesChart';
import KeywordPositionTable from './tables/KeywordPositionTable';
import LandingPositionTable from './tables/LandingPositionTable';
import MetricsTable from './tables/MetricsTable';
import ComparisonMetricsTable from './tables/ComparisonMetricsTable';
import ClicksImpressionsChart from './charts/ClicksImpressionsChart';
import MonthlyComparisonTable from './tables/MonthlyComparisonTable';

const GSCReport: React.FC = () => {
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
          <Card>
            <CardHeader>
              <CardTitle>Total Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <TotalSearchesChart />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Top 10 Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <Top10SearchesChart />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Clicks and Impressions</CardTitle>
            </CardHeader>
            <CardContent>
              <ClicksImpressionsChart />
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