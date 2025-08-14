import { ClothingItem } from "@/types/wardrobe";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ClothingCardProps {
  item: ClothingItem;
  onSelect?: (item: ClothingItem) => void;
  isSelected?: boolean;
}

export function ClothingCard({ item, onSelect, isSelected = false }: ClothingCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:shadow-elegant ${
        isSelected ? 'ring-2 ring-primary shadow-glow' : ''
      }`}
      onClick={() => onSelect?.(item)}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="secondary"
              size="icon"
              className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsFavorited(!isFavorited);
              }}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-primary text-primary' : ''}`} />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-sm mb-1 line-clamp-1">{item.name}</h3>
          <p className="text-xs text-muted-foreground mb-2 capitalize">{item.category}</p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {item.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">{item.brand}</span>
            <div className={`w-3 h-3 rounded-full border-2 border-muted-foreground/20`} 
                 style={{ backgroundColor: item.color }} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}