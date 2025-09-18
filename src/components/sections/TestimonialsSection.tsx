import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Nigdy wcześniej nie osiągnęliśmy takiego zaangażowania. Klienci sami zaczęli tworzyć treści o naszych produktach.",
    author: "Anna Wiśniewska",
    position: "Dyrektor Marketingu",
    company: "Restaurant Chain",
    avatar: "AW",
    rating: 5
  },
  {
    id: 2,
    quote: "ROI z kampanii przekroczył nasze najśmielsze oczekiwania. W ciągu miesiąca zwiększyliśmy sprzedaż o 150%.",
    author: "Tomasz Nowak",
    position: "CEO",
    company: "E-commerce Store",
    avatar: "TN",
    rating: 5
  },
  {
    id: 3,
    quote: "Profesjonalne podejście i transparentność procesu. Zawsze wiedzieliśmy, co dzieje się z naszą kampanią.",
    author: "Katarzyna Kowalska",
    position: "Brand Manager",
    company: "Fashion Brand",
    avatar: "KK",
    rating: 5
  },
  {
    id: 4,
    quote: "Dzięki współpracy z małymi kontami nasza marka zyskała autentyczność, której wcześniej brakowało.",
    author: "Paweł Zieliński",
    position: "Marketing Manager",
    company: "Tech Startup",
    avatar: "PZ",
    rating: 5
  },
  {
    id: 5,
    quote: "Szybkość realizacji i jakość wykonania przeszła nasze oczekiwania. Polecamy każdej marce!",
    author: "Marta Lewandowska",
    position: "CMO",
    company: "Beauty Brand",
    avatar: "ML",
    rating: 5
  }
];

const teamMembers = [
  { name: "Marta Kowalska", position: "Manager Marketingu", avatar: "MK" },
  { name: "Tomasz Nowak", position: "CEO", avatar: "TN" },
  { name: "Anna Wiśniewska", position: "Dyrektor Marketingu", avatar: "AW" },
  { name: "Paweł Zieliński", position: "E-commerce Manager", avatar: "PZ" },
  { name: "Katarzyna Lewandowska", position: "Brand Manager", avatar: "KL" }
];

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Opinie klientów</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zobacz, co mówią o nas marki, które już skorzystały z naszych usług
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-hero overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center relative">
              <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
              
              <blockquote className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-muted-foreground">{testimonials[currentTestimonial].position}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>

              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm" onClick={prevTestimonial}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex gap-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
                <Button variant="outline" size="sm" onClick={nextTestimonial}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Avatars */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Zaufały nam marki z różnych branż</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <Avatar className="h-16 w-16 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-white">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm font-medium">{member.name}</div>
                <div className="text-xs text-muted-foreground">{member.position}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};