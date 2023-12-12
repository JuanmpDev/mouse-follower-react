import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <main style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {enabled && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.3) 0%, rgba(0,0,255,0.5) 20%, #000 100%)`,
            backgroundColor: "#fff",
            transition: "background 0.1s",
          }}
        ></div>
      )}
      <button
        onClick={() => setEnable(!enabled)}
        style={{ position: "absolute", top: "20px", left: "20px" }}
      >
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}

export default App;
