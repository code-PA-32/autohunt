import { SpeedDial } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useEffect, useState } from "react";

export const Arrow = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SpeedDial
      onClick={() => window.scrollTo(0, 0)}
      ariaLabel="SpeedDial"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        opacity: visible ? 1 : 0,
        zIndex: 2060
      }}
      icon={<KeyboardArrowUpRoundedIcon />}
    ></SpeedDial>
  );
};
