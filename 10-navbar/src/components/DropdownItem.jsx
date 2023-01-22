import React from "react";

const DropdownItem = ({ children }) => {
  return (
    <>
      <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
        <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
          <li>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Library
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Pro Version
            </a>
          </li>
        </ul>
      </div>
      <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
        <ul class="space-y-4">
          <li>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Newsletter
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Playground
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              License
            </a>
          </li>
        </ul>
      </div>
      <div class="p-4 text-gray-900 dark:text-white">
        <ul class="space-y-4">
          <li>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Support Center
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              Terms
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownItem;
