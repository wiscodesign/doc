import { lazy } from "react";

export default function remote(factory) {
  return lazy(() => {
    if (typeof window === "undefined") {
      return import("./Blank");
    }

    return factory()
  });
}
