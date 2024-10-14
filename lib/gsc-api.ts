// Simulación de datos de Google Search Console
const mockGSCData = [
    { date: '2023-01-01', query: 'ejemplo 1', page: '/page1', clicks: 100, impressions: 1000, ctr: 0.1, position: 1.5 },
    { date: '2023-01-02', query: 'ejemplo 2', page: '/page2', clicks: 80, impressions: 900, ctr: 0.089, position: 2.0 },
    // ... Agrega más datos simulados aquí
  ];
  
  export async function fetchGSCData(siteUrl: string, startDate: string, endDate: string) {
    // Simular una demora en la red
    await new Promise(resolve => setTimeout(resolve, 500));
  
    // Filtrar los datos según las fechas proporcionadas
    return mockGSCData.filter(row => {
      const rowDate = new Date(row.date);
      return rowDate >= new Date(startDate) && rowDate <= new Date(endDate);
    });
  }