import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Play, 
  Users, 
  BarChart3, 
  Target, 
  Shield, 
  Repeat, 
  TrendingUp, 
  Clock, 
  Hash,
  ChevronRight,
  Mail,
  Phone,
  ArrowRight,
  Video,
  Zap,
  Eye
} from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import workflowIllustration from '@/assets/workflow-illustration.jpg';
import viralInfographic from '@/assets/viral-infographic.jpg';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      icon: Video,
      title: "Tworzymy materiały",
      description: "Wykorzystujemy Twoje banery, filmy i GIF-y lub tworzymy nowe materiały reklamowe"
    },
    {
      icon: Users,
      title: "Setki kont publikują",
      description: "Małe konta codziennie publikują Twoje treści na swoich profilach w mediach społecznościowych"
    },
    {
      icon: BarChart3,
      title: "Otrzymujesz statystyki",
      description: "Pełne statystyki, linki do publikacji i mierzalne efekty kampanii"
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Skalowalność i zasięg", description: "Setki kont, tysiące publikacji, duża szansa na viral" },
    { icon: Shield, title: "Autentyczność", description: "Małe konta budują zaufanie i naturalną widoczność" },
    { icon: Target, title: "Cross-platformowość", description: "TikTok, Instagram Reels, Facebook Shorts" },
    { icon: Repeat, title: "Powtarzalność przekazu", description: "Widz zobaczy Twój baner kilkukrotnie" },
    { icon: Hash, title: "Targetowanie", description: "Hasztagi, wiek, platforma" },
    { icon: Clock, title: "Efekt długotrwały", description: "Treści pozostają na profilach kont" },
    { icon: Eye, title: "Mierzalność", description: "Statystyki, linki do filmów, pełna kontrola efektu" },
    { icon: Zap, title: "Testowanie i optymalizacja", description: "Szybka ocena, co działa najlepiej" },
    { icon: Users, title: "Naturalność", description: "Reklama w kontekście organicznych treści" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center parallax-bg overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/60 to-secondary/20"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Twoja marka, widoczna tam, gdzie ludzie oglądają filmy
          </h1>
          <p className={`text-xl md:text-2xl mb-10 text-muted-foreground max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Docieramy do odbiorców w TikTok, Instagram Reels i Facebook Shorts dzięki autentycznym małym kontom
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="lg" 
              className="hero-gradient shadow-hero transition-bounce hover:scale-105"
              onClick={() => scrollToSection('how-it-works')}
            >
              Jak to działa
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background/80 backdrop-blur-sm shadow-card transition-bounce hover:scale-105"
              onClick={() => scrollToSection('benefits')}
            >
              Korzyści
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="shadow-card transition-bounce hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Kontakt
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Play className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-8 w-8 text-secondary" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Jak to działa</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prosty proces w trzech krokach, który zapewni Twojej marce maksymalną widoczność
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="card-gradient shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <step.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <img 
              src={workflowIllustration} 
              alt="Workflow illustration" 
              className="mx-auto max-w-2xl w-full rounded-lg shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Korzyści reklamy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Odkryj dlaczego setki marek wybiera nasze rozwiązanie do promocji w mediach społecznościowych
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-gradient shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <benefit.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="card-gradient shadow-hero inline-block">
              <CardContent className="p-8">
                <img 
                  src={viralInfographic} 
                  alt="Efekt viralu - 10 milionów wyświetleń" 
                  className="mx-auto max-w-lg w-full rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gradient mb-2">10 milionów wyświetleń</h3>
                <p className="text-muted-foreground">Średni zasięg naszych kampanii dzięki powtarzalności przekazu</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Kontakt</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Chcesz dowiedzieć się, jak Twoja marka może zyskać widoczność dzięki małym kontom? 
            Napisz do nas lub zadzwoń
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 animate-pulse-glow">
                <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <span className="text-lg font-medium">kontakt@example.com</span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 animate-pulse-glow">
                <Phone className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <span className="text-lg font-medium">+48 123 456 789</span>
            </div>
          </div>
          
          <Card className="card-gradient shadow-hero max-w-2xl mx-auto">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                Skontaktuj się, aby poznać szczegóły kampanii – bez nachalnej sprzedaży
              </p>
              <Button 
                size="lg" 
                className="hero-gradient shadow-hero transition-bounce hover:scale-105"
              >
                Rozpocznij kampanię
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;