import React, { useState, ChangeEvent } from "react";

export const TEXT = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const images: string[] = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        const dataUrl = reader.result as string;
        images.push(dataUrl);
        if (images.length === files.length) {
          setSelectedImages((prevSelectedImages) => [
            ...prevSelectedImages,
            ...images,
          ]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleImageDelete = (index: number) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.filter((_, i) => i !== index)
    );
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("carId", "646e37ef1ca97280d1045ab8");
    selectedImages.forEach((image) => {
      const file = dataURLtoFile(image, `${new Date().getTime()}`);
      formData.append("images", file);
    });

    try {
      const response = await fetch(
        "http://localhost:3030/api/cars/update-car",
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload images");
      }

      const data = await response.json();
      console.log(data);

      setSelectedImages([]);
    } catch (error) {
      console.log(error);
    }
  };

  const dataURLtoFile = (dataUrl: string, filename: string) => {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    const extension = mime?.split("/")[1];
    const n = bstr.length;
    const uint8Array = new Uint8Array(n);

    for (let i = 0; i < n; i++) {
      uint8Array[i] = bstr.charCodeAt(i);
    }

    return new File([uint8Array], `${filename}.${extension}`, { type: mime });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        {selectedImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt="Selected" width={100} />
            <button onClick={() => handleImageDelete(index)}>Delete</button>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
