import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowLeft,
  Info
} from 'lucide-react';
import Card, { CardContent } from '../../components/common/Card';
import Button from '../../components/common/Button';
import { positions, candidates } from '../../data/mockData';
import { motion } from 'framer-motion';

const VotingPage = () => {
  const { positionId } = useParams();
  const navigate = useNavigate();
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const position = positions.find(p => p.id === positionId);
  const positionCandidates = candidates.filter(c => c.positionId === positionId);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate vote submission
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/success');
    }, 2000);
  };

  if (!position) return <div>Position not found</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center text-slate-500 hover:text-primary transition-colors font-medium">
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Dashboard
        </Link>
        <div className="text-right">
          <p className="text-sm text-slate-500 font-medium">Step 1 of 5</p>
          <div className="w-32 h-2 bg-slate-200 rounded-full mt-1 overflow-hidden">
             <div className="w-1/5 h-full bg-primary rounded-full" />
          </div>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Secret Ballot</h1>
        <p className="text-slate-500">Select your preferred candidate for <span className="text-primary font-bold">{position.title}</span>.</p>
      </div>

      {/* Info Banner */}
      <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-start space-x-3">
        <AlertTriangle className="text-amber-600 shrink-0 w-5 h-5 mt-0.5" />
        <p className="text-sm text-amber-800 leading-relaxed">
          Important: Once you submit your vote, it cannot be changed. Take your time to choose wisely.
        </p>
      </div>

      {/* Candidate Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {positionCandidates.map((cand) => (
          <motion.div
            key={cand.id}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCandidate(cand.id)}
          >
            <Card className={cn(
              "cursor-pointer transition-all duration-300 relative overflow-hidden h-full border-2",
              selectedCandidate === cand.id 
                ? "border-primary bg-primary/5 shadow-lg ring-4 ring-primary/10" 
                : "border-transparent hover:border-slate-200"
            )}>
              {selectedCandidate === cand.id && (
                <div className="absolute top-4 right-4 text-primary">
                  <CheckCircle2 size={24} fill="currentColor" className="text-white" />
                </div>
              )}
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-slate-100 p-1 border-2 border-slate-50 overflow-hidden">
                  <img src={cand.imageUrl} alt={cand.name} className="w-full h-full rounded-full" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{cand.name}</h3>
                  <p className="text-sm text-slate-500 font-medium">{cand.class}</p>
                </div>
                <p className="text-sm text-slate-600 line-clamp-3 italic">
                  "{cand.manifesto}"
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-md border-t border-slate-200 lg:relative lg:bg-transparent lg:border-none lg:p-0 flex justify-center">
         <Button 
           size="lg" 
           className="w-full md:w-64 h-14 text-lg" 
           disabled={!selectedCandidate}
           onClick={() => setShowConfirm(true)}
         >
           Review Choice
         </Button>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                 <ShieldCheck size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Confirm Your Vote</h2>
              <p className="text-slate-500">
                You are about to vote for <span className="font-bold text-slate-900">{positionCandidates.find(c => c.id === selectedCandidate)?.name}</span> as your <span className="font-bold text-slate-900">{position.title}</span>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl flex items-start space-x-3">
               <Info className="text-slate-400 shrink-0 w-5 h-5 mt-0.5" />
               <p className="text-xs text-slate-500 leading-relaxed">
                 KuraYetu ensures this vote remains private. Even after submission, your identity will not be linked to this specific choice in the results.
               </p>
            </div>

            <div className="flex flex-col space-y-3">
              <Button 
                onClick={handleSubmit} 
                isLoading={isSubmitting}
                className="w-full h-12"
              >
                Yes, Submit My Vote
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => setShowConfirm(false)}
                disabled={isSubmitting}
                className="w-full h-12"
              >
                Go Back and Change
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

// Utility for conditional classes (already defined in utils, but adding local ref if needed)
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default VotingPage;
