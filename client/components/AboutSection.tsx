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
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb483dd511682401f9f00211e632d2fcf%2F460ffe75ae27439c9a433fa4245e9dc8?format=webp&width=800"
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
                From the industrial heart of <span className="text-neon-teal font-semibold">Ghent, Belgium</span>,
                to the vibrant electronic scene of <span className="text-neon-purple font-semibold">Barcelona</span>,
                <span className="text-gradient font-semibold"> Alexx Zander Johnson's</span> journey
                represents the evolution of underground electronic music.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                His breakthrough came after winning a DJ contest at <span className="text-neon-teal font-semibold">Decadance</span>,
                one of Europe's most respected electronic music events. This pivotal moment launched a career
                that would see him become a resident at <span className="text-neon-purple font-semibold">Phasefour Ghent </span>
                on Urgent.fm, where he honed his signature sound.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                The move to Barcelona marked a new chapter. Here, Alexx founded
                <span className="text-neon-purple font-semibold"> Railroad Recordings</span>,
                an independent label dedicated to showcasing underground electronic music,
                and launched <span className="text-neon-teal font-semibold">Railroad Sessions</span>,
                his monthly radio show on DI.FM that has become a destination for deep, minimal, and techno enthusiasts worldwide.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                Today, Alexx continues to push the boundaries of underground electronic music,
                creating immersive sonic experiences that bridge the gap between intimate club moments
                and transcendent dancefloor journeys.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card/30 border border-border/20 rounded-lg p-4">
                <h4 className="font-semibold text-neon-purple mb-2">Founded</h4>
                <p className="text-muted-foreground">Railroad Recordings</p>
              </div>
              <div className="bg-card/30 border border-border/20 rounded-lg p-4">
                <h4 className="font-semibold text-neon-teal mb-2">Radio Show</h4>
                <p className="text-muted-foreground">Railroad Sessions on DI.FM</p>
              </div>
              <div className="bg-card/30 border border-border/20 rounded-lg p-4">
                <h4 className="font-semibold text-neon-purple mb-2">Resident</h4>
                <p className="text-muted-foreground">Phasefour Ghent</p>
              </div>
              <div className="bg-card/30 border border-border/20 rounded-lg p-4">
                <h4 className="font-semibold text-neon-teal mb-2">Journey</h4>
                <p className="text-muted-foreground">Ghent → Barcelona</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
