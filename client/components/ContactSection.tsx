import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, ExternalLink } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3Xivr0pcXK23TZxxqyd8nh?si=0L9wV_jGSQKRgWjqk4l-ng",
    icon: "🎵",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/alexx_zander",
    icon: "🎧",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/alexxzander.johnson/",
    icon: "📷",
  },
  {
    name: "Beatport",
    url: "https://www.beatport.com/artist/alexx-zander-johnson/1107261",
    icon: "🎶",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring underground energy to your event? Let's create
            something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/30 border-border/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Mail className="w-5 h-5 text-neon-purple" />
                <h3 className="text-xl font-bold text-foreground">
                  Booking & Inquiries
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-input/50 border-border/30 focus:border-neon-purple"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-input/50 border-border/30 focus:border-neon-purple"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="mt-1 bg-input/50 border-border/30 focus:border-neon-purple resize-none"
                    placeholder="Tell us about your event, date, venue, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white font-semibold py-3 glow-purple transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <Card className="bg-card/30 border-border/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Follow the Journey
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      className="justify-start border-border/30 hover:border-neon-teal/50 hover:bg-neon-teal/10 text-foreground"
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <span className="mr-3 text-lg">{social.icon}</span>
                      {social.name}
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 border-border/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Based in Barcelona
                </h3>
                <p className="text-muted-foreground mb-4">
                  Available for bookings worldwide. From intimate club nights to
                  festival main stages, let's create an unforgettable sonic
                  experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neon-teal/10 text-neon-teal text-sm rounded-full">
                    Minimal
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/10 text-neon-purple text-sm rounded-full">
                    Techno
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/10 text-neon-purple text-sm rounded-full">
                    Progressive House
                  </span>
                  <span className="px-3 py-1 bg-neon-teal/10 text-neon-teal text-sm rounded-full">
                    Underground
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
