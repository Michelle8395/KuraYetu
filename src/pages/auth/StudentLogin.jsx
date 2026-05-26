import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, User, Lock } from 'lucide-react';
import Button from '../../components/common/Button';
import Card, { CardContent } from '../../components/common/Card';
import Input from '../../components/common/Input';
import { motion } from 'framer-motion';

const StudentLogin = () => {
  const [admissionNo, setAdmissionNo] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">K</div>
            <span className="text-3xl font-bold text-primary tracking-tight">KuraYetu</span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Student Voting Portal</h1>
          <p className="text-slate-500 mt-2">Enter your details to cast your vote securely.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="shadow-2xl border-none">
            <CardContent className="p-8">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="relative">
                  <Input
                    label="Admission Number"
                    placeholder="e.g., JSS/001/2026"
                    value={admissionNo}
                    onChange={(e) => setAdmissionNo(e.target.value)}
                    required
                    className="pl-10"
                  />
                  <User className="absolute left-3 top-[38px] text-slate-400 w-5 h-5" />
                </div>

                <div className="relative">
                  <Input
                    label="Voting PIN"
                    type="password"
                    placeholder="••••"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    required
                    maxLength={4}
                    className="pl-10"
                  />
                  <Lock className="absolute left-3 top-[38px] text-slate-400 w-5 h-5" />
                </div>

                <div className="bg-blue-50 p-4 rounded-xl flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5" />
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Your session is encrypted. We never share your individual vote with anyone, including teachers.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-4 text-lg" 
                  isLoading={isLoading}
                >
                  Log In to Vote
                  {!isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <p className="text-center mt-8 text-slate-500 text-sm">
          Having trouble logging in? <br />
          <a href="#" className="text-primary font-semibold hover:underline">Contact your Class Teacher</a>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
