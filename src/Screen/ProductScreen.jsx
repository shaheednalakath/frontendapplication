import React from "react";
import { useParams } from "react-router-dom";

export default function ProductScreen() {
  const param = useParams();
  const { slug } = param;

  return (
    <div>
      <div>
        <h1>{slug}</h1>
      </div>
    </div>
  );
}
