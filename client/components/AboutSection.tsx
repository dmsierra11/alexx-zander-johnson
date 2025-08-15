export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Alexx</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portrait Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-neon-purple/20 to-neon-teal/20 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=face" 
                  alt="Alexx Zander Johnson portrait"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Floating accent elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-neon-teal/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="prose prose-lg text-foreground">
              <p className="text-xl leading-relaxed mb-6">
                <span className="text-neon-purple font-semibold">Alexx Zander Johnson</span> began 
                DJing in <span className="text-neon-teal">Ghent, Belgium</span>, and rose to 
                prominence after winning a DJ contest at Decadance, one of Europe's most 
                respected electronic music events.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Now based in <span className="text-neon-teal font-semibold">Barcelona</span>, 
                Alexx has established himself as a driving force in the underground electronic 
                scene, blending deep house, minimal, and techno into immersive, high-energy 
                sets that captivate dancefloors across Europe.
              </p>
              
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                As the founder of <span className="text-neon-purple font-semibold">Railroad Recordings</span> and 
                resident of <span className="text-neon-purple font-semibold">Phasefour Ghent</span> on 
                Urgent.fm, Alexx continues to push the boundaries of underground electronic 
                music, creating sonic journeys that transport listeners to new dimensions.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card/30 border border-border/20 rounded-lg p-4">
                <h4 className="font-semibold text-neon-purple mb-2">Label</h4>
                <p className="text-muted-foreground">Railroad Recordings</p>
              </div>
              <div className="bg-card/30 border border-border/20 rounded-lg p-4">
                <h4 className="font-semibold text-neon-teal mb-2">Radio</h4>
                <p className="text-muted-foreground">Phasefour Ghent</p>
              </div>
              <div className="bg-card/30 border border-border/20 rounded-lg p-4">
                <h4 className="font-semibold text-neon-purple mb-2">Origin</h4>
                <p className="text-muted-foreground">Ghent, Belgium</p>
              </div>
              <div className="bg-card/30 border border-border/20 rounded-lg p-4">
                <h4 className="font-semibold text-neon-teal mb-2">Based</h4>
                <p className="text-muted-foreground">Barcelona, Spain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
