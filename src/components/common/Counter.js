import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Counter({ from, to }) {
  const number = useRef();

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 3,
      onUpdate(value) {
        number.current.textContent = Math.floor(value.toFixed(1));
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <span ref={number} />;
}
