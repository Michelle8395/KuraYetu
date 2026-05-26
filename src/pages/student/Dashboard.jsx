import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Vote, 
  Calendar, 
  Users, 
  TrendingUp,
  Clock,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import Card, { CardContent, CardHeader } from '../../components/common/Card';
import Button from '../../components/common/Button';
import { positions, elections, turnoutAnalytics } from '../../data/mockData';
import { motion } from 'framer-motion';

const StudentDashboard = () => {
  const activeElection = elections[0];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Habari, Jabari! 👋</h1>
          <p className="text-slate-500 mt-1">Ready to make your voice heard in the {activeElection.title}?</p>
        </div>
        <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl border border-emerald-100 flex items-center space-x-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="font-semibold text-sm">Voting is LIVE</span>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          icon={<Clock className="text-blue-600" />}
          label="Time Remaining"
          value="4h 32m"
          subtext="Polls close at 5:00 PM"
        />
        <StatCard 
          icon={<TrendingUp className="text-emerald-600" />}
          label="Current Turnout"
          value={`${turnoutAnalytics.turnoutPercentage}%`}
          subtext={`${turnoutAnalytics.totalVotesCast} students voted`}
        />
        <StatCard 
          icon={<Users className="text-purple-600" />}
          label="Your Progress"
          value="0/5"
          subtext="Positions voted for"
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Voting Sections */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
            <Vote className="text-primary" />
            <span>Available Positions</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {positions.map((pos, index) => (
              <motion.div
                key={pos.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="group hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-5 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{pos.title}</h3>
                        <p className="text-xs text-slate-500">2 Candidates</p>
                      </div>
                    </div>
                    <Link to={`/vote/${pos.id}`}>
                      <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-white transition-all">
                        Vote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <Card className="bg-primary text-white overflow-hidden relative">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck size={120} />
             </div>
             <CardContent className="p-8 relative z-10">
                <h3 className="text-xl font-bold mb-3">Voting Integrity</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                  KuraYetu uses a 100% secret ballot system. Your vote is encrypted and anonymized. 
                  No teacher, student, or admin can see who you chose.
                </p>
                <Link to="/candidates">
                  <Button variant="accent" className="w-full">
                    View All Candidates
                  </Button>
                </Link>
             </CardContent>
          </Card>

          <Card>
            <CardHeader>
               <h3 className="font-bold text-slate-900">Election Schedule</h3>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">May 26, 2026</p>
                    <p className="text-xs text-slate-500">Main Voting Day</p>
                  </div>
               </div>
               <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">5:30 PM</p>
                    <p className="text-xs text-slate-500">Results Announcement</p>
                  </div>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, subtext }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
          {icon}
        </div>
        <ChevronRight className="text-slate-300" size={20} />
      </div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <h3 className="text-2xl font-bold text-slate-900 my-1">{value}</h3>
      <p className="text-xs text-slate-400">{subtext}</p>
    </CardContent>
  </Card>
);

export default StudentDashboard;
