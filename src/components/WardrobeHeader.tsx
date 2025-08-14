import { Button } from "@/components/ui/button";
import { PlusCircle, Scan, Sparkles } from "lucide-react";

interface WardrobeHeaderProps {
  onAddClothes: () => void;
  onScanBarcode: () => void;
  onAIAnalysis: () => void;
}

export function WardrobeHeader({ onAddClothes, onScanBarcode, onAIAnalysis }: WardrobeHeaderProps) {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Digital Wardrobe
            </h1>
            <p className="text-muted-foreground mt-1">
              Organize, pair, and discover your perfect style
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="fashion" size="sm" onClick={onAddClothes}>
              <PlusCircle className="w-4 h-4" />
              Add Clothes
            </Button>
            <Button variant="outline" size="sm" onClick={onScanBarcode}>
              <Scan className="w-4 h-4" />
              Scan Barcode
            </Button>
            <Button variant="hero" size="sm" onClick={onAIAnalysis}>
              <Sparkles className="w-4 h-4" />
              AI Styling
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}