import React from "react";
import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 mx-auto p-4 max-w-6xl">
      {results.map((result, key) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
