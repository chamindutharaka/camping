"use client";

import Image from "next/image";
import { useState } from "react";
import { Tent } from "lucide-react";

interface SmartImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function SmartImage({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  priority = false,
  className = "",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#0f2a1d] via-[#133c29] to-[#1e4d37] text-[#faf6ef]/70 ${
          fill ? "absolute inset-0" : "h-full w-full"
        } ${className}`}
        role="img"
        aria-label={alt}
      >
        <Tent className="h-10 w-10 opacity-75" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
