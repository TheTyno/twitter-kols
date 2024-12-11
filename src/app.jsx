import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router>
      <main role="main">
        <div>
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
    </Router>
  );
}
