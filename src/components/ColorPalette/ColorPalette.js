import "./ColorPalette.scss";
import styled from "styled-components";

const ColorCard = styled.div`
  width: 4rem;
  height: 4rem;
`;

const ColorPalette = ({ colorPalette }) => {
  return (
    <div className="palette">
      {colorPalette.map((color) => {
        return (
          <ColorCard
            key={color.color.clean}
            style={{
              backgroundColor: `${color.color.value}`,
            }}
            className="palette__swatch"
          >
            <div className="palette__info">{color.color.value} </div>
          </ColorCard>
        );
      })}
    </div>
  );
};

export default ColorPalette;
