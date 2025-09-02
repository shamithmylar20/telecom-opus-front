import { useState, useCallback } from 'react';
import { AgentMessage, ProcessingStatus, Ticket, AtlassianReport } from '@/types/agent';

export function useTelecomAgent() {
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [processingStatus, setProcessingStatus] = useState<ProcessingStatus | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [report, setReport] = useState<AtlassianReport | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: AgentMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate agent processing
    setTimeout(() => {
      const agentMessage: AgentMessage = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        content: `Processing your request: "${content}". I'll analyze customer complaints and create Jira tickets accordingly.`,
        timestamp: new Date(),
        status: 'sent'
      };

      setMessages(prev => [...prev, agentMessage]);

      // Simulate processing steps
      const steps = [
        'Connecting to SharePoint...',
        'Fetching customer complaints...',
        'Analyzing complaint severity...',
        'Creating Jira tickets...',
        'Generating Atlassian MCP report...',
      ];

      steps.forEach((step, index) => {
        setTimeout(() => {
          setProcessingStatus({
            step,
            progress: ((index + 1) / steps.length) * 100,
            message: step,
            timestamp: new Date()
          });

          if (index === steps.length - 1) {
            // Generate mock tickets
            const mockTickets: Ticket[] = [
              {
                id: 'TELECOM-123',
                title: 'Network outage in downtown area',
                description: 'Multiple customers reporting service disruption',
                priority: 'P1',
                team: 'Network Operations',
                status: 'Open',
                createdAt: new Date(),
                updatedAt: new Date(),
                customer: {
                  id: 'CUST-001',
                  name: 'John Smith',
                  email: 'john.smith@example.com',
                  phone: '+1-555-0123'
                },
                complaint: {
                  category: 'Network',
                  severity: 'Critical',
                  description: 'Complete service outage affecting business operations'
                }
              },
              {
                id: 'TELECOM-124',
                title: 'Billing discrepancy - overcharge',
                description: 'Customer charged for services not used',
                priority: 'P2',
                team: 'Billing Support',
                status: 'In Progress',
                createdAt: new Date(),
                updatedAt: new Date(),
                customer: {
                  id: 'CUST-002',
                  name: 'Sarah Johnson',
                  email: 'sarah.j@example.com'
                },
                complaint: {
                  category: 'Billing',
                  severity: 'Medium',
                  description: 'Unexpected charges on monthly bill'
                }
              }
            ];

            setTickets(mockTickets);
            
            // Generate mock report
            const mockReport: AtlassianReport = {
              id: 'RPT-' + Date.now(),
              generatedAt: new Date(),
              timeRange: {
                start: new Date(Date.now() - 24 * 60 * 60 * 1000),
                end: new Date()
              },
              metrics: {
                totalComplaints: 15,
                totalTickets: 12,
                processingTime: 45,
                successRate: 95.5
              },
              ticketsByPriority: { P1: 3, P2: 4, P3: 3, P4: 2 },
              ticketsByTeam: {
                'Network Operations': 5,
                'Billing Support': 4,
                'Technical Support': 3
              },
              ticketsByCategory: {
                'Network': 6,
                'Billing': 4,
                'Technical': 2
              }
            };

            setReport(mockReport);
            setIsLoading(false);
            setProcessingStatus(null);
          }
        }, (index + 1) * 1000);
      });
    }, 1000);
  }, []);

  return {
    messages,
    isLoading,
    processingStatus,
    tickets,
    report,
    sendMessage
  };
}