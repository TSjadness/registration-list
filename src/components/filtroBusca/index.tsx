import { IoSearch } from "react-icons/io5";


import { FormControl } from "../formContro";
import { Input } from "../input";

export interface SearchFilterProps {
  onSearchChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  classname?: string;
}
export function SearchFilter({
  onSearchChange,
  placeholder,
  id,
  classname,
}: SearchFilterProps) {
  return (
    <form className="flex w-full gap-3">
      <FormControl.Root className={classname}>
        <Input.Root className="h-[40px] w-full border border-gray-400">
          <Input.Content>
            <IoSearch size={20} className="text-gray-500" />
            <Input.Field
              id={id}
              type="text"
              placeholder={placeholder}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </Input.Content>
        </Input.Root>
      </FormControl.Root>
    </form>
  );
}
