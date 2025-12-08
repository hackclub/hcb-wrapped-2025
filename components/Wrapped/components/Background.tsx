import React from "react";

export default function Background({
  mobileCss,
  desktopCss,
  desktopPatternImage
}: {
  mobileCss?: string;
  desktopCss?: string;
  desktopPatternImage?: string;
}) {
  desktopCss =
    desktopCss ||
    `
    background: url("${
      desktopPatternImage
        ? desktopPatternImage
        : "https://cloud-6h53svh6x-hack-club-bot.vercel.app/0group_5.png"
    }"), linear-gradient(rgba(5,0,0,0.10), rgba(5,0,0,0.10));
    color: white;
    z-index: 5;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 100vh;
    left: 0px;
  `;
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          div.bg {
            ${desktopCss}
          }`
      }}
    />
  );
}
