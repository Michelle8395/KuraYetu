import React from 'react';
import { 
  Trophy, 
  Download, 
  Share2, 
  TrendingUp,
  Award
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import Card, { CardContent, CardHeader } from '../../components/common/Card';
import Button from '../../components/common/Button';
import { resultsData } from '../../data/mockData';

const ResultsDashboard = () => {
  const COLORS = ['#1e3a8a', '#10b981', '#facc15', '#8b5cf6'];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Final Results</h1>
          <p className="text-slate-500 mt-1">Detailed breakdown of the 2026 School Council Elections.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="space-x-2">
            <Share2 size={18} />
            <span>Publish Results</span>
          </Button>
          <Button className="space-x-2">
            <Download size={18} />
            <span>Export PDF</span>
          </Button>
        </div>
      </div>

      {/* Winners Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resultsData.map((res, index) => {
          const winner = res.results.sort((a, b) => b.votes - a.votes)[0];
          return (
            <Card key={index} className="bg-gradient-to-br from-white to-slate-50 border-primary/20">
               <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-accent/50">
                     <Trophy size={32} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{res.position}</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{winner.name}</h3>
                    <p className="text-sm text-slate-500 font-medium">Elected with {winner.percentage}% of votes</p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center space-x-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                       <Award size={14} />
                       <span>WINNER</span>
                    </span>
                  </div>
               </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Detailed Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {resultsData.map((res, index) => (
          <Card key={index}>
            <CardHeader>
               <h3 className="font-bold text-slate-900">{res.position} Results</h3>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={res.results} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    width={120}
                    tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="votes" radius={[0, 6, 6, 0]} barSize={32}>
                    {res.results.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
            <div className="px-6 pb-6 space-y-3">
               {res.results.map((cand, idx) => (
                 <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{cand.name}</span>
                    <span className="font-bold text-slate-900">{cand.votes} votes ({cand.percentage}%)</span>
                 </div>
               ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResultsDashboard;
