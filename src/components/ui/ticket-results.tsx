'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Ticket {
  id: string;
  title: string;
  priority: 'P1' | 'P2' | 'P3';
  team: string;
  status: 'Created' | 'Assigned';
}

const mockTickets: Ticket[] = [
  {
    id: 'TICKET-001',
    title: 'Network outage in downtown area',
    priority: 'P1',
    team: 'Network Team',
    status: 'Created'
  },
  {
    id: 'TICKET-002',
    title: 'Billing discrepancy for enterprise customer',
    priority: 'P2',
    team: 'Billing Team',
    status: 'Assigned'
  },
  {
    id: 'TICKET-003',
    title: 'Router replacement needed',
    priority: 'P3',
    team: 'Technical Support',
    status: 'Created'
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'P1': return 'bg-red-500/20 text-red-300 border-red-500/50';
    case 'P2': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50';
    case 'P3': return 'bg-green-500/20 text-green-300 border-green-500/50';
    default: return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Created': return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
    case 'Assigned': return 'bg-purple-500/20 text-purple-300 border-purple-500/50';
    default: return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
  }
};

export function TicketResults() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 space-y-4 animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Processing Complete</h2>
        <p className="text-muted-foreground">Created {mockTickets.length} tickets from customer complaints</p>
      </div>
      
      <div className="grid gap-4">
        {mockTickets.map((ticket, index) => (
          <Card 
            key={ticket.id} 
            className="bg-accent/50 border-border p-6 hover:bg-accent transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-foreground">{ticket.id}</h3>
                <Badge className={getPriorityColor(ticket.priority)}>
                  {ticket.priority}
                </Badge>
                <Badge className={getStatusColor(ticket.status)}>
                  {ticket.status}
                </Badge>
              </div>
            </div>
            
            <p className="text-foreground mb-3">{ticket.title}</p>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Assigned to: {ticket.team}</span>
              <span className="text-muted-foreground">Just now</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}