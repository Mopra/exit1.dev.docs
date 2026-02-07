import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Feature {
  name: string;
  free: string | boolean;
  nano: string | boolean;
}

interface FeatureTableProps {
  features: Feature[];
}

export function FeatureTable({ features }: FeatureTableProps) {
  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Badge variant="default">Yes</Badge>
      ) : (
        <Badge variant="secondary">No</Badge>
      );
    }
    return value;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50%]">Feature</TableHead>
          <TableHead className="text-center">Free</TableHead>
          <TableHead className="text-center">Nano</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((feature) => (
          <TableRow key={feature.name}>
            <TableCell className="font-medium">{feature.name}</TableCell>
            <TableCell className="text-center">
              {renderValue(feature.free)}
            </TableCell>
            <TableCell className="text-center">
              {renderValue(feature.nano)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
