import React from "react";
import NextTopLoader from "nextjs-toploader";

const TopLoader = () => {
  return (
    <div>
      <NextTopLoader
        color="#FF1ADF"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #FF1ADF,0 0 5px #FF1ADF"
      />
    </div>
  );
};

export default TopLoader;
