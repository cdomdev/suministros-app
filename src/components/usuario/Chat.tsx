import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import type { DatosUsurio } from "@/types/types";
import { Lock } from "../icons/Lock";
import { SendIcon } from "../icons/SendIcon";
import { getMessages } from "@/services/user";

export const HOST = import.meta.env.PUBLIC_HOST_API;
const socket = io(HOST, {});

type Message = {
  usuario: string | undefined;
  mensaje: string;
};

const Chat: React.FC<{ usuario: DatosUsurio }> = ({ usuario }) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messageListRef = useRef<HTMLDivElement>(null);

  let hora = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await getMessages(usuario.id);
      console.log(response)
    };

    fetchMessages();
  }, []);
  const handleMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message.trim()) return;
    let user = usuario?.nombre;
    const newMessage = {
      id: usuario.id,
      usuario: user,
      mensaje: message,
      estado: "enviado",
      hora: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMessage]);
    socket.emit("chat_message", newMessage);
    setMessage("");
  };

  useEffect(() => {
    socket.on("message_response", (messageResponse: Message) => {
      setMessages((prevMessages) => [...prevMessages, messageResponse]);
    });
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
    return () => {
      socket.off("message_response");
    };
  }, [messages]);

  return (
    <div className="border border-slate-50 bg-white p-3 rounded-md h-[600px] flex flex-col justify-between overflow-hidden bg-bg-chat bg-cover bg-no-repeat">
      <div
        ref={messageListRef}
        className="flex-1 flex flex-col-reverse overflow-y-auto gap-2 p-3 rounded-md border-transparent"
      >
        {messages.length === 0 ? (
          <span className="text-center text-xs text-balance text-gray-500 flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="24"
              className="size-4"
              height="24"
              strokeWidth="1"
            >
              <path d="M8 9h8"></path>
              <path d="M8 13h6"></path>
              <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
            </svg>
            Si tienes alguna duda sobre tus compras, escribanos, trataremos de
            resolver tu inquietud lo antes posible.
          </span>
        ) : (
          <ul className="w-full flex flex-col gap-2">
            {messages.length > 0 && (
              <li className="text-center text-gray-500 text-[10px] mb-3 rounded-md py-1 px-2">
                <Lock />
                Los mensajes están cifrados de extremo a extremo, nadie fuera de
                este chat puede leerlos.
              </li>
            )}
            {messages.map((msg, index) => (
              <li
                key={index}
                className={`py-1.5 px-3 text-sm text-gray-700 flex items-center flex-col
              ${msg.usuario === usuario.nombre ? "bg-blue-100 self-start text-left  rounded-r-2xl rounded-bl-3xl  " : "bg-green-100 self-end text-right rounded-l-2xl rounded-br-3xl "}`}
                style={{ maxWidth: "70%" }}
              >
                <span>
                  <strong
                    className={`${
                      msg.usuario === usuario.nombre
                        ? "text-blue-400 text-xs"
                        : "text-green-700 text-xs opacity-30"
                    }`}
                  ></strong>
                  {msg.mensaje}
                </span>
                <span className="text-[8px] block self-end -py-2 font-medium -mt-1">
                  {hora}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="w-full mt-4">
        <form
          className="flex w-full gap-1 items-center"
          onSubmit={handleMessage}
        >
          <input
            type="text"
            id="message"
            value={message}
            placeholder="Escribe tu mensaje..."
            onChange={(e) => setMessage(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-md border border-gray-300 focus:ring-blue-300 focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="submit"
            className="border px-3 py-2.5 bg-blue-600 text-white rounded-md text-sm flex items-center gap-1 font-medium"
          >
            Enviar
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
