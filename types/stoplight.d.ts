declare module "@stoplight/elements" {
  import { ComponentType } from "react";

  interface APIProps {
    apiDescriptionUrl?: string;
    apiDescriptionDocument?: string;
    router?: "hash" | "memory" | "history";
    layout?: "sidebar" | "stacked";
    hideInternal?: boolean;
    hideExport?: boolean;
    logo?: string;
  }

  export const API: ComponentType<APIProps>;
}

declare module "@stoplight/elements/styles.min.css";
