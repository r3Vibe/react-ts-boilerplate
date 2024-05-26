import {
  faChevronCircleDown,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  canSearch: boolean;
  canAdd: boolean;
  canFilter: boolean;
  searchPlaceholder?: string;
  searchValue?: string;
  setSearchValue?: Dispatch<SetStateAction<string>>;
  addLink?: string;
  filterFields?: {
    name: string;
    values: string[];
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
  }[];
}

export default function TableCapabilities({
  canSearch,
  searchPlaceholder,
  searchValue,
  setSearchValue,
  canAdd,
  addLink,
  canFilter,
  filterFields,
}: IProps) {
  const nav = useNavigate();
  return (
    <div className="flex justify-between items-end w-full gap-3">
      {canSearch ? (
        <Input
          isClearable
          className="w-[250px]"
          placeholder={searchPlaceholder}
          startContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          value={searchValue}
          onClear={() => setSearchValue && setSearchValue("")}
          onValueChange={(value: string) =>
            setSearchValue && setSearchValue(value)
          }
        />
      ) : null}
      <div className="flex gap-3">
        {canFilter
          ? filterFields?.map((field) => (
              <Dropdown key={field.name}>
                <DropdownTrigger className="hidden sm:flex">
                  <Button
                    endContent={<FontAwesomeIcon icon={faChevronCircleDown} />}
                    variant="flat"
                    className="capitalize"
                  >
                    {field.selected !== "all" ? field.selected : field.name}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  closeOnSelect={true}
                  selectionMode="single"
                  selectedKeys={[field.selected]}
                  onSelectionChange={(keys) => {
                    field.setSelected(new Set(keys).values().next().value);
                  }}
                >
                  {field.values.map((value: string) => (
                    <DropdownItem key={value} className="capitalize">
                      {value}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ))
          : null}

        {canAdd ? (
          <Button
            color="secondary"
            endContent={<FontAwesomeIcon icon={faPlus} />}
            onClick={() => nav(addLink ?? "/")}
          >
            Add New
          </Button>
        ) : null}
      </div>
    </div>
  );
}
