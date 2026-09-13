import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="field-manual not-found">
      <meta name="robots" content="noindex" />
      <div className="not-found-sheet">
        <p className="not-found-code">404</p>
        <h1>How'd you get here?</h1>
        <p className="not-found-description">
          This page isn't part of my portfolio! Use the link below to see more
          about me.
        </p>
        <Link to="/" search={{ experience: "work" }} className="not-found-home">
          <ArrowLeft aria-hidden="true" size={20} />
          Back to home
        </Link>
      </div>
    </main>
  );
}
