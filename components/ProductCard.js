import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProductCard({ model }) {
  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full">
      <CardHeader className="pb-0">
        <CardTitle className="text-sm truncate">{model.title}</CardTitle> {/* Reduced to text-sm */}
        <CardDescription className="text-xs text-black font-semibold"> {/* Further reduced to text-xs */}
          {model.price}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-2 pt-1">
        <div className="relative w-full aspect-square mb-4">
          <Image
            src={model.img}
            alt={model.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-sm"
          />
        </div>
        <p className="text-[10px] text-gray-600 line-clamp-3">{model.description}</p> {/* Set to text-[10px] */}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-1/2 text-[10px] font-bold">Add to Cart</Button> {/* Reduced to text-[10px] */}
        <Button className="w-1/2 text-[10px] font-bold">Buy</Button> {/* Reduced to text-[10px] */}
      </CardFooter>
    </Card>
  );
}
