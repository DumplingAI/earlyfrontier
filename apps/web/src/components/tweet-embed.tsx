"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

interface TweetEmbedProps {
  url: string;
}

export default function TweetEmbed({ url }: TweetEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTweet = () => {
      if (containerRef.current && window.twttr?.widgets?.load) {
        window.twttr.widgets.load(containerRef.current);
      }
    };

    const existingScript = document.getElementById("twitter-wjs");
    if (existingScript) {
      loadTweet();
      return;
    }

    const script = document.createElement("script");
    script.id = "twitter-wjs";
    script.async = true;
    script.src = "https://platform.twitter.com/widgets.js";
    script.onload = loadTweet;
    document.body.appendChild(script);
  }, []);

  return (
    <div ref={containerRef}>
      <blockquote className="twitter-tweet" data-dnt="true">
        <a href={url}>{url}</a>
      </blockquote>
    </div>
  );
}
