import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">K</div>
          <span className="text-2xl font-bold text-primary tracking-tight">KuraYetu</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-slate-600 font-medium">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/admin/login" className="text-slate-500 hover:text-primary text-sm font-medium">Admin</Link>
          <Link to="/login">
            <Button size="sm">Student Login</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-slate-800 rounded-full text-sm font-semibold mb-6">
            Trusted by 50+ Schools in Kenya
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Our Voice, <br />
            <span className="text-primary">Our Leadership.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            A secure digital school election platform built for the next generation of leaders. 
            Fair, transparent, and completely private.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/login">
              <Button size="lg" className="w-full sm:w-auto group">
                Vote Securely
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="#features">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image / Illustration Placeholder */}
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-4 md:p-8 aspect-video flex items-center justify-center overflow-hidden shadow-2xl mx-auto max-w-5xl">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-full opacity-40">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-slate-100 animate-pulse" />
                  </div>
                ))}
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 text-center max-w-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Secure & Confidential</h3>
                  <p className="text-slate-600 mt-2">Your vote is protected by advanced encryption and secret ballot standards.</p>
                </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose KuraYetu?</h2>
            <p className="text-slate-600 mt-4">Modernizing school elections with integrity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Shield className="text-blue-500" />}
              title="Secret Ballot"
              description="Confidential voting system where no one can see who you voted for."
            />
            <FeatureCard 
              icon={<CheckCircle className="text-emerald-500" />}
              title="Fair Elections"
              description="Automated systems ensure one vote per person and zero manual errors."
            />
            <FeatureCard 
              icon={<Clock className="text-yellow-500" />}
              title="Real-Time Participation"
              description="Monitor voter turnout live as students participate in the election."
            />
            <FeatureCard 
              icon={<Users className="text-purple-500" />}
              title="Fast Results"
              description="Get instant election results as soon as the polls are officially closed."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">K</div>
            <span className="text-xl font-bold text-primary tracking-tight">KuraYetu</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 KuraYetu. All rights reserved. “Our Voice, Our Leadership.”</p>
          <div className="flex space-x-6 text-slate-400">
             {/* Social placeholders */}
             <div className="w-5 h-5 bg-slate-200 rounded-full" />
             <div className="w-5 h-5 bg-slate-200 rounded-full" />
             <div className="w-5 h-5 bg-slate-200 rounded-full" />
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default LandingPage;
