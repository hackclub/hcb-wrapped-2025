import $ from "../utils/theme";
import type { SlideProps, SlideOptions } from "../internals/slidesHelper";
import { USDollarNoCents } from "../utils/formatter";
import Background from "../components/Background";
import HCBStat from "../components/HCBStat";
import CountUp from "react-countup";
import { prettifyCategory } from "./HCBTopMerchants";
import React from "react";
import { isEmpty } from "../slides";

export default function Reimbursements({ data }: SlideProps) {
  const roundTo2 = (decimal: number) =>
    Math.round((decimal + Number.EPSILON) * 100 * 100) / 100;
  const percentile = roundTo2(1 - data.individual.ranking);
  const ranking = roundTo2(data.individual.ranking);

  return (
    <>
      <h2 {...$.title({ marginBottom: $.s4, marginTop: $.s5 })}>📎</h2>
      <h1 {...$.title({ fontSize: "2.6em", color: $.white })}>
        You were reimbursed{' '}
        <span {...$({ color: "#ffffffbb" })}>$
        <CountUp end={Math.abs(data.individual.reimbursementAmount / 100)} />
        </span>{' '}this
        year.
      </h1> 
      <h2 {...$.headline({ marginBottom: $.s4, fontStyle: "italic", color: $.white, marginTop: $.s4 })}>You submitted <CountUp end={data.individual.reimbursementCount} /> reimbursements!</h2>

      <Background />
    </>
  );
}

Reimbursements.config = {
bgImage: `url("https://hc-cdn.hel1.your-objectstorage.com/s/v3/9b9c70dcf125e2a933093579ed91ebc5cdcc8005_frame_3__1_.svg")`,
cache: () => ["https://hc-cdn.hel1.your-objectstorage.com/s/v3/9b9c70dcf125e2a933093579ed91ebc5cdcc8005_frame_3__1_.svg"],
  duration: 10_000,
  skipSlide: (data) =>
    data.individual.reimbursementAmount == 0
} satisfies SlideOptions;
