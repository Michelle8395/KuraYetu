import React from 'react';
import { 
  Users, 
  Vote, 
  TrendingUp, 
  Activity,
  Calendar,
  ChevronRight,
  MoreVertical
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import Card, { CardContent, CardHeader } from '../../components/common/Card';
import { turnoutAnalytics } from '../../data/mockData';

const AdminDashboard = () => {
  const chartData = [
    { name: 'Grade 7', votes: 240, total: 300 },
    { name: 'Grade 8', votes: 310, total: 450 },
    { name: 'Grade 9', votes: 296, total: 450 },
  ];

  const COLORS = ['#1e3a8a', '#10b981', '#facc15'];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Election Overview</h1>
        <p className="text-slate-500 mt-1">Real-time monitoring of the ongoing school council elections.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStatCard 
          icon={<Users className="text-blue-600" />}
          label="Total Registered"
          value={turnoutAnalytics.totalRegistered}
          trend="+5% from last year"
        />
        <AdminStatCard 
          icon={<Vote className="text-emerald-600" />}
          label="Total Votes Cast"
          value={turnoutAnalytics.totalVotesCast}
          trend="Currently Active"
        />
        <AdminStatCard 
          icon={<TrendingUp className="text-amber-600" />}
          label="Turnout Rate"
          value={`${turnoutAnalytics.turnoutPercentage}%`}
          trend="846/1200 Students"
        />
        <AdminStatCard 
          icon={<Activity className="text-purple-600" />}
          label="Votes per Hour"
          value="42"
          trend="Steady"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Voter Turnout by Grade</h3>
            <div className="flex space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-xs text-slate-500 font-medium">Votes Cast</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="votes" radius={[6, 6, 0, 0]} barSize={40}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Recent Activity</h3>
            <button className="text-slate-400 hover:text-slate-600">
               <MoreVertical size={20} />
            </button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-50">
               {turnoutAnalytics.recentActivity.map((activity) => (
                 <div key={activity.id} className="p-4 flex items-start space-x-3 hover:bg-slate-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                       <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <p className="text-sm font-bold text-slate-900">{activity.action}</p>
                       <p className="text-xs text-slate-500 truncate">{activity.student}</p>
                    </div>
                    <span className="text-[10px] font-medium text-slate-400 whitespace-nowrap">{activity.time}</span>
                 </div>
               ))}
            </div>
          </CardContent>
          <div className="p-4 border-t border-slate-50">
             <button className="text-sm font-bold text-primary hover:underline w-full text-center">
                View All Activity
             </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

const AdminStatCard = ({ icon, label, value, trend }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <h3 className="text-2xl font-bold text-slate-900 my-1">{value}</h3>
      <p className="text-xs text-slate-400 font-medium">{trend}</p>
    </CardContent>
  </Card>
);

export default AdminDashboard;
