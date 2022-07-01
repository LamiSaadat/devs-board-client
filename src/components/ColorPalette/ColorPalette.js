import "./ColorPalette.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ColorPalette = ({ colorPalette }) => {
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
                ></ColorCard>
                <span>{color.color.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ColorPalette;
