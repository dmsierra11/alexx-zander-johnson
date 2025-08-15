import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Download, FileImage, FileType, FileText } from "lucide-react";

interface PressKitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  downloadUrl: string;
  fileSize: string;
}

const pressKitItems: PressKitItem[] = [
  {
    id: "1",
    title: "Press Photos",
    description: "High-resolution promotional photos (ZIP archive)",
    icon: <FileImage className="w-6 h-6" />,
    downloadUrl: "/downloads/alexx-press-photos.zip",
    fileSize: "25.4 MB",
  },
  {
    id: "2",
    title: "Logo Pack",
    description: "Logos and brand assets in various formats",
    icon: <FileType className="w-6 h-6" />,
    downloadUrl: "/downloads/alexx-logo-pack.zip",
    fileSize: "8.2 MB",
  },
  {
    id: "3",
    title: "Bio PDF",
    description: "Complete artist biography and press information",
    icon: <FileText className="w-6 h-6" />,
    downloadUrl: "/downloads/alexx-bio.pdf",
    fileSize: "1.8 MB",
  },
];

export function PressKitSection() {
  const handleDownload = (url: string, filename: string) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading: ${filename} from ${url}`);
    // For demo purposes, we'll just show an alert
    alert(`Download would start: ${filename}`);
  };

  return (
    <section className="py-20 px-6 bg-cinematic-dark/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Press Kit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Download professional assets for promotional and media use
          </p>
          <p className="text-sm text-neon-purple font-semibold">
            For promoters & media use only
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pressKitItems.map((item) => (
            <Card
              key={item.id}
              className="bg-card/30 border-border/20 hover:border-neon-purple/30 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-neon-purple/10 rounded-full flex items-center justify-center text-neon-purple group-hover:bg-neon-purple/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-2">
                  {item.description}
                </p>

                <p className="text-xs text-neon-teal mb-4">{item.fileSize}</p>

                <Button
                  className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white font-semibold glow-purple transition-all duration-300"
                  onClick={() => handleDownload(item.downloadUrl, item.title)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card/20 border border-border/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Usage Guidelines
            </h3>
            <p className="text-muted-foreground text-sm">
              These materials are provided exclusively for promotional and media
              purposes. Please credit "Alexx Zander Johnson" when using any
              assets. For licensing or commercial use inquiries, please contact
              our booking team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
