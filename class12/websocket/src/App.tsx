import { useEffect, useRef, useState } from "react";

export default function App() {
  const [socket, setSocket] = useState();
  //@ts-ignore
  const inputRef = useRef();

  function sendMessage() {
    if (!socket) {
      return;
    }
    //@ts-ignore
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    //@ts-ignore
    setSocket(ws);
    ws.onmessage = (ev) => {
      console.log("message : ", ev.data);
      alert(ev.data);
    };

    // ws.onerror = () => {

    // }

    // ws.close = () => {

    // }

    // ws.onopen = () => {

    // }
  }, []);

  return (
    <div className="flex justify-center items-center gap-2">
      <input
        //@ts-ignore
        ref={inputRef}
        className="border px-1 py-1"
        type="text"
        placeholder="Message..."
      />
      <button
        className="border px-2 py-1 cursor-pointer bg-blue-400"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}
