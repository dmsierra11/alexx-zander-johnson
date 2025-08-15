import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Disc3, ExternalLink, Users, Headphones } from "lucide-react";

interface Release {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  releaseDate: string;
  catalogNumber: string;
  url: string;
}

const releases: Release[] = [
  {
    id: "1",
    title: "Make Love Not War",
    artist: "Zarder & SINUENO TRIBUTE",
    coverArt:
      "https://cdn.builder.io/api/v1/image/assets%2Fb483dd511682401f9f00211e632d2fcf%2Ff5f64c4fe0e14fae8614e9d4ee175c47?format=webp&width=800",
    releaseDate: "2024",
    catalogNumber: "RRR092",
    url: "https://www.beatport.com/es/release/make-love-not-war/4833256",
  },
  {
    id: "2",
    title: "Best of Both Worlds EP",
    artist: "Sjoerd Schouten",
    coverArt:
      "https://cdn.builder.io/api/v1/image/assets%2Fb483dd511682401f9f00211e632d2fcf%2Ffe52eab4c25943e3b67b02739b339ff0?format=webp&width=800",
    releaseDate: "2024",
    catalogNumber: "RRR091",
    url: "https://www.beatport.com/es/release/best-of-both-worlds-ep/4520011",
  },
  {
    id: "3",
    title: "López EP",
    artist: "Klausgreen",
    coverArt:
      "https://cdn.builder.io/api/v1/image/assets%2Fb483dd511682401f9f00211e632d2fcf%2F13edc00e6ff04b9ba8e6cef7e54446ce?format=webp&width=800",
    releaseDate: "2024",
    catalogNumber: "RRR090",
    url: "https://www.beatport.com/es/release/lopez-ep/4310433",
  },
];

export function RailroadRecordingsSection() {
  return (
    <section id="railroad-recordings" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Railroad Recordings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An independent label dedicated to pushing the boundaries of
            underground electronic music, founded by Alexx to showcase emerging
            and established artists.
          </p>
        </div>

        {/* Label Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-neon-teal/20 rounded-full flex items-center justify-center">
                <Disc3 className="w-6 h-6 text-neon-teal" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Independent Label
                </h3>
                <p className="text-neon-purple">Est. 2023</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Railroad Recordings was born from Alexx's vision to create a
              platform for underground electronic music that doesn't compromise
              on artistic integrity. The label focuses on progressive house,
              minimal, and techno, providing a home for both emerging talents
              and established artists who share the same passion for pushing
              sonic boundaries.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card/30 border border-border/20 rounded-lg p-4 text-center">
                <Users className="w-6 h-6 text-neon-purple mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">12+</h4>
                <p className="text-sm text-muted-foreground">Artists</p>
              </div>
              <div className="bg-card/30 border border-border/20 rounded-lg p-4 text-center">
                <Disc3 className="w-6 h-6 text-neon-teal mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">50+</h4>
                <p className="text-sm text-muted-foreground">Releases</p>
              </div>
              <div className="bg-card/30 border border-border/20 rounded-lg p-4 text-center">
                <Headphones className="w-6 h-6 text-neon-purple mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">50K+</h4>
                <p className="text-sm text-muted-foreground">Streams</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <Card className="order-1 lg:order-2 bg-card/20 border-border/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square bg-gradient-to-br from-neon-teal/20 to-neon-purple/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb483dd511682401f9f00211e632d2fcf%2F3f15788da5894b2bb5799224f7f1e779?format=webp&width=800"
                  alt="Railroad Recordings logo"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black/90 via-cinematic-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl font-bold text-gradient mb-2">
                    Railroad Recordings
                  </h4>
                  <p className="text-muted-foreground">
                    Underground Electronic Music
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Latest Releases */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Latest Releases
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {releases.map((release) => (
            <Card
              key={release.id}
              className="group bg-card/30 border-border/20 hover:border-neon-teal/30 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={release.coverArt}
                    alt={release.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-cinematic-black/0 group-hover:bg-cinematic-black/50 transition-all duration-300 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 bg-neon-teal hover:bg-neon-teal/80 transition-all duration-300 glow-teal"
                      onClick={() => window.open(release.url, "_blank")}
                    >
                      <ExternalLink className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-foreground mb-1 group-hover:text-neon-teal transition-colors">
                    {release.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {release.artist}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {release.releaseDate}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="border-neon-teal text-neon-teal hover:bg-neon-teal hover:text-black px-8 py-3 font-semibold w-full sm:w-auto"
              onClick={() =>
                window.open(
                  "https://www.beatport.com/label/railroad-recordings/50502",
                  "_blank",
                )
              }
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Catalog on Beatport
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-8 py-3 font-semibold w-full sm:w-auto"
              onClick={() =>
                window.open("mailto:demos@railroadrecordings.com", "_blank")
              }
            >
              Submit Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
