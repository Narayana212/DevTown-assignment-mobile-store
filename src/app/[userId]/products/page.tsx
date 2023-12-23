"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductReel from "@/components/product-reel";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { debounce } from "lodash";
import { Filter } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  const [value, setValue] = useState("");

  const [label, setLabel] = useState("both");

  const debouncedOnChange = debounce((searchTerm: string) => {
  }, 500);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    debouncedOnChange(searchTerm);
    setValue(searchTerm);
  };
  const [price, setPrice] = useState<number[]>([1500]);

  return (
    <MaxWidthWrapper>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-6">
        Browse Mobile Phones
      </h1>
      <div className="flex justify-between w-full items-center">
        <Input
          className="w-[60%] mt-3"
          placeholder="Browse phones..."
          value={value}
          onChange={handleInputChange}
        />
        <div>
          <Sheet>
            <SheetTrigger>
              <Filter
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 text-gray-700 group-hover:text-gray-900"
              />
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
              <div className="px-3 w-[80%] mt-10 flex flex-col items-start  gap-3">
                <h1 className="text-sm font-semibold text-gray-500">
                  Price: {price[0]}{" "}
                </h1>
                <Slider
                  max={1500}
                  step={10}
                  defaultValue={price}
                  onValueChange={(value: number[]) => setPrice(value)}
                />
              </div>
              <div className="w-[80%] px-3 mt-5">
                <p>{label}</p>
                <RadioGroup
                  onValueChange={(value) => setLabel(value)}
                  defaultValue={label}
                >
                  <h1 className=" text-sm font-semibold text-gray-500">OS </h1>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Android" id="r1" />
                    <Label htmlFor="r1">Android </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="iOS" id="r2" />
                    <Label htmlFor="r2">iOS</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="r3" />
                    <Label htmlFor="r3">Both</Label>
                  </div>
                </RadioGroup>
              </div>
             
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <ProductReel
        title={""}
        query={{
          limit: 40,
          search: value,
          label,
          price:price[0],
          order:1
        }}
      />
    </MaxWidthWrapper>
  );
};

export default ProductsPage;
