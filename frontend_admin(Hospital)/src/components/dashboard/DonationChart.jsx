import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Card } from '../ui/Card';
import { colors } from '../../utils/theme';

const data = [
  { month: 'Jan', donations: 65 },
  { month: 'Feb', donations: 59 },
  { month: 'Mar', donations: 80 },
  { month: 'Apr', donations: 81 },
  { month: 'May', donations: 56 },
  { month: 'Jun', donations: 55 },
];

export const DonationChart = () => (
  <Card className="w-full">
    <h2 className="text-xl font-semibold mb-4">Donation Trends</h2>
    <BarChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="donations"
        fill={colors.primary}
        animationBegin={0}
        animationDuration={2000}
      />
    </BarChart>
  </Card>
);