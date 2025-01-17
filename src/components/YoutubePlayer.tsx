import React, { useState, useEffect } from "react";

interface YoutubePlayerProps {
  id: string;
  mobile: boolean;
}

export const YoutubePlayer = (props: YoutubePlayerProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(props.mobile);
  useEffect(() => {
    setIsMobile(props.mobile);
  }, [props.mobile]);

  return (
    <div>
      <iframe
        key={isMobile ? "mobile" : "desktop"} // Change key to force re-render
        width={isMobile ? "550" : "560"}
        height="315"
        src={`https://www.youtube.com/embed/${props.id}?si=69LLkqKO5yUj1yBI`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen={true}
      ></iframe>
    </div>
  );
};
