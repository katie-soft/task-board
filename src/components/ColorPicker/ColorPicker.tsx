import { useState } from "react";
import { Color } from "../../data/types";
import cn from "classnames";
import styles from "./ColorPicker.module.css";
import Box from "@mui/material/Box";

const colors: Color[] = ["blue", "green", "pink", "white", "yellow"];

export const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState<Color | null>("white");

  const handleColorSelect = (newColor: Color | null) => {
    setSelectedColor(newColor);
  };

  return (
    <>
      <span>{selectedColor}</span>
      <Box display="flex" gap={2}>
        {colors.map((color) => (
          <button
            key={color}
            className={cn(
              styles.circle,
              styles[color],
              color === selectedColor && styles.selected,
            )}
            onClick={() => handleColorSelect(color)}
          ></button>
        ))}
      </Box>
    </>
  );
};
