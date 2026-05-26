import React from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  ExternalLink,
  Search
} from 'lucide-react';
import Card, { CardContent } from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { candidates, positions } from '../../data/mockData';

const CandidateManagement = () => {
  const getPositionTitle = (id) => positions.find(p => p.id === id)?.title;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Candidate Management</h1>
          <p className="text-slate-500 mt-1">Review and manage student candidates.</p>
        </div>
        <Button className="space-x-2">
          <Plus size={20} />
          <span>Register Candidate</span>
        </Button>
      </div>

      {/* Toolbar */}
      <Card>
        <CardContent className="p-4 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input placeholder="Search candidates..." className="pl-10" />
          </div>
          <select className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Positions</option>
            {positions.map(p => <option key={p.id}>{p.title}</option>)}
          </select>
        </CardContent>
      </Card>

      {/* Table/List */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Candidate</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {candidates.map((cand) => (
                <tr key={cand.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden shrink-0">
                        <img src={cand.imageUrl} alt={cand.name} className="w-full h-full" />
                      </div>
                      <span className="font-bold text-slate-900">{cand.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">{getPositionTitle(cand.positionId)}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{cand.class}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                      Verified
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default CandidateManagement;
