import { ReportTable } from "@/components/report-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReportsPage() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">SEO Reports</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Keywords
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">54,321</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Organic Traffic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">987,654</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Position
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14.2</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Domain Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72</div>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Keyword Rankings</CardTitle>
            <CardDescription>
              Your top ranking keywords and their positions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ReportTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}