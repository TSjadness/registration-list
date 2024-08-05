import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  ReactElement,
  SetStateAction,
} from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";


import { cn } from "@/utils/cn";
import { Text } from "../Easy/Text";
import { FormControl } from "../formContro";
import { Spinner } from "../Easy/Spinner";
import { Button } from "../Easy/Button";
import { Select } from "../Easy/Select";


interface PageableRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement | ReactElement[];
}

const PageableRoot = ({ children, className, ...props }: PageableRootProps) => {
  return (
    <div
      role="pageableRoot"
      className={cn(
        "flex items-center gap-5  p-4 text-sm text-gray-500 responsive-pageableRoot",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface PageableLoadingProps extends HTMLAttributes<HTMLOrSVGElement> {
  isLoading: boolean;
  className?: string;
}

const PageableLoading = ({ isLoading, className }: PageableLoadingProps) => {
  return (
    <>{isLoading && <Spinner className={cn("text-gray-700", className)} />}</>
  );
};

interface PageablePerPageProps extends HTMLAttributes<HTMLSelectElement> {
  pluralName: string;
  itemsPerPage?: number[];
  pageSize: number;
  setPageSize: (data: number) => void;
  setPageNumber: (data: number) => void;
}

const PageablePerPage = ({
  pluralName,
  itemsPerPage = [7, 10, 15, 20],
  pageSize,
  setPageSize,
  setPageNumber,
}: PageablePerPageProps) => {
  return (
    <div className="mr-2 flex items-center gap-2 whitespace-nowrap text-[#2D3748] ">
      <Text className="text-sm">{pluralName} por página:</Text>
      <FormControl.Root className="max-w-[75px] shrink-0">
        <Select.Root
          role="select-page-size"
          name="page-size"
          value={pageSize?.toString()}
          onValueChange={(value) => {
            setPageSize(Number(value) || 7);
            setPageNumber(1);
          }}
        >
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            {itemsPerPage?.map((value) => (
              <Select.Item
                key={value}
                value={value?.toString()}
                id={`pageable-item-${value}`}
              >
                {value}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </FormControl.Root>
    </div>
  );
};

interface PageableTotalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  total: number;
  name: string;
  pluralName: string;
}
const PageableTotal = ({
  total = 0,
  name,
  pluralName,
  ...props
}: PageableTotalProps) => {
  return (
    <strong className="text-[#2D3748]" {...props}>
      {total} {total === 1 ? name : pluralName}
    </strong>
  );
};

interface PageablePageRangeProps {
  firstItemOnPage: number;
  lastItemOnPage: number;
  totalItemCount: number;
}

const PageablePageRange = ({
  firstItemOnPage = 0,
  lastItemOnPage = 0,
  totalItemCount = 0,
}: PageablePageRangeProps) => {
  return (
    <Text as="span" className="text-sm text-[#2D3748]">
      {firstItemOnPage}-{lastItemOnPage} de {totalItemCount}
    </Text>
  );
};

interface PageablePreviousPageButtonProps {
  setPageNumber: Dispatch<SetStateAction<number>>;
  isFirstPage: boolean;
  className?: string;
}

const PageablePreviousPageButton = ({
  setPageNumber,
  isFirstPage = true,
  className,
  ...props
}: PageablePreviousPageButtonProps) => {
  return (
    <Button
      variant="ghost"
      title="Página anterior"
      className={cn("h-8 w-8 p-2", className)}
      onClick={() => {
        setPageNumber((page: number) => Math.max(page - 1, 1));
      }}
      disabled={isFirstPage}
      {...props}
    >
      <IoChevronBack size={16} />
    </Button>
  );
};

interface PageableNextPageButtonProps {
  setPageNumber: Dispatch<SetStateAction<number>>;
  isLastPage: boolean;
  className?: string;
}

const PageableNextPageButton = ({
  setPageNumber,
  isLastPage = true,
  className,
  ...props
}: PageableNextPageButtonProps) => {
  return (
    <Button
      variant="ghost"
      title="Página anterior"
      className={cn("h-8 w-8 p-2", className)}
      onClick={() => {
        setPageNumber((page: number) => Math.min(page + 1));
      }}
      disabled={isLastPage}
      {...props}
    >
      <IoChevronForward size={16} />
    </Button>
  );
};

export const Pageable = {
  Root: PageableRoot,
  Loading: PageableLoading,
  PerPage: PageablePerPage,
  Total: PageableTotal,
  PageRange: PageablePageRange,
  PreviousPageButton: PageablePreviousPageButton,
  NextPageButton: PageableNextPageButton,
};
