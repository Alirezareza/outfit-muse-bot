import { ClothingItem } from "@/types/wardrobe";
import { ClothingCard } from "./ClothingCard";
import { Badge } from "@/components/ui/badge";

interface WardrobeGridProps {
  items: ClothingItem[];
  selectedItems?: ClothingItem[];
  onItemSelect?: (item: ClothingItem) => void;
  title?: string;
}

export function WardrobeGrid({ items, selectedItems = [], onItemSelect, title }: WardrobeGridProps) {
  const categories = ['all', 'tops', 'bottoms', 'outerwear', 'shoes', 'accessories'];
  
  return (
    <div className="space-y-6">
      {title && (
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Filter:</span>
            <div className="flex gap-1">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-accent capitalize"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((item) => (
          <ClothingCard
            key={item.id}
            item={item}
            onSelect={onItemSelect}
            isSelected={selectedItems.some(selected => selected.id === item.id)}
          />
        ))}
      </div>
    </div>
  );
}