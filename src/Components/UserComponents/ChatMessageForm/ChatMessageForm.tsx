import { ChangeEvent, FormEvent } from "react";
import "./chatMessageForm.scss";

import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
interface ChatMessageFormProps {
  text: string;
  image: string | null;
  onSubmit: (e: FormEvent) => void;
  onImageSelect: (event: ChangeEvent<HTMLInputElement>) => void;
  onSetText: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ChatMessageForm = ({
  text,
  image,
  onSubmit,
  onImageSelect,
  onSetText,
}: ChatMessageFormProps) => {
  return (
    <form name="message" onSubmit={onSubmit} className="message_form">
      <label htmlFor="image_select" className="image_select">
        {!image && <AddPhotoAlternateRoundedIcon sx={{ fontSize: 40 }} />}
        <input type="file" id="image_select" onChange={onImageSelect} />
        {image && <img src={image} alt={text} width={100} />}
      </label>

      <input
        type="text"
        className="text_input"
        value={text}
        onChange={onSetText}
        required={!image}
      />
    </form>
  );
};
