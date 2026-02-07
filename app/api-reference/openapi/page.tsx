import { OpenApiViewer } from "@/components/openapi-viewer";

export const metadata = {
  title: "Interactive API Docs",
};

export default function OpenApiPage() {
  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
        Interactive API Documentation
      </h1>
      <p style={{ marginBottom: "1.5rem", color: "#6b7280" }}>
        Explore the exit1.dev API interactively. Try requests, view schemas, and
        see example responses.
      </p>
      <OpenApiViewer />
    </div>
  );
}
