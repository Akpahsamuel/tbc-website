"use client";

import { useState } from "react";
import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type TeamAvatarProps = {
  src: string;
  alt: string;
  style?: React.CSSProperties;
};

export default function TeamAvatar({ src, alt, style }: TeamAvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <ImagePlaceholder label="headshot" style={style} />;
  }

  return (
    <div style={{ position: "relative", ...style }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
