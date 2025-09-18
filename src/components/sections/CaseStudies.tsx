import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, TrendingUp, Target, Clapperboard, Calculator, Utensils } from 'lucide-react';

const caseStudies = [
  {
    title: "Kampania Fashion Brand",
    description: "200 kont, 2 mln wyświetleń w 14 dni",
    stats: {
      views: "2.1M",
      ctr: "3.2%",
      engagement: "8.5%"
    },
    icon: Clapperboard,
    gradient: "from-pink-500 to-purple-600",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500"
  },
  {
    title: "Kampania Tech Startup",
    description: "150 kont, 1.5 mln wyświetleń w 10 dni",
    stats: {
      views: "1.5M",
      ctr: "4.1%",
      engagement: "12.3%"
    },
    icon: Calculator,
    gradient: "from-blue-500 to-cyan-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    title: "Kampania Food & Beverage",
    description: "300 kont, 3.2 mln wyświetleń w 21 dni",
    stats: {
      views: "3.2M",
      ctr: "2.8%",
      engagement: "15.7%"
    },
    icon: Utensils,
    gradient: "from-orange-500 to-red-600",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500"
  }
];

export const CaseStudies = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Przykłady skutecznych kampanii realizowanych przez nasze małe konta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group overflow-hidden shadow-card hover:shadow-hero transition-all duration-500 hover:-translate-y-2">
              <div className={`h-32 bg-gradient-to-r ${study.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 ${study.iconBg} rounded-lg flex items-center justify-center backdrop-blur-sm`}>
                    <study.icon className={`h-6 w-6 ${study.iconColor}`} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-6">{study.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{study.stats.views}</div>
                    <div className="text-xs text-muted-foreground">Wyświetlenia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{study.stats.ctr}</div>
                    <div className="text-xs text-muted-foreground">CTR</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{study.stats.engagement}</div>
                    <div className="text-xs text-muted-foreground">Zaangażowanie</div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Zobacz szczegóły
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};