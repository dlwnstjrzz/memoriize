"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function GridItems() {
  const [imageList, setImageList] = useState([]);
  const [open, setOpen] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setImageList([
      "/instagram.png",
      "https://6ce71b59dc027617.demo.carrd.co/assets/images/gallery01/f260dd57.jpg?v=3d98334b",
      "https://6ce71b59dc027617.demo.carrd.co/assets/images/gallery01/749fd367.jpg?v=3d98334b",
      "https://6ce71b59dc027617.demo.carrd.co/assets/images/gallery01/749fd367.jpg?v=3d98334b",
      "https://6ce71b59dc027617.demo.carrd.co/assets/images/gallery01/749fd367.jpg?v=3d98334b",
      "https://6ce71b59dc027617.demo.carrd.co/assets/images/gallery01/f260dd57.jpg?v=3d98334b",
      "https://6ce71b59dc027617.demo.carrd.co/assets/images/gallery01/f260dd57.jpg?v=3d98334b",
      "https://6ce71b59dc027617.demo.carrd.co/assets/images/gallery01/749fd367.jpg?v=3d98334b",
      "https://6ce71b59dc027617.demo.carrd.co/assets/images/gallery01/749fd367.jpg?v=3d98334b",
    ]);
  }, []);

  useEffect(() => {
    if (open) {
      // 선택한 이미지를 기준으로 리스트를 재정렬
      const reorderedImages = [
        ...imageList.slice(selectedImageIndex),
        ...imageList.slice(0, selectedImageIndex),
      ];
      setCarouselImages(reorderedImages);
    }
  }, [open, selectedImageIndex, imageList]);

  const openDialogWithImage = (index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  return (
    <div className="w-full px-8 grid grid-cols-3 gap-1">
      {imageList.map((image, index) => (
        <ImageCard
          key={index}
          url={image}
          setDialogOpen={() => openDialogWithImage(index)}
        />
      ))}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-transparent border-transparent align-center">
          <Carousel orientation="vertical" className="w-full">
            <CarouselContent className="max-h-[454px]">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="pt-1">
                  <div className="p-4">
                    <img className="object-contain" src={image} width={500} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ImageCard({ url, setDialogOpen }) {
  return (
    <Image
      onClick={setDialogOpen}
      src={url}
      alt="template"
      layout="responsive"
      width={500}
      height={300}
    />
  );
}
