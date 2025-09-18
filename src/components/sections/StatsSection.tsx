import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Users, Heart, Activity, Calendar, BarChart3 } from 'lucide-react';

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Oto nasze ostatnie statystyki z miesiąca
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zobacz nasze imponujące wyniki z ostatniego miesiąca
          </p>
        </div>

        {/* Main Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">12.8M</div>
              <div className="text-gray-300 mb-1">Wyświetlenia</div>
              <div className="text-sm text-gray-400">Średnio 428.2K dziennie</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">342</div>
              <div className="text-gray-300 mb-1">Aktywne konta</div>
              <div className="text-sm text-gray-400">Zweryfikowane i gotowe</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">2.2M</div>
              <div className="text-gray-300 mb-1">Zaangażowanie</div>
              <div className="text-sm text-gray-400">Polubienia, komentarze, udostępnienia</div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Timeline */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="h-6 w-6 text-green-400" />
              <h3 className="text-2xl font-semibold text-white">Ostatnia aktywność</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/30">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="text-white font-medium">12 aktywnych kampanii w tym tygodniu</div>
                  <div className="text-gray-400 text-sm">Aktualizacja</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/30">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-white font-medium">8 marek współpracuje z nami regularnie</div>
                  <div className="text-gray-400 text-sm">Stan obecny</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/30">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-white font-medium">150+ treści opublikowanych w tym miesiącu</div>
                  <div className="text-gray-400 text-sm">Podsumowanie</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/30">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-white font-medium">Działamy na 3 głównych platformach</div>
                  <div className="text-gray-400 text-sm">Zasięg</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};