export function toHost(images: string[]): string[];
export function toHost(image: string): string;
export function toHost(imagesOrImage: string | string[]): string | string[] {
  if (Array.isArray(imagesOrImage)) {
    return imagesOrImage.map((image) => addPrefix(image));
  } else {
    return addPrefix(imagesOrImage);
  }
}

function addPrefix(image: string): string {
  if (!image.startsWith("http")) {
    return "http://localhost:3030/" + image;
  }
  return image;
}
