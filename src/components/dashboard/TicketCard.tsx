'use client';

import React from 'react';
import { Ticket } from '@/types/agent';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  AlertTriangle, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Building,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TicketCardProps {
  ticket: Ticket;
}

export function TicketCard({ ticket }: TicketCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'P1': return 'bg-destructive text-destructive-foreground';
      case 'P2': return 'bg-warning text-warning-foreground';
      case 'P3': return 'bg-info text-info-foreground';
      case 'P4': return 'bg-muted text-muted-foreground';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-destructive text-destructive-foreground';
      case 'In Progress': return 'bg-warning text-warning-foreground';
      case 'Resolved': return 'bg-success text-success-foreground';
      case 'Closed': return 'bg-muted text-muted-foreground';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="telecom-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="font-semibold text-foreground text-sm mb-1">
              {ticket.id}
            </h4>
            <p className="text-foreground font-medium text-base leading-tight">
              {ticket.title}
            </p>
          </div>
          <div className="flex flex-col gap-2 ml-3">
            <Badge className={cn("text-xs font-medium", getPriorityColor(ticket.priority))}>
              {ticket.priority}
            </Badge>
            <Badge className={cn("text-xs font-medium", getStatusColor(ticket.status))}>
              {ticket.status}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        {/* Complaint Category */}
        <div className="flex items-center gap-2 text-sm">
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Category:</span>
          <span className="font-medium text-foreground">{ticket.complaint.category}</span>
        </div>

        {/* Team Assignment */}
        <div className="flex items-center gap-2 text-sm">
          <Building className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Team:</span>
          <span className="font-medium text-foreground">{ticket.team}</span>
        </div>

        {/* Customer Info */}
        <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-foreground">{ticket.customer.name}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground text-xs">{ticket.customer.email}</span>
          </div>
          {ticket.customer.phone && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground text-xs">{ticket.customer.phone}</span>
            </div>
          )}
        </div>

        {/* Timestamp */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-gray-200">
          <Calendar className="h-3 w-3" />
          <span>Created: {ticket.createdAt.toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  );
}