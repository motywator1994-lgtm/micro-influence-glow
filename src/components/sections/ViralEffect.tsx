import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, TrendingUp, Users, Clock } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const VideoThumbnail = ({ delay = 0 }: { delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
      <Eye className="h-6 w-6 text-white" />
    </div>
  );
};

export const ViralEffect = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Efekt viralu w praktyce</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wizualizacja skali i powtarzalności reklamy
          </p>
        </div>

        {/* Video Grid Animation */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-16">
          {Array.from({ length: 16 }, (_, i) => (
            <VideoThumbnail key={i} delay={i * 100} />
          ))}
        </div>

        {/* Animated Stats */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 p-8 rounded-full bg-card shadow-hero">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient">
                <AnimatedCounter end={10} suffix="M+ wyświetleń" />
              </div>
              <p className="text-muted-foreground">Średnio na kampanię</p>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center shadow-card hover:shadow-hero transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">Aktywnych kont</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-hero transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">
                <AnimatedCounter end={400} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">Publikacji dziennie</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-hero transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">3</div>
              <p className="text-sm text-muted-foreground">Platformy</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-hero transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-secondary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Aktywność</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};