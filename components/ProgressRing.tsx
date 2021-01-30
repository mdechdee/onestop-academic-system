import React, { CSSProperties, ReactElement, useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";

type ProgressRingProps = {
  radius: number, 
  stroke: number,
  progress: number,
  className: string,
}

export default function ProgressRing({radius, stroke, progress, className}: ProgressRingProps): ReactElement {
    
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;
  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className = {className}
    >
      <circle
        stroke="black"
        fill="transparent"
        strokeDasharray={ circumference + ' ' + circumference }
        style={ { strokeDashoffset:0 } }
        strokeWidth={ stroke }
        r={ normalizedRadius }
        cx={ radius }
        cy={ radius }
      />
      <circle
        stroke="white"
        fill="transparent"
        strokeDasharray={ circumference + ' ' + circumference }
        style={ { strokeDashoffset } }
        strokeWidth={ stroke }
        r={ normalizedRadius }
        cx={ radius }
        cy={ radius }
      />

    </svg>
  );
}