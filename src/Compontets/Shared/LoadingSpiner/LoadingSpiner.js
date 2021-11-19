import { useState } from "react";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

const LoadingSpiner = (props) => {
  const override = css`
    display: block;
    margin: 0 auto;
    radius: 2px;
    border-color: red;
  `;
  return (
    <FadeLoader color={"#FF0000"} loading={props.loading} css={override} />
  );
};

export default LoadingSpiner;
