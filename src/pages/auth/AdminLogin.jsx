import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Settings, Lock, Mail, ArrowRight } from 'lucide-react';
import Button from '../../components/common/Button';
import Card, { CardContent } from '../../components/common/Card';
import Input from '../../components/common/Input';
import { motion } from 'framer-motion';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/admin');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-white text-slate-900 rounded-2xl flex items-center justify-center font-bold text-2xl">K</div>
            <span className="text-3xl font-bold text-white tracking-tight">KuraYetu</span>
          </Link>
          <h1 className="text-2xl font-bold text-white">Administrator Portal</h1>
          <p className="text-slate-400 mt-2">Manage elections and monitor results.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="shadow-2xl border-none bg-slate-800 text-white">
            <CardContent className="p-8">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="relative">
                  <Input
                    label={<span className="text-slate-300">Admin Email</span>}
                    type="email"
                    placeholder="admin@school.ac.ke"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-slate-700 border-slate-600 text-white focus:ring-white/10"
                  />
                  <Mail className="absolute left-3 top-[38px] text-slate-400 w-5 h-5" />
                </div>

                <div className="relative">
                  <Input
                    label={<span className="text-slate-300">Password</span>}
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10 bg-slate-700 border-slate-600 text-white focus:ring-white/10"
                  />
                  <Lock className="absolute left-3 top-[38px] text-slate-400 w-5 h-5" />
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-4 text-lg bg-white text-slate-900 hover:bg-slate-100" 
                  isLoading={isLoading}
                >
                  Admin Sign In
                  {!isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <p className="text-center mt-8 text-slate-500 text-sm">
          <Link to="/login" className="text-slate-400 hover:text-white transition-colors">
            Back to Student Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
