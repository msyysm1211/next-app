import { User } from "./dyn";
import { Static } from "./static";
import { Suspense } from "react";

export const experimental_ppr = true;
export default function Test() {
  return (
    <div>
      <div>123</div>
      <Suspense fallback={<>loading...</>}>
        <User></User>
      </Suspense>
    </div>
  );
}
