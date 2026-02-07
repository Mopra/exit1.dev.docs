import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

interface CodeExample {
  label: string;
  language: string;
  code: string;
}

interface ApiResponseProps {
  examples: CodeExample[];
}

export function ApiResponse({ examples }: ApiResponseProps) {
  if (examples.length === 0) return null;

  return (
    <Card className="my-4 overflow-hidden">
      <Tabs defaultValue={examples[0].label}>
        <TabsList className="w-full justify-start rounded-none border-b bg-muted/50 px-2">
          {examples.map((example) => (
            <TabsTrigger key={example.label} value={example.label}>
              {example.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {examples.map((example) => (
          <TabsContent key={example.label} value={example.label} className="m-0">
            <pre className="overflow-x-auto p-4 text-sm">
              <code>{example.code}</code>
            </pre>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
}
