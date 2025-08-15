import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Play, ExternalLink } from "lucide-react";

interface Track {
  id: string;
  title: string;
  coverArt: string;
  url: string;
  releaseDate: string;
}

const tracks: Track[] = [
  {
    id: "1",
    title: "Underground Pulse",
    coverArt:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    url: "https://open.spotify.com/track/example1",
    releaseDate: "2024",
  },
  {
    id: "2",
    title: "Barcelona Nights",
    coverArt:
      "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop",
    url: "https://open.spotify.com/track/example2",
    releaseDate: "2024",
  },
  {
    id: "3",
    title: "Minimal Dreams",
    coverArt:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
    url: "https://open.spotify.com/track/example3",
    releaseDate: "2023",
  },
  {
    id: "4",
    title: "Deep Resonance",
    coverArt:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop",
    url: "https://open.spotify.com/track/example4",
    releaseDate: "2023",
  },
];

export function MusicSection() {
  return (
    <section id="music" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Latest Releases</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in underground electronic soundscapes crafted for
            the dancefloor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tracks.map((track) => (
            <Card
              key={track.id}
              className="group bg-card/50 border-border/20 hover:border-neon-purple/30 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={track.coverArt}
                    alt={track.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-cinematic-black/0 group-hover:bg-cinematic-black/50 transition-all duration-300 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 bg-neon-purple hover:bg-neon-purple/80 transition-all duration-300 glow-purple"
                      onClick={() => window.open(track.url, "_blank")}
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-foreground group-hover:text-neon-purple transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {track.releaseDate}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-center text-neon-teal hover:text-neon-teal hover:bg-neon-teal/10"
                    onClick={() => window.open(track.url, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Listen Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-neon-teal text-neon-teal hover:bg-neon-teal hover:text-black px-8 py-3 font-semibold"
            onClick={() =>
              window.open(
                "https://open.spotify.com/artist/alexxzanderjohnson",
                "_blank",
              )
            }
          >
            View All Releases
          </Button>
        </div>
      </div>
    </section>
  );
}
