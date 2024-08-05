import { EmptyTableMessage } from "./tableMensage";

interface TableContentProps {
  totalItemCount: number;
  children: React.JSX.Element[];
  pageName?: string;
}
export function TableContent({
  totalItemCount,
  children,
  pageName,
}: TableContentProps) {
  if (totalItemCount === 0) {
    return <EmptyTableMessage type={pageName} />;
  }
  return [children];
}
