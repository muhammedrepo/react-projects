import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [value, setValue] = useState(null);

  const handleSelect = (option) => {
    setValue(option);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];
  return (
    <div>
      <Dropdown options={options} value={value} onChange={handleSelect} />
    </div>
  );
}
export default DropdownPage;
