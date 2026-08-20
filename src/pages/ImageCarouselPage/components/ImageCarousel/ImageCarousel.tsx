import { useState, type FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./components/Button";
import NavBar from "./components/NavBar";

type Image = {
  src: string;
  alt: string;
};

interface Props {
  images: Image[];
}

const ImageCarousel: FC<Props> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);

  const handleClickLeft = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleClickRignt = () => setIndex((prev) => (prev + 1) % images.length);
  const handleClickByIndex = (i: number) => setIndex(i);

  return (
    <div className="relative flex w-fit items-center justify-center">
      <div className="h-100 w-150 overflow-hidden">
        <div
          className="flex duration-200"
          style={{ transform: `translateX(-${600 * index}px)` }}
        >
          {images.map((image) => (
            <img src={image.src} alt={image.alt} className="h-100 w-150" />
          ))}
        </div>
      </div>
      <Button
        onClick={handleClickLeft}
        className="absolute top-1/2 left-2 -translate-y-1/2"
      >
        <ChevronLeft />
      </Button>
      <Button
        onClick={handleClickRignt}
        className="absolute top-1/2 right-2 -translate-y-1/2"
      >
        <ChevronRight />
      </Button>
      <NavBar
        className="absolute bottom-8"
        currentIndex={index}
        count={images.length}
        onDotClick={handleClickByIndex}
      />
    </div>
  );
};

export default ImageCarousel;
