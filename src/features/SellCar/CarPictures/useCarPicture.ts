import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { setSellImages } from "../sellCarSlice";
import { useEffect } from "react";
import { sellCarSelector } from "../sellCarSelector";

export const useCarPicture = () => {
  const dispatch = useAppDispatch();
  const {
    car: { src },
  } = useSelector(sellCarSelector);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(e.target.files || []);
    const newImages: string[] = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        newImages.push(reader.result as string);
        dispatch(setSellImages([...src, ...newImages]));
      };

      reader.readAsDataURL(file);
    });
  };

  const onImageDelete: (index: number) => void = (index: number) => {
    dispatch(setSellImages(src.filter((_, i) => i !== index)));
  };

  useEffect(() => {
    dispatch(setSellImages(src));
  }, [src, dispatch]);
  console.log(src);

  return {
    images: src,
    onImageDelete,
    uploadImage,
  };
};
