import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Option } from "../../../ts/types";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

interface ListBoxProps {
  options: Option[];
  name: string;
  value?: Option
}

export const Select = ({ options, name, value }: ListBoxProps) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="top-16 w-auto">
      <Listbox value={selected} onChange={setSelected} name={name}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-full bg-zinc-900 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {selected.render ? selected.render : selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-stone-800 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((option, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className=" cursor-default select-none py-1 px-1"
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <div
                        className={` ${
                          selected
                            ? "font-medium text-orange-600"
                            : "font-normal"
                        } ${active ? "bg-stone-700" : ""}`}
                      >
                        {option.render ? option.render : option.name}
                      </div>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
