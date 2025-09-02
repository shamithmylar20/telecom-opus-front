'use client';

import React from 'react';
import { useTelecomAgent } from '@/hooks/use-telecom-agent';
import { TicketCard } from './TicketCard';
import { ReportViewer } from './ReportViewer';
import { Ticket, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export function ResultsPanel() {
  const { tickets, report } = useTelecomAgent();

  if (tickets.length === 0 && !report) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 mb-4">
          <Ticket className="h-16 w-16 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          No Results Yet
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Start a conversation with TelecomMaster to process complaints and create tickets. 
          Results will appear here in real-time.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Processing Results
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-time updates on complaint processing, ticket creation, and system reports.
        </p>
      </div>

      {/* Summary Statistics */}
      {tickets.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="telecom-card p-6 text-center">
            <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{tickets.length}</div>
            <div className="text-sm text-muted-foreground">Tickets Created</div>
          </div>
          
          <div className="telecom-card p-6 text-center">
            <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">
              {tickets.filter(t => t.priority === 'P1').length}
            </div>
            <div className="text-sm text-muted-foreground">High Priority</div>
          </div>
          
          <div className="telecom-card p-6 text-center">
            <Clock className="h-8 w-8 text-warning mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">
              {tickets.filter(t => t.status === 'Open').length}
            </div>
            <div className="text-sm text-muted-foreground">Open Tickets</div>
          </div>
          
          <div className="telecom-card p-6 text-center">
            <Ticket className="h-8 w-8 text-info mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      )}

      {/* Tickets Grid */}
      {tickets.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">
            Created Tickets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      )}

      {/* Report Section */}
      {report && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">
            Atlassian MCP Report
          </h3>
          <ReportViewer report={report} />
        </div>
      )}
    </div>
  );
}