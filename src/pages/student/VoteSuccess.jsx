import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Heart, Share2 } from 'lucide-react';
import Button from '../../components/common/Button';
import { motion } from 'framer-motion';

const VoteSuccess = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
            className="w-32 h-32 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto"
          >
            <CheckCircle size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-0 right-1/4 w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-slate-900 shadow-lg -rotate-12"
          >
            <Heart size={16} fill="currentColor" />
          </motion.div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">Vote Submitted!</h1>
          <p className="text-lg text-slate-600">
            Thank you for participating in your school's democracy. Your voice has been heard!
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
           <p className="text-sm text-slate-500 font-medium">What's next?</p>
           <ul className="text-left space-y-3">
              <li className="flex items-start space-x-3 text-sm text-slate-600">
                 <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold">1</div>
                 <span>Your vote is now safely stored in the digital ballot box.</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-600">
                 <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold">2</div>
                 <span>Results will be announced today at 5:30 PM.</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-600">
                 <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold">3</div>
                 <span>Encourage your friends to vote before polls close!</span>
              </li>
           </ul>
        </div>

        <div className="flex flex-col space-y-3">
          <Link to="/dashboard">
            <Button size="lg" className="w-full">
              Back to Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Button variant="ghost" className="w-full text-slate-500 flex items-center justify-center space-x-2">
            <Share2 size={18} />
            <span>Tell your friends</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default VoteSuccess;
