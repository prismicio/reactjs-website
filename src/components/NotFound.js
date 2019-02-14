import React from 'react';

export default function NotFound() {
  document.title = "404 - Not Found";
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Document not found</h2>
      <p><a href="/">Return to homepage</a></p>
    </div>
  );
}
