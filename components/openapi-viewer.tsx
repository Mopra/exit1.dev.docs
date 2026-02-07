"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ApiComponent = dynamic(
  () =>
    import("@stoplight/elements").then((mod) => {
      return { default: mod.API };
    }),
  { ssr: false }
);

export function OpenApiViewer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Import Stoplight Elements CSS on client side
    import("@stoplight/elements/styles.min.css");
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        Loading API documentation...
      </div>
    );
  }

  return (
    <div className="openapi-viewer">
      <ApiComponent
        apiDescriptionUrl="/openapi.yaml"
        router="hash"
        layout="sidebar"
        hideInternal
      />
    </div>
  );
}
