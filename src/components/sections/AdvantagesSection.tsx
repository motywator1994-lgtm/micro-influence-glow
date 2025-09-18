import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Target, Award, CheckCircle, Users, Star, Eye } from 'lucide-react';

const advantages = [
  {
    icon: Shield,
    title: "100% Bezpieczeństwo",
    description: "Wszystkie konta przechodzą weryfikację. Gwarantujemy zgodność z regulaminami platform.",
    badge: "0 zablokowanych kampanii 2024",
    color: "green"
  },
  {
    icon: Zap,
    title: "Błyskawiczne Rezultaty",
    description: "Pierwsze wyniki widoczne już w ciągu 24h od startu kampanii.",
    badge: "Średnio 50K wyświetleń w pierwszym dniu",
    color: "orange"
  },
  {
    icon: Target,
    title: "Precyzyjne Targetowanie",
    description: "Dobieramy hashtagi idealnie pasujące do Twojej tematyki.",
    badge: "95% trafność targetowania",
    color: "blue"
  },
  {
    icon: Award,
    title: "Profesjonalne Podejście",
    description: "Doświadczony zespół z wieloletnim stażem w marketingu influencerskim.",
    badge: "5+ lat doświadczenia w branży",
    color: "purple"
  }
];

const comparisonData = [
  { feature: "Czas przygotowania kampanii", us: "3-5 dni", competitor: "2-4 tygodnie" },
  { feature: "Liczba platform", us: "3 platformy", competitor: "1-2 platformy" },
  { feature: "Transparentność procesu", us: "Pełna widoczność", competitor: "Ograniczona" },
  { feature: "Elastyczność kampanii", us: "Pełna personalizacja", competitor: "Standardowe pakiety" },
  { feature: "Dostępność zespołu", us: "Stały kontakt", competitor: "Ograniczona" },
  { feature: "Doświadczenie zespołu", us: "5+ lat", competitor: "Różnie" }
];

const achievementsData = [
  { icon: Users, number: "500+", label: "Zrealizowanych kampanii" },
  { icon: Eye, number: "50M+", label: "Wygenerowanych wyświetleń" },
  { icon: Star, number: "200+", label: "Zadowolonych klientów" },
  { icon: CheckCircle, number: "98%", label: "Współczynnik zadowolenia" }
];

export const AdvantagesSection = () => {
  const [activeTab, setActiveTab] = useState<'advantages' | 'comparison' | 'achievements'>('advantages');

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={activeTab === 'advantages' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('advantages')}
              className="rounded-md"
            >
              Nasze przewagi
            </Button>
            <Button
              variant={activeTab === 'comparison' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('comparison')}
              className="rounded-md"
            >
              Porównanie z konkurencją
            </Button>
            <Button
              variant={activeTab === 'achievements' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('achievements')}
              className="rounded-md"
            >
              Nasze osiągnięcia
            </Button>
          </div>
        </div>

        {/* Advantages Tab */}
        {activeTab === 'advantages' && (
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
            {advantages.map((advantage, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mb-6 bg-${advantage.color}-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <advantage.icon className={`h-8 w-8 text-${advantage.color}-500`} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground mb-4">{advantage.description}</p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {advantage.badge}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Comparison Tab */}
        {activeTab === 'comparison' && (
          <div className="animate-fade-in-up">
            <Card className="shadow-hero overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
                <h3 className="text-2xl font-bold text-center">Porównanie z tradycyjnymi agencjami reklamowymi</h3>
              </div>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4 font-semibold">Funkcja</th>
                        <th className="text-center p-4 font-semibold text-primary">My</th>
                        <th className="text-center p-4 font-semibold text-muted-foreground">Konkurencja</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((item, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="p-4 font-medium">{item.feature}</td>
                          <td className="p-4 text-center">
                            <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {item.us}
                            </Badge>
                          </td>
                          <td className="p-4 text-center text-muted-foreground">{item.competitor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="grid md:grid-cols-4 gap-6 animate-fade-in-up">
            {achievementsData.map((achievement, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hero transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <achievement.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <p className="text-muted-foreground text-sm">{achievement.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};