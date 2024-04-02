import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectCategory = () => {
  return (
    <Select>
      <SelectTrigger className="w-[150px] bg-[#5F8638] text-white outline-none focus:outline-none border-none rounded-l-full">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Home Appliances</SelectItem>
        <SelectItem value="dark">Vehicle Wastes</SelectItem>
        <SelectItem value="batteries">Batteries</SelectItem>
        <SelectItem value="circuits">Circuits</SelectItem>
        <SelectItem value="computers">Computers</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
