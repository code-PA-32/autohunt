import { toHost } from "utils";
import { Message as MessageType } from "types/chat";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import "./chat.scss";
import { useEffect, useRef } from "react";
interface MessageProps {
  messages: MessageType[];
  userId: string;
}
export const Message = ({ messages, userId }: MessageProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="messages_list" ref={divRef}>
      {messages.map((m) => (
        <div
          className={
            userId === m.senderId
              ? "message_right single_message"
              : "message_left single_message"
          }
          key={m.id}
        >
          <div className="inner">
            {m.text}
            {m.textImage && <img src={toHost(m.textImage)} alt={m.text} />}
            <div className="message_info">
              <span className="time">{m.timestamp}</span>
              <span className="checkmark">
                {userId === m.senderId && (
                  <>
                    {m.status === false ? (
                      <CheckRoundedIcon sx={{ fontSize: "12px" }} />
                    ) : (
                      <DoneAllRoundedIcon
                        sx={{ color: "blue", fontSize: "12px" }}
                      />
                    )}
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
