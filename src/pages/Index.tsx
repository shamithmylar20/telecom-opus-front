'use client';

import React from 'react';
import { HandWrittenTitle } from '@/components/ui/hand-writing-text';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { ResultsPanel } from '@/components/dashboard/ResultsPanel';
import heroImage from '@/assets/telecom-hero.jpg';
import { Network, Shield, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 telecom-hero overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="TelecomMaster Professional Background" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <HandWrittenTitle 
            title="TelecomMaster" 
            subtitle="AI-Powered Complaint Resolution Agent"
            className="mb-16"
          />
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Intelligent Processing
              </h3>
              <p className="text-muted-foreground">
                Automatically processes customer complaints from SharePoint and creates structured Jira tickets
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Real-time Updates
              </h3>
              <p className="text-muted-foreground">
                Live status tracking and instant notifications as complaints are processed and tickets created
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Enterprise Ready
              </h3>
              <p className="text-muted-foreground">
                Complete Atlassian MCP integration with comprehensive reporting and analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Command Your Agent
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell TelecomMaster to process complaints and create tickets. 
              Use natural language commands to control the entire workflow.
            </p>
          </div>
          
          <ChatInterface />
        </div>
      </section>

      {/* Results Dashboard */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ResultsPanel />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            TelecomMaster Agent - Streamlining telecommunications complaint resolution with AI
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with professional-grade security and enterprise integration
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
