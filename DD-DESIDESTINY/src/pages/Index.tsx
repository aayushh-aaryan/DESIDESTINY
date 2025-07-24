import { Button } from "@/components/ui/enhanced-button";
import CountdownTimer from "@/components/CountdownTimer";
import { Heart, ArrowRight, Shield, Users, Gamepad2, Languages, Gift, Calendar, Book, Building, MessageCircle, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import datingPhoneMockup from "@/assets/dating-phone-mockup.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEarlyAccess = () => {
    window.open('https://forms.gle/xQCsqyv3e8EMgmpK8', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent">DESI DESTINY</span>
          </div>
          <Button variant="cta" size="lg" onClick={handleEarlyAccess}>
            Get Early Access
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in bg-gradient-brand bg-clip-text text-transparent animate-pulse-glow whitespace-nowrap">
                DESI DESTINY
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg animate-slide-up">
                Connect with like-minded people through our revolutionary matching algorithm. 
                Real connections, meaningful relationships.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Button 
                  variant="brand" 
                  size="xl" 
                  className="group"
                  onClick={handleEarlyAccess}
                >
                  Join Beta Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => scrollToSection('problems')}
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative mx-auto max-w-md">
                <img 
                  src={datingPhoneMockup} 
                  alt="DesiDestiny Dating App" 
                  className="w-full h-auto rounded-3xl shadow-2xl shadow-brand-pink/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Launch Timer */}
      <section className="py-16 px-6 bg-gradient-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in">
            App Launch Countdown
          </h2>
          <p className="text-muted-foreground mb-12 text-lg animate-slide-up">
            Get ready for the future of meaningful dating
          </p>
          <CountdownTimer />
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 animate-fade-in">
            What Are We Solving?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-16 animate-slide-up">
            Most dating apps in India today either focus only on casual flings or are too traditional 
            like matrimony sites. That leaves out a large group of people who want real, meaningful 
            relationships with trust, safety, and shared values.
          </p>

          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-8 text-center animate-fade-in">
              Problems we see today:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                "Too many fake profiles and unsafe interactions.",
                "No offline opportunities to meet people safely.",
                "Uncertainty on how to approach someone first.",
                "Difficulty in deciding a first date or meeting place.",
                "Concerns about gifting without revealing personal address.",
                "Navigating cultural, religious, and family expectations."
              ].map((problem, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-brand-pink/50 transition-all duration-300 animate-slide-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 px-6 bg-gradient-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 animate-fade-in">
            Our Solution — <span className="bg-gradient-brand bg-clip-text text-transparent">DESI DESTINY</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16 animate-slide-up">
            We are building a relationship app that is smart, safe, and culturally aware.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="h-8 w-8" />,
                title: "AI Matching",
                description: "We study behaviour, interests, and future goals to find your perfect match."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Verified Users",
                description: "Photo verification and ID checks (Aadhar or PAN) for a safe community."
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "Real Meet-ups",
                description: "Curated events at trusted venues to connect with people offline."
              },
              {
                icon: <Languages className="h-8 w-8" />,
                title: "Multi-Language Support",
                description: "Our app supports multiple Indian languages for seamless communication."
              },
              {
                icon: <Gift className="h-8 w-8" />,
                title: "Gifting Solutions",
                description: "Wondering what to gift first? We provide thoughtful suggestions."
              },
              {
                icon: <Gamepad2 className="h-8 w-8" />,
                title: "Engaging Games",
                description: "Late-night games to engage with each other and connect on a deeper level."
              },
              {
                icon: <Book className="h-8 w-8" />,
                title: "In-App Education",
                description: "Tips on dating, safety, and personal growth to guide your journey."
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "Club Entries",
                description: "Exclusive access to partner clubs and social venues for safe meetups."
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "First Date Preferences",
                description: "Plan your first date based on both partners' preferences for a perfect start."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-8 bg-card rounded-2xl border border-border hover:border-brand-pink/50 transition-all duration-300 hover:shadow-brand animate-slide-up group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-brand-pink mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 animate-fade-in">
            Ready to Find Love?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
            Join thousands of singles who are already finding meaningful connections.
            <br />
            Be among the first to experience the future of dating.
          </p>

          <Button 
            variant="brand" 
            size="xl" 
            className="mb-4 animate-pulse-glow"
            onClick={handleEarlyAccess}
          >
            Get Early Beta Access <Heart className="ml-2" />
          </Button>
          
          <p className="text-muted-foreground">
            Limited spots available • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-dark border-t border-border">
        <div className="container mx-auto">
          {/* Brand and Social Media */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-gradient-brand p-3 rounded-2xl">
                <span className="text-white font-bold text-3xl">DD</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent">DESI DESTINY</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Connecting hearts through meaningful relationships.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mb-12">
              <a href="#" className="p-3 bg-card rounded-full border border-border hover:border-brand-pink/50 transition-all duration-300 hover:scale-110 group">
                <Instagram className="h-6 w-6 text-muted-foreground group-hover:text-brand-pink transition-colors" />
              </a>
              <a href="#" className="p-3 bg-card rounded-full border border-border hover:border-brand-pink/50 transition-all duration-300 hover:scale-110 group">
                <Twitter className="h-6 w-6 text-muted-foreground group-hover:text-brand-pink transition-colors" />
              </a>
              <a href="#" className="p-3 bg-card rounded-full border border-border hover:border-brand-pink/50 transition-all duration-300 hover:scale-110 group">
                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-brand-pink transition-colors" />
              </a>
              <a href="#" className="p-3 bg-card rounded-full border border-border hover:border-brand-pink/50 transition-all duration-300 hover:scale-110 group">
                <Mail className="h-6 w-6 text-muted-foreground group-hover:text-brand-pink transition-colors" />
              </a>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center border-t border-border pt-12 mb-8">
            <h4 className="text-2xl font-bold mb-8 bg-gradient-brand bg-clip-text text-transparent">Meet Our Team</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <div className="text-center group">
                <div className="bg-gradient-brand p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">AA</span>
                </div>
                <div className="font-bold text-lg">AYUSH ARYAN</div>
                <div className="text-brand-pink font-medium">Founder</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-brand p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">AC</span>
                </div>
                <div className="font-bold text-lg">AAYUSH CHOUNKAR</div>
                <div className="text-brand-pink font-medium">Co-Founder</div>
              </div>
            </div>
          </div>

          <div className="text-center border-t border-border pt-8">
            <p className="text-brand-yellow mb-2 text-lg">Come be a part of it. 💛</p>
            <p className="font-bold text-xl bg-gradient-brand bg-clip-text text-transparent">
              COME FALL IN LOVE WITH US.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;