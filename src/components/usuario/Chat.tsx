import { useState } from "react";
import { io } from "socket.io-client";
export const HOST = import.meta.env.PUBLIC_HOST_API;

const socket = io(HOST, {});

const Chat = () => {
    const [message, setMessage] = useState<string>('')
    const handleMessage = async () => {
        console.log(message)
        socket.emit('chat_massage', {
            usuario: socket.id,
            mensaje: message
        })
    }

    return (
        <div className="border border-slate-50 bg-white p-4 rounded-md min-h-[300px]">
            <div className=" w-full text-white p-4 mb-2 rounded-md min-h-[200px] border-gray-600 border">
                <p>{message}</p>
            </div>
            <div className="w-full">
                <form className="flex w-full gap-1 items-center">
                    <input
                        type="text"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></input>
                    <button type="submit" className="border px-3 py-2.5 bg-blue-600 text-white rounded-md text-sm" onClick={handleMessage}>
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
