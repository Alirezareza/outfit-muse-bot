import { ClothingItem, sampleClothingItems } from "@/types/wardrobe";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Share2 } from "lucide-react";
import { ClothingCard } from "./ClothingCard";

interface OutfitPairingProps {
  selectedItems: ClothingItem[];
  onClearSelection: () => void;
}

export function OutfitPairing({ selectedItems, onClearSelection }: OutfitPairingProps) {
  // Generate suggested pairings based on selected items
  const suggestedItems = sampleClothingItems.filter(
    item => !selectedItems.some(selected => selected.id === item.id)
  ).slice(0, 3);

  const outfitSuggestions = [
    {
      id: 1,
      name: "Casual Chic",
      occasion: "Weekend Brunch",
      items: [sampleClothingItems[0], sampleClothingItems[1], sampleClothingItems[3]],
      confidence: 95
    },
    {
      id: 2,
      name: "Edgy Evening",
      occasion: "Night Out",
      items: [sampleClothingItems[0], sampleClothingItems[1], sampleClothingItems[2]],
      confidence: 88
    }
  ];

  if (selectedItems.length === 0) {
    return (
      <Card className="bg-gradient-card border-border">
        <CardContent className="py-12 text-center">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Outfit Pairing</h3>
          <p className="text-muted-foreground">
            Select items from your wardrobe to see AI-powered outfit suggestions
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Current Selection
            </CardTitle>
            <Button variant="outline" size="sm" onClick={onClearSelection}>
              Clear All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {selectedItems.map((item) => (
              <div key={item.id} className="text-center">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <p className="text-xs font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Suggested Pairings */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Suggested Pairings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {suggestedItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-3 rounded-lg border border-border bg-background/50">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                  <div className="flex gap-1 mt-1">
                    {item.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Add to Outfit
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Outfit Suggestions */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Complete Outfit Ideas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {outfitSuggestions.map((outfit) => (
              <div key={outfit.id} className="p-4 rounded-lg border border-border bg-background/50">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">{outfit.name}</h4>
                    <p className="text-sm text-muted-foreground">{outfit.occasion}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {outfit.confidence}% Match
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {outfit.items.map((item) => (
                    <img 
                      key={item.id}
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  ))}
                </div>
                
                <Button variant="fashion" className="w-full mt-3">
                  Try This Outfit
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}