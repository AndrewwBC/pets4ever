import { useState } from "react";

export default function LastComment({ comments }) {
  const lastComment =
    comments.length > 0 ? comments[comments.length - 1] : comments[0];

  return (
    <div>
      <p>{lastComment?.comment}</p>
    </div>
  );
}
