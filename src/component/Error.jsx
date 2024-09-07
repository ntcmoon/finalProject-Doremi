import React, { useEffect } from "react";

export default function Error() {
  return (
    <div>
      <h1 className="text-3xl text-amber-500 font-bold">
        Opps, I did it again!
      </h1>
      <h3 className="text-xl text-amber-700 font-bold underline decoration-wavy underline-offset-1">
        404 NOT FOUND
      </h3>
    </div>
  );
}
