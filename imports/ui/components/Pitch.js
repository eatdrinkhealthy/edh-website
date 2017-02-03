import React from "react";
import { pitchStyle } from "../styles";

const Pitch = () => (
  <div className={`${pitchStyle.className} anotherClass`}>
    A platform to find, share, and discuss healthy places to shop and eat.
  </div>
);

Pitch.style = pitchStyle;

export default Pitch;
