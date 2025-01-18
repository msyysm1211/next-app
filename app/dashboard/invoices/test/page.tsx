"use client";
import React, { use, useEffect, useState } from "react";

const page = () => {
  const [text, setText] = useState("null");
  useEffect(() => {
    fetch("esa.console.aliyun.com").then(async (res) => {
      const a = await res.text();
      setText(a);
    });
  }, []);
  return (
    <div>
      {text}
      <div>测试</div>
    </div>
  );
};

export default page;
