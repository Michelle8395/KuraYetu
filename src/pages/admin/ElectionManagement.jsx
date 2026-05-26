import React from 'react';
import { 
  Plus, 
  Settings, 
  Trash2, 
  Play, 
  Square,
  ChevronRight
} from 'lucide-react';
import Card, { CardContent } from '../../components/common/Card';
import Button from '../../components/common/Button';
import { elections, positions } from '../../data/mockData';

const ElectionManagement = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Election Management</h1>
          <p className="text-slate-500 mt-1">Configure elections and define leadership positions.</p>
        </div>
        <Button className="space-x-2">
          <Plus size={20} />
          <span>New Election</span>
        </Button>
      </div>

      {/* Active Elections */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Active & Upcoming</h2>
        <div className="grid grid-cols-1 gap-4">
          {elections.map((elec) => (
            <Card key={elec.id} className="group">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <Settings size={24} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-bold text-slate-900">{elec.title}</h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                          {elec.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">Started: May 26, 8:00 AM • Ends: May 26, 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm" className="space-x-2">
                      <Square size={16} fill="currentColor" />
                      <span>Close Polls</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Position Management */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Leadership Positions</h2>
          <Button variant="outline" size="sm" className="space-x-2">
            <Plus size={16} />
            <span>Add Position</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {positions.map((pos) => (
            <Card key={pos.id} className="hover:border-primary/30 transition-colors">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">{pos.title}</h4>
                  <p className="text-xs text-slate-500">2 Candidates Registered</p>
                </div>
                <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                  <ChevronRight size={20} />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectionManagement;
