import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ApiEndpointProps {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description: string;
  children?: React.ReactNode;
}

const methodColors: Record<string, string> = {
  GET: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  POST: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  PUT: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  PATCH: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  DELETE: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
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
