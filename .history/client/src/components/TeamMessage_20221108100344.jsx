import React from "react";
import { useChatContext, useMessageContext } from "stream-chat-react";

const TeamMessage = () => {
  const { handleOpenThread, message } = useMessageContext();

  return (
    <useChatContext
      message={{ ...message, user: {} }}
      // handleOpenThread={}
    />
  );
};

export default TeamMessage;
