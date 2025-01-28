import React, { useState, useEffect, SetStateAction, Dispatch, useRef } from "react";
import type { Device } from "../model/device";
import "../css/dropdown.css";


interface DropDownModalProps {
  device: Device | null;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedDevice: Dispatch<SetStateAction<Device | null>>;
  setIsDeleteFormOpen: Dispatch<SetStateAction<boolean>>;
}
const DropDown = ({device, setIsFormOpen, setSelectedDevice ,setIsDeleteFormOpen} : DropDownModalProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openEditForm = () => {
    setIsFormOpen(true)
    setSelectedDevice(device)
    setIsMenuOpen(false)
  }

  const openDeleteForm = () => {
    setIsDeleteFormOpen(true)
    setSelectedDevice(device)
    setIsMenuOpen(false)
  }

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ...
      </button>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <button onClick={openEditForm}>Edit</button>
          <button onClick={openDeleteForm}className="delete-button-action">Delete</button>
        </div>
      )}
    </div>
  );
};

export default DropDown;