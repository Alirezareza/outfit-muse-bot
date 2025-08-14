import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Scan, Plus } from "lucide-react";
import heroImage from "@/assets/wardrobe-hero.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Digital
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Wardrobe
                </span>
                Awaits
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Add clothes by barcode or AI, instantly see perfect pairings with your existing wardrobe, 
                and discover outfit ideas you never thought possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border">
                <Scan className="w-5 h-5 text-primary" />
                <span>Barcode Scanning</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>AI Recognition</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border">
                <Plus className="w-5 h-5 text-primary" />
                <span>Smart Pairing</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" onClick={onGetStarted}>
                Start Building Your Wardrobe
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="fashion" size="lg">
                See Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Luxury wardrobe"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-background rounded-full p-4 shadow-elegant">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background rounded-full p-4 shadow-elegant">
              <Scan className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}