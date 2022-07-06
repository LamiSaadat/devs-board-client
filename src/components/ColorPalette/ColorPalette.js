import "./ColorPalette.scss";
import styled from "styled-components";

const ColorCard = styled.div`
  width: 8rem;
  height: 8rem;
`;

const ColorPalette = ({ colorPalette }) => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default ColorPalette;
