'use client';

import React from 'react';
import { AtlassianReport } from '@/types/agent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Users,
  Calendar,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReportViewerProps {
  report: AtlassianReport;
}

export function ReportViewer({ report }: ReportViewerProps) {
  const handleDownload = () => {
    // Mock download functionality
    console.log('Downloading report...', report.id);
  };

  return (
    <div className="space-y-6">
      {/* Report Header */}
      <Card className="telecom-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <BarChart3 className="h-5 w-5 text-primary" />
                Atlassian MCP Report
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Report ID: {report.id}
              </p>
            </div>
            <Button onClick={handleDownload} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>
              Generated: {report.generatedAt.toLocaleString()} | 
              Time Range: {report.timeRange.start.toLocaleDateString()} - {report.timeRange.end.toLocaleDateString()}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="telecom-card">
          <CardContent className="p-6 text-center">
            <AlertCircle className="h-8 w-8 text-info mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">
              {report.metrics.totalComplaints}
            </div>
            <div className="text-sm text-muted-foreground">Total Complaints</div>
          </CardContent>
        </Card>

        <Card className="telecom-card">
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">
              {report.metrics.totalTickets}
            </div>
            <div className="text-sm text-muted-foreground">Tickets Created</div>
          </CardContent>
        </Card>

        <Card className="telecom-card">
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 text-warning mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">
              {report.metrics.processingTime}s
            </div>
            <div className="text-sm text-muted-foreground">Avg Processing Time</div>
          </CardContent>
        </Card>

        <Card className="telecom-card">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">
              {report.metrics.successRate}%
            </div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Priority Breakdown */}
      <Card className="telecom-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            Tickets by Priority
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(report.ticketsByPriority).map(([priority, count]) => (
              <div key={priority} className="text-center p-4 bg-gray-50 rounded-lg">
                <Badge 
                  className={`mb-2 ${
                    priority === 'P1' ? 'bg-destructive text-destructive-foreground' :
                    priority === 'P2' ? 'bg-warning text-warning-foreground' :
                    priority === 'P3' ? 'bg-info text-info-foreground' :
                    'bg-muted text-muted-foreground'
                  }`}
                >
                  {priority}
                </Badge>
                <div className="text-2xl font-bold text-foreground">{count}</div>
                <div className="text-xs text-muted-foreground">tickets</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Team Distribution */}
      <Card className="telecom-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Tickets by Team
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(report.ticketsByTeam).map(([team, count]) => (
              <div key={team} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-foreground">{team}</span>
                <Badge variant="outline">{count} tickets</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <Card className="telecom-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Tickets by Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(report.ticketsByCategory).map(([category, count]) => (
              <div key={category} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-foreground">{category}</span>
                <Badge variant="outline">{count} tickets</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}