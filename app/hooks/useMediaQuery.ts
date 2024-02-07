import { useEffect, useState } from "react";

export const mediaQuery = {
  sp: "width < 768px",
  //   pc: "768px <= width",
};

// NOTE: build時にReferenceError: matchMedia is not definedが出る。
// クライアントサイドでしか動かないためtypeof window !== "undefined"の条件分岐を入れる
export const useMediaQuery = (query: string) => {
  const formattedQuery = `(${query})`;
  const [match, setMatch] = useState(
    typeof window !== "undefined" && matchMedia(formattedQuery).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = matchMedia(formattedQuery);

    if (mql.media === "not all" || mql.media === "invalid") {
      console.error(`useMediaQuery Error: Invalid media query`);
    }

    mql.onchange = (e) => {
      setMatch(e.matches);
    };

    return () => {
      mql.onchange = null;
    };
  }, [formattedQuery, setMatch]);

  return match;
};
