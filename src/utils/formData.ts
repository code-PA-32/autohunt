export const dataURLtoFile = (dataUrl: string, filename: string) => {
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
