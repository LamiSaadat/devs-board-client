import React from "react";
import styled from "styled-components";
import copy3 from "../../assets/icons/copy-icon-3.png";

function BoardColorPalette({ boardColorPalette, onTileClick }) {
  const ColorCard = styled.div`
    width: 8rem;
    height: 8rem;
  `;
  return (
    <div>
      <div className="palette">
        <div className="palette__card">
          <ColorCard
            style={{
              backgroundColor: `${boardColorPalette[0].color1}`,
            }}
            onClick={() => onTileClick(boardColorPalette[0].color1)}
            className="palette__swatch"
          />
          <div
            className="palette__info"
            onClick={() => onTileClick(boardColorPalette[0].color1)}
          >
            <span>{boardColorPalette[0].color1}</span>
            <img className="palette__copy" src={copy3}></img>
          </div>
        </div>
        <div className="palette__card">
          <ColorCard
            style={{
              backgroundColor: `${boardColorPalette[0].color2}`,
            }}
            onClick={() => onTileClick(boardColorPalette[0].color2)}
            className="palette__swatch"
          />
          <div
            className="palette__info"
            onClick={() => onTileClick(boardColorPalette[0].color2)}
          >
            <span>{boardColorPalette[0].color2}</span>
            <img className="palette__copy" src={copy3}></img>
          </div>
        </div>
        <div className="palette__card">
          <ColorCard
            style={{
              backgroundColor: `${boardColorPalette[0].color3}`,
            }}
            onClick={() => onTileClick(boardColorPalette[0].color3)}
            className="palette__swatch"
          />
          <div
            className="palette__info"
            onClick={() => onTileClick(boardColorPalette[0].color3)}
          >
            <span>{boardColorPalette[0].color3}</span>
            <img className="palette__copy" src={copy3}></img>
          </div>
        </div>
        <div className="palette__card">
          <ColorCard
            style={{
              backgroundColor: `${boardColorPalette[0].color4}`,
            }}
            onClick={() => onTileClick(boardColorPalette[0].color4)}
            className="palette__swatch"
          />
          <div
            className="palette__info"
            onClick={() => onTileClick(boardColorPalette[0].color4)}
          >
            <span>{boardColorPalette[0].color4}</span>
            <img className="palette__copy" src={copy3}></img>
          </div>
        </div>
        <div className="palette__card">
          <ColorCard
            style={{
              backgroundColor: `${boardColorPalette[0].color5}`,
            }}
            onClick={() => onTileClick(boardColorPalette[0].color5)}
            className="palette__swatch"
          />
          <div
            className="palette__info"
            onClick={() => onTileClick(boardColorPalette[0].color5)}
          >
            <span>{boardColorPalette[0].color5}</span>
            <img className="palette__copy" src={copy3}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardColorPalette;
