import React from "react";
import Parent from "./parent";

export function GrandParent() {
  return (
    <>
      <div>
        <Parent />
      </div>
    </>
  );
}
