import $ from "../utils/theme";
import type { SlideProps, SlideOptions } from "../internals/slidesHelper";
import Background from "../components/Background";
import React from "react";
import CountUp from "react-countup";

export function formatDuration(seconds: number) {
  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  if (seconds < minute) {
    return seconds + (seconds === 1 ? " second" : " seconds");
  } else if (seconds < hour) {
    const minutes = Math.floor(seconds / minute);
    return minutes + (minutes === 1 ? " minute" : " minutes");
  } else if (seconds < day) {
    const hours = Math.floor(seconds / hour);
    const hoursStr = hours + (hours === 1 ? " hour" : " hours");
    return hoursStr;
  } else {
    const days = Math.floor(seconds / day);
    const daysStr = days + (days === 1 ? " day" : " days");
    return daysStr;
  }
}

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="60"
            viewBox="0 0 103 98"
            fill="none"
        >
            <path
                d="M27.6269 29.2706L0 61.5548H49.3267L54.872 46.3298H33.7367L46.6536 31.3958L46.6952 30.9973L38.2942 16.5447H76.074L46.7865 97.1258H66.826L102.19 0H10.825L27.6186 29.2706H27.6269Z"
                fill="#83E359"
            />
        </svg>
    );
}

export default function Wise({ data }: SlideProps) {
  const uploadTime = data.individual.averageReceiptUploadTime || 0;
  const prettyLostReceiptCount =
    data.individual.lostReceiptCount == 0
      ? "none"
      : data.individual.lostReceiptCount;
  const naughty = uploadTime > 604800 || data.individual.lostReceiptCount > 50;
  return (
    <div
      {...$({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100%",
        paddingBottom: "80px",
        color: "#87EA5C",
        textAlign: "left",

      })}
    >
      <h2 {...$.title({ marginBottom: $.s3 })}>
        <Icon />
      </h2>
      <h1
        {...$.title({ marginBottom: $.s4, fontSize: "2.5em", fontWeight: 500 })}
      >
        This year, you made some Wise financial decisions.
      </h1>
      <h2
        {...$.headline({
          marginTop: $.s3,
          animate$fadeIn: {
            args: ["fromLeft"],
            delay: "0.1s"
          },
          fontSize: "1.5em",
        })}
      >
        You sent <span {...$({ color: "#E2F7D5" })}>$<CountUp end={Math.abs(data.individual.wiseTransferAmount / 100)} /></span> internationally with <span {...$({ color: "#E2F7D5" })}><CountUp end={Math.abs(data.individual.wiseTransferCount)} /></span>&nbsp;Wise&nbsp;transfers!
      </h2>
      <div {...$({ textAlign: "center", width: "100%", marginBottom: "-80px" })}>
        <img src="https://wise.com/web-art/assets/illustrations/satellite-platform-large@1x.webp" alt="Wise Illustration" {...$({
            marginTop: "40px",
            width: "170px",
            height: "170px",
            animate$fadeIn: {
                args: ["fromBottom"],
                delay: "0.1s"
          },
        })} />
      </div>
      <Background />
    </div>
  );
}

Wise.config = {
  bg: "#083400",
  duration: 10_000,
  skipSlide: (data) =>
  data.individual.wiseTransferCount + data.individual.wiseTransferAmount == 0
} satisfies SlideOptions;
