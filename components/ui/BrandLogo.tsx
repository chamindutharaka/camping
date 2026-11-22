"use client";

import Image from "next/image";
import { useState } from "react";

interface BrandLogoProps {
  size?: number;
  className?: string;
}

export function BrandLogo({ size = 40, className = "" }: BrandLogoProps) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return null;
  }

  return (
    <Image
      src="/logo.jpg"
      alt="Camping Gear Hub — Galle logo"
      width={size}
      height={size}
      onError={() => setMissing(true)}
      className={`rounded-full object-cover ${className}`}
    />
  );
}
