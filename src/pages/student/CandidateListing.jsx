import React, { useState } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import Card, { CardContent } from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { candidates, positions } from '../../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const CandidateListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('all');

  const filteredCandidates = candidates.filter(cand => {
    const matchesSearch = cand.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = selectedPosition === 'all' || cand.positionId === selectedPosition;
    return matchesSearch && matchesPosition;
  });

  const getPositionTitle = (id) => positions.find(p => p.id === id)?.title;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Election Candidates</h1>
          <p className="text-slate-500 mt-1">Get to know the students vying for leadership.</p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input 
              placeholder="Search candidate name..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-slate-400 w-5 h-5" />
            <select 
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
            >
              <option value="all">All Positions</option>
              {positions.map(pos => (
                <option key={pos.id} value={pos.id}>{pos.title}</option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence mode='popLayout'>
          {filteredCandidates.map((cand, index) => (
            <motion.div
              key={cand.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-0 flex-1">
                  <div className="h-32 bg-gradient-to-r from-primary to-blue-400 relative">
                     <div className="absolute -bottom-10 left-6">
                        <div className="w-20 h-20 rounded-2xl bg-white p-1 shadow-lg">
                           <img 
                             src={cand.imageUrl} 
                             alt={cand.name} 
                             className="w-full h-full rounded-xl bg-slate-50"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="pt-12 px-6 pb-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
                        {getPositionTitle(cand.positionId)}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-2">{cand.name}</h3>
                      <p className="text-sm text-slate-500">{cand.class}</p>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="text-sm text-slate-600 italic leading-relaxed">
                        "{cand.manifesto}"
                      </p>
                    </div>
                  </div>
                </CardContent>
                <div className="px-6 pb-6">
                   <Button variant="outline" className="w-full space-x-2">
                      <BookOpen size={18} />
                      <span>Read Full Manifesto</span>
                   </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredCandidates.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
           <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search size={32} />
           </div>
           <h3 className="text-lg font-bold text-slate-900">No candidates found</h3>
           <p className="text-slate-500">Try adjusting your search or filter settings.</p>
        </div>
      )}
    </div>
  );
};

export default CandidateListing;
