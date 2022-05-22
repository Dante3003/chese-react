import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  lostFigures: Figure[];
}

const LostFiguresComponent: FC<LostFiguresProps> = ({ title, lostFigures }) => {
  return <div className="lost-figures">LostFiguresComponent</div>;
};

export default LostFiguresComponent;
