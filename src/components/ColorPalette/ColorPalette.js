import "./ColorPalette.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import copy3 from "../../assets/icons/copy-icon-3.png";

const ColorPalette = ({ colorPalette, onTileClick }) => {
  const ColorCard = styled.div`
    width: 8rem;
    height: 8rem;
  `;

  return (
    <>
      <div>
        <div className="palette">
          {colorPalette.map((color) => {
            return (
              <div className="palette__card">
                <ColorCard
                  key={color.color.clean}
                  style={{
                    backgroundColor: `${color.color.value}`,
                  }}
                  onClick={() => onTileClick(color.color.value)}
                  className="palette__swatch"
                >
                  <div
                    className="palette__info"
                    onClick={() => onTileClick(color.color.value)}
                  >
                    <span>{color.color.value}</span>
                    <img className="palette__copy-img" src={copy3}></img>
                  </div>
                </ColorCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ColorPalette;
