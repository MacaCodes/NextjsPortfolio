"use client";

import { useEffect } from "react";
import { enable } from "cursor-flashlight";

export default function Flashlight() {
  useEffect(() => {
    // Enable flashlight with high opacity for brightness
    enable({ size: "500vmax", opacity: 0.01 });


  }, []);

  return null; // No JSX needed for a pure effect component
}

