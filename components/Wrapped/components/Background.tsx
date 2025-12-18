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
        : "https://hc-cdn.hel1.your-objectstorage.com/s/v3/f5e47199e3fbe284_group_5__3_.png"
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
