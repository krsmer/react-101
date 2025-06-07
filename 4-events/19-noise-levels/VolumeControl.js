// Noise Levels 🔊
// Codédex

import React, { useState, useEffect } from "react";

export default function VolumeControl() {
  const [volume, setVolume] = useState(50);
  const [status, setStatus] = useState(
    "Use arrow keys ↑ and ↓ to control volume."
  );
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (keyPressed) return;
      setKeyPressed(true);

      if (e.key === "ArrowUp") {
        setVolume((prevVolume) => Math.min(prevVolume + 5, 100));
        setStatus("Turning volume up");
      } else if (e.key === "ArrowDown") {
        setVolume((prevVolume) => Math.max(prevVolume - 5, 0));
        setStatus("Turning volume down");
      }
    }

    function handleKeyUp() {
      setKeyPressed(false);
      setStatus("Use arrow keys ↑ and ↓ to control volume.");
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keyPressed]);

  return (
    <div>
      <h2>Volume Control 🔊</h2>
      <span>Volume: {volume}</span>
      <div id="volume-bar-empty-space">
        <div id="volume-bar" style={{ width: `${volume}%` }}></div>
      </div>
      <div>Status: {status}</div>
    </div>
  );
