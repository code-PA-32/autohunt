import "./chat.scss";
import { Avatar, Badge } from "@mui/material";
import { Chat as ChatInterface } from "types/chat";
import { Link } from "react-router-dom";
import { toHost } from "utils";
import MailIcon from "@mui/icons-material/Mail";
interface ChatProps {
  chats: ChatInterface[];
}

export const Chat = ({ chats }: ChatProps) => {
  if (chats.length === 0) {
    return <div className="no_chats">You have no chats yet.</div>;
  }
  return (
    <div className="chat">
      {chats.map((c) => (
        <Link to={`/user/messages/${c.id}`} className="chat_link" key={c.id}>
          {c.unreadMessages !== 0 && (
            <Badge
              badgeContent={c.unreadMessages}
              className="new_messages"
              color="secondary"
            >
              <MailIcon color="action" fontSize="small" />
            </Badge>
          )}
          <Avatar
            src={toHost(c.image)}
            alt={c.title}
            sx={{ width: 90, height: 90 }}
          />
          <span>{c.title}</span>
          <span>{c.subject}</span>
        </Link>
      ))}
    </div>
  );
};
