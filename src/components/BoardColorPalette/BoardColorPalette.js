import React from "react";
import styled from "styled-components";

const ColorCard = styled.div`
  width: 8rem;
  height: 8rem;
`;

function BoardColorPalette({ boardColorPalette }) {
  return (
    <div>
      <div className="palette">
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color1}`,
          }}
          onClick={() =>
            navigator.clipboard.writeText(boardColorPalette[0].color1)
          }
          className="palette__swatch"
        >
          <div
            className="palette__info"
            onClick={() =>
              navigator.clipboard.writeText(boardColorPalette[0].color1)
            }
          >
            {boardColorPalette[0].color1}
          </div>
        </ColorCard>
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color2}`,
          }}
          onClick={() =>
            navigator.clipboard.writeText(boardColorPalette[0].color2)
          }
          className="palette__swatch"
        >
          <div
            className="palette__info"
            onClick={() =>
              navigator.clipboard.writeText(boardColorPalette[0].color2)
            }
          >
            {boardColorPalette[0].color2}
          </div>
        </ColorCard>
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color3}`,
          }}
          onClick={() =>
            navigator.clipboard.writeText(boardColorPalette[0].color3)
          }
          className="palette__swatch"
        >
          <div
            className="palette__info"
            onClick={() =>
              navigator.clipboard.writeText(boardColorPalette[0].color3)
            }
          >
            {boardColorPalette[0].color3}
          </div>
        </ColorCard>
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color4}`,
          }}
          onClick={() =>
            navigator.clipboard.writeText(boardColorPalette[0].color4)
          }
          className="palette__swatch"
        >
          <div
            className="palette__info"
            onClick={() =>
              navigator.clipboard.writeText(boardColorPalette[0].color4)
            }
          >
            {boardColorPalette[0].color4}
          </div>
        </ColorCard>
        <ColorCard
          style={{
            backgroundColor: `${boardColorPalette[0].color5}`,
          }}
          onClick={() =>
            navigator.clipboard.writeText(boardColorPalette[0].color5)
          }
          className="palette__swatch"
        >
          <div
            className="palette__info"
            onClick={() =>
              navigator.clipboard.writeText(boardColorPalette[0].color5)
            }
          >
            {boardColorPalette[0].color5}
          </div>
        </ColorCard>
      </div>
    </div>
  );
}

export default BoardColorPalette;
