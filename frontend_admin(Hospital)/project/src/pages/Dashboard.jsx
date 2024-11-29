import React from 'react';
import { Activity, Users, AlertTriangle } from 'lucide-react';
import { PageContainer } from '../components/ui/PageContainer';
import { StatCard } from '../components/dashboard/StatCard';
import { DonationChart } from '../components/dashboard/DonationChart';
import { colors } from '../utils/theme';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={Activity}
          title="Total Blood Stock"
          value="450 units"
          color={`text-[${colors.primary}]`}
        />
        <StatCard
          icon={Users}
          title="Active Donors"
          value="1,234"
          color="text-blue-500"
        />
        <StatCard
          icon={AlertTriangle}
          title="Emergency Cases"
          value="5"
          color="text-yellow-500"
        />
      </div>
      <DonationChart />
    </PageContainer>
  );
};

export default Dashboard;