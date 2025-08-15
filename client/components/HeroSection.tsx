import { Button } from "./ui/button";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/11/16/140035-771117834_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cinematic-black/70 via-cinematic-black/50 to-cinematic-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Immersive Soundscapes.</span>
          <br />
          <span className="text-foreground">Global Energy.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Belgian-born. Barcelona-based.
          <br />
          Pushing underground electronic music forward.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-neon-purple hover:bg-neon-purple/80 text-white font-semibold px-8 py-4 text-lg glow-purple transition-all duration-300"
            onClick={() =>
              window.open("https://soundcloud.com/alexx_zander", "_blank")
            }
          >
            Listen on SoundCloud
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-neon-teal text-neon-teal hover:bg-neon-teal hover:text-black font-semibold px-8 py-4 text-lg glow-teal transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Book Alexx
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
