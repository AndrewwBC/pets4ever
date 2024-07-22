import { useState } from "react";
import { Container } from "./styles";

export default function LastComment({ comments }) {
  const lastComment =
    comments.length > 0 ? comments[comments.length - 1] : comments[0];

  if (lastComment)
    return (
      <Container>
        <div className="content">
          <p>{lastComment?.username} comentou</p>
          <p>{lastComment?.comment}</p>
        </div>
      </Container>
    );
}
