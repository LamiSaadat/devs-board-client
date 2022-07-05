import "./ColorPalette.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import copy from "../../assets/icons/copy-icon.png";
import clipboard from "../../assets/icons/clipboard-icon.png";
import copy2 from "../../assets/icons/copy-icon-2.png";
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
              <div className="palette_card">
                <ColorCard
                  key={color.color.clean}
                  style={{
                    backgroundColor: `${color.color.value}`,
                  }}
                  onClick={() => onTileClick(color.color.value)}
                ></ColorCard>
                <div onClick={() => onTileClick(color.color.value)}>
                  <span>{color.color.value}</span>
                  <img className="palette__copy" src={copy3}></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ColorPalette;
