import { useEffect } from "react";
import React from "react";

import { useState } from "react";

export default function Questions() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=14&category=22&difficulty=medium&type=multiple"
    )
      .then((response) => response.json)
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);
  return (
    <>
      <div className="mt-5">aaaaaaaaaaaaaaaaaaaaa</div>
      <h1>dzdzsdzdzdz</h1>
    </>
  );
}
