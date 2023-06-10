import { useState } from "react";

import Spinner from "Components/Spinner/Spinners";
import { toHost } from "utils";

interface ImageWithSpinnerProps {
  src: string;
  alt: string;
  height?: number;
}

export const ImageWithSpinner = ({
  src,
  alt,
  height,
}: ImageWithSpinnerProps) => {
  const [loading, setLoading] = useState(true);

  const handleSetLoading = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Spinner />}
      <img
        src={toHost(src)}
        alt={alt}
        onLoad={handleSetLoading}
        style={{
          display: loading ? "none" : "block",
          width: "100%",
          height: height,
        }}
      />
    </>
  );
};
