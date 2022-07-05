import React, { useState } from "react";
import { ChromePicker } from "react-color";
import reactCSS from "reactcss";

function ColorPicker() {
  // const [background, setBackground] = useState();

  // const handleChangeComplete = (color) => {
  //   setBackground(color.hex);
  // };
  // const styles = reactCSS({
  //   default: {
  //     color: {
  //       width: "40px",
  //       height: "15px",
  //       borderRadius: "3px",
  //       background: colorPalette.map((color) => color.color.value),
  //     },
  //     popover: {
  //       position: "absolute",
  //       zIndex: "3",
  //     },
  //     cover: {
  //       position: "fixed",
  //       top: "0px",
  //       right: "0px",
  //       bottom: "0px",
  //       left: "0px",
  //     },
  //     swatch: {
  //       padding: "6px",
  //       background: "#ffffff",
  //       borderRadius: "2px",
  //       cursor: "pointer",
  //       display: "inline-block",
  //       boxShadow: "0 0 0 1px rgba(0,0,0,.2)",
  //     },
  //   },
  // });

  return (
    <div>
      <ChromePicker
      // color={background}
      // onChangeComplete={handleChangeComplete}
      />
    </div>
  );
}

export default ColorPicker;
