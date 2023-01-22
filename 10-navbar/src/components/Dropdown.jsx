import { useState } from "react";
import DropdownItem from "./DropdownItem";

const Dropdown = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
  }

  return (
    <div
      id="mega-menu-dropdown"
      class="grid absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
    >
      <DropdownItem />
    </div>
  );
};

export default Dropdown;
