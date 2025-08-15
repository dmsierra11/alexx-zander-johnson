import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Radio, ExternalLink, Play, Calendar } from 'lucide-react';

export function RailroadSessionsSection() {
  return (
    <section id="railroad-sessions" className="py-20 px-6 bg-cinematic-dark/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Railroad Sessions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A monthly journey through underground electronic music on DI.FM,
            showcasing the deepest sounds from around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Radio Show Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center">
                <Radio className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Monthly Radio Show</h3>
                <p className="text-neon-teal">Every 2nd Friday • 22:00 - 0:00 CET</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Railroad Sessions is Alexx's signature radio show, broadcasting weekly on DI.FM. 
              Each episode takes listeners on a carefully curated journey through the underground, 
              featuring exclusive tracks, unreleased gems, and the latest in deep house, minimal, and techno.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/30 border border-border/20 rounded-lg p-4">
                <h4 className="font-semibold text-neon-purple mb-1">Frequency</h4>
                <p className="text-muted-foreground">Weekly</p>
              </div>
              <div className="bg-card/30 border border-border/20 rounded-lg p-4">
                <h4 className="font-semibold text-neon-teal mb-1">Platform</h4>
                <p className="text-muted-foreground">DI.FM</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-neon-purple hover:bg-neon-purple/80 text-white font-semibold px-8 py-4 glow-purple transition-all duration-300"
              onClick={() => window.open('https://www.di.fm/shows/railroad-sessions', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Listen on DI.FM
            </Button>
          </div>

          {/* Visual Element */}
          <Card className="bg-card/20 border-border/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-neon-purple/20 to-neon-teal/20">
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop" 
                  alt="Railroad Sessions studio setup"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">Underground Soundscapes</h4>
                  <p className="text-muted-foreground">Curated weekly by Alexx Zander Johnson</p>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-neon-purple/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-neon-purple" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Episodes */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">Recent Episodes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { episode: "Episode 047", title: "Deep Underground", date: "Jan 20, 2025" },
            { episode: "Episode 046", title: "Barcelona Nights", date: "Jan 13, 2025" },
            { episode: "Episode 045", title: "Minimal Journeys", date: "Jan 06, 2025" }
          ].map((ep) => (
            <Card key={ep.episode} className="group bg-card/30 border-border/20 hover:border-neon-purple/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-neon-teal" />
                  <span className="text-sm text-muted-foreground">{ep.date}</span>
                </div>
                <h4 className="font-bold text-foreground mb-1">{ep.episode}</h4>
                <p className="text-neon-purple mb-4">{ep.title}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-neon-teal hover:text-neon-teal hover:bg-neon-teal/10"
                  onClick={() => window.open('https://www.di.fm/shows/railroad-sessions', '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
