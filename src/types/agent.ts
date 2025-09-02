export interface AgentMessage {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

export interface AgentResponse {
  message: string;
  status: 'processing' | 'completed' | 'error';
  data?: {
    processedComplaints?: number;
    createdTickets?: Ticket[];
    reportUrl?: string;
  };
}

export interface ProcessingStatus {
  step: string;
  progress: number;
  message: string;
  timestamp: Date;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  priority: 'P1' | 'P2' | 'P3' | 'P4';
  assignee?: string;
  team: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  createdAt: Date;
  updatedAt: Date;
  customer: {
    id: string;
    name: string;
    email: string;
    phone?: string;
  };
  complaint: {
    category: 'Network' | 'Billing' | 'Service' | 'Technical' | 'Other';
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    description: string;
  };
}

export interface AtlassianReport {
  id: string;
  generatedAt: Date;
  timeRange: {
    start: Date;
    end: Date;
  };
  metrics: {
    totalComplaints: number;
    totalTickets: number;
    processingTime: number;
    successRate: number;
  };
  ticketsByPriority: {
    P1: number;
    P2: number;
    P3: number;
    P4: number;
  };
  ticketsByTeam: Record<string, number>;
  ticketsByCategory: Record<string, number>;
}