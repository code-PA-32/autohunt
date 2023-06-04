import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

interface MessagePopupProps {
  message: string;
  severity: "error" | "success";
  open: boolean;
  setClose: () => void;
}

export const MessagePopup = ({
  message,
  severity,
  open,
  setClose,
}: MessagePopupProps) => {
  return (
    <Box
      sx={{
        width: "inherit",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
    >
      <Collapse in={open}>
        <Alert
          sx={{ display: "flex", alignItems: "center" }}
          severity={severity}
          action={
            <IconButton color="inherit" size="small" onClick={setClose}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
};
