import { useState } from "react";
import Layout from "@/components/dashboard/Layout";
import AlertBanner from "@/components/dashboard/AlertBanner";
import StatsCard from "@/components/dashboard/StatsCard";
import LeadsTable from "@/components/dashboard/LeadsTable";
import ServicePricingTable from "@/components/dashboard/ServicePricingTable";
import MarketAnalysisTable from "@/components/dashboard/MarketAnalysisTable";
import PriceFactorsTable from "@/components/dashboard/PriceFactorsTable";
import NetworkPerformanceTable from "@/components/dashboard/NetworkPerformanceTable";
import CustomerServiceTable from "@/components/dashboard/CustomerServiceTable";
import TelecomIndustryTable from "@/components/dashboard/TelecomIndustryTable";
import CommonIssuesTable from "@/components/dashboard/CommonIssuesTable";
import CustomerFeedbackLouneaTable from "@/components/dashboard/CustomerFeedbackLouneaTable";
import ComprehensivePricingView from "@/components/dashboard/ComprehensivePricingView";
import ImprovementAreasView from "@/components/dashboard/ImprovementAreasView";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [activeView, setActiveView] = useState("overview");

  const renderContent = () => {
    switch (activeView) {
      case "service-pricing":
        return <ComprehensivePricingView />;
      case "market-analysis":
        return <MarketAnalysisTable />;
      case "price-factors":
        return <PriceFactorsTable />;
      case "leads":
        return (
          <>
            <div className="text-sm text-gray-400 mb-4 italic">Currently using mock data (recent business leads)</div>
            <LeadsTable />
          </>
        );
      case "network-performance":
        return <NetworkPerformanceTable />;
      case "customer-service":
        return <CustomerServiceTable />;
      case "telecom-industry":
        return <TelecomIndustryTable />;
      case "common-issues":
        return <CommonIssuesTable />;
      case "lounea-feedback":
        return <CustomerFeedbackLouneaTable />;
      case "improvement-areas":
        return <ImprovementAreasView />;
      case "alerts":
        return (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">System Alerts</h2>
            <div className="text-sm text-gray-400 mb-4 italic">Currently using mock data</div>
            <div className="space-y-4">
              <AlertBanner 
                title="Alert: 3 New Business Opportunities in Forssa Region"
                message="Increased fiber connectivity demand detected in Southwest Finland"
                showMockData={true}
              />
              <AlertBanner 
                title="Network Maintenance Scheduled"
                message="Routine maintenance planned for next week in Helsinki region"
                showMockData={true}
              />
              <AlertBanner 
                title="New Service Area"
                message="Network coverage expanded in Tampere industrial district"
                showMockData={true}
              />
            </div>
          </Card>
        );
      default:
        return (
          <>
            <AlertBanner 
              title="Alert: 3 New Business Opportunities in Forssa Region"
              message="Increased fiber connectivity demand detected in Southwest Finland"
              showMockData={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <StatsCard
                title="Network Coverage Growth"
                value="42%"
                trend={12}
                description="Fiber Network Coverage Increase in Service Areas"
              />
              <StatsCard
                title="Service Adoption"
                value="28%"
                trend={8}
                description="New Business Fiber Service Subscriptions This Quarter"
              />
            </div>

            <div className="text-sm text-gray-400 mb-4 italic">Currently using mock data (recent business leads)</div>
            <LeadsTable />
          </>
        );
    }
  };

  return (
    <Layout activeView={activeView} onNavigate={setActiveView}>
      {renderContent()}
    </Layout>
  );
};

export default Index;