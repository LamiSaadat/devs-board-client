import React from "react";
import styled from "styled-components";

function BoardColorPalette({ boardColorPalette, onTileClick }) {
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
          onClick={() => onTileClick(boardColorPalette[0].color1)}
          className="palette__swatch"
        >
          <div
            className="palette__info"
            onClick={() => onTileClick(boardColorPalette[0].color1)}
          >
            {boardColorPalette[0].color1}
          </div>
        </ColorCard>
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color2}`,
          }}
          onClick={() => onTileClick(boardColorPalette[0].color2)}
          className="palette__swatch"
        >
          <div
            className="palette__info"
            onClick={() => onTileClick(boardColorPalette[0].color2)}
          >
            {boardColorPalette[0].color2}
          </div>
        </ColorCard>

        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color3}`,
          }}
          onClick={() => onTileClick(boardColorPalette[0].color3)}
          className="palette__swatch"
        >
          <div
            className="palette__info"
            onClick={() => onTileClick(boardColorPalette[0].color3)}
          >
            {boardColorPalette[0].color3}
          </div>
        </ColorCard>

        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color4}`,
          }}
          onClick={() => onTileClick(boardColorPalette[0].color4)}
          className="palette__swatch"
        >
          <div
            className="palette__info"
            onClick={() => onTileClick(boardColorPalette[0].color4)}
          >
            {boardColorPalette[0].color4}
          </div>
        </ColorCard>
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color5}`,
          }}
          onClick={() => onTileClick(boardColorPalette[0].color5)}
          className="palette__swatch"
        >
          <div
            className="palette__info"
            onClick={() => onTileClick(boardColorPalette[0].color5)}
          >
            {boardColorPalette[0].color5}
          </div>
        </ColorCard>
      </div>
    </div>
  );
}

export default BoardColorPalette;
