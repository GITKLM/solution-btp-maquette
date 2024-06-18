import Image from 'next/image';
import React from 'react';


interface LogoSansTitreProps {
  width: number;
  height: number;
  className?: string;
}


export default function LogoSansTitre({ width, height, className }: LogoSansTitreProps) {
  return (
    <>
      <Image
        src="/Solution-btp-logo-sans-titre.png"
        alt="Logo"
        width={width}
        height={height}
        className={className}
      />
    </>
  );
}
