import { useState } from "react";
import { ClothingItem, sampleClothingItems } from "@/types/wardrobe";
import { WardrobeHeader } from "@/components/WardrobeHeader";
import { HeroSection } from "@/components/HeroSection";
import { WardrobeGrid } from "@/components/WardrobeGrid";
import { OutfitPairing } from "@/components/OutfitPairing";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedItems, setSelectedItems] = useState<ClothingItem[]>([]);
  const [showWardrobe, setShowWardrobe] = useState(false);
  const { toast } = useToast();

  const handleItemSelect = (item: ClothingItem) => {
    setSelectedItems(prev => {
      const isSelected = prev.some(selected => selected.id === item.id);
      if (isSelected) {
        return prev.filter(selected => selected.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleGetStarted = () => {
    setShowWardrobe(true);
  };

  const handleAddClothes = () => {
    toast({
      title: "Add Clothes",
      description: "Manual entry and AI recognition coming soon! For now, enjoy the sample wardrobe.",
    });
  };

  const handleScanBarcode = () => {
    toast({
      title: "Barcode Scanner",
      description: "Barcode scanning feature coming soon! This will let you instantly add clothes by scanning tags.",
    });
  };

  const handleAIAnalysis = () => {
    toast({
      title: "AI Styling",
      description: "Advanced AI styling recommendations coming soon! Get personalized outfit suggestions.",
    });
  };

  if (!showWardrobe) {
    return (
      <div className="min-h-screen bg-background">
        <HeroSection onGetStarted={handleGetStarted} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <WardrobeHeader 
        onAddClothes={handleAddClothes}
        onScanBarcode={handleScanBarcode}
        onAIAnalysis={handleAIAnalysis}
      />
      
      <main className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <WardrobeGrid 
              items={sampleClothingItems}
              selectedItems={selectedItems}
              onItemSelect={handleItemSelect}
              title="My Wardrobe"
            />
          </div>
          
          <div className="lg:col-span-1">
            <OutfitPairing 
              selectedItems={selectedItems}
              onClearSelection={() => setSelectedItems([])}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
