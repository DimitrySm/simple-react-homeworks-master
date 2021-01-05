import React from "react";
import s from "./Message.module.css";

type messageDataType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: messageDataType) {
  return (
    <div className={s.bg}>
      <div>
        <img className={s.avatar} src={props.avatar} alt="" />
      </div>
      <div className={s.message}>
        <h2>{props.name}</h2>
        <p>{props.message}</p>
        <span>{props.time}</span>
      </div>
    </div>
  );
}

export default Message;
