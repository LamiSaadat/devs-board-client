import React from "react";
import styled from "styled-components";

function BoardColorPalette({ boardColorPalette }) {
  console.log(boardColorPalette);
  const ColorCard = styled.div`
    width: 8rem;
    height: 8rem;
  `;
  return (
    <div>
      <div className="palette">
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color1}`,
          }}
        />
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color2}`,
          }}
        />
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color3}`,
          }}
        />
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color4}`,
          }}
        />
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color5}`,
          }}
        />
      </div>
    </div>
  );
}

export default BoardColorPalette;
