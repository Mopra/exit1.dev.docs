import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ApiEndpointProps {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description: string;
  children?: React.ReactNode;
}

// Tinted from the shared semantic tokens rather than Tailwind's raw palette,
// so a "destructive" here is the same red the dashboard paints a down check.
// Read methods use the brand teal; writes escalate warning -> destructive.
const methodColors: Record<string, string> = {
  GET: "bg-info/10 text-info border-info/40",
  POST: "bg-success/10 text-success border-success/40",
  PUT: "bg-warning/10 text-warning border-warning/40",
  PATCH: "bg-warning/10 text-warning border-warning/40",
  DELETE: "bg-destructive/10 text-destructive border-destructive/40",
};

export function ApiEndpoint({
  method,
  path,
  description,
  children,
}: ApiEndpointProps) {
  return (
    <Card className="my-4">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-3 text-base">
          <Badge className={methodColors[method]} variant="outline">
            {method}
          </Badge>
          <code className="text-sm font-mono">{path}</code>
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
