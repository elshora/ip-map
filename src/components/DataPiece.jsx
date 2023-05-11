import React from "react";

export default function DataPiece({ title, content }) {
  return (
    <div className="col-12 col-md-3 data-piece">
      <h5 className="text-muted text-uppercase">{title}</h5>
      <p>{content}</p>
    </div>
  );
}
