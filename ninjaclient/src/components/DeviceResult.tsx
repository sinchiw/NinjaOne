import React, { SetStateAction, Dispatch } from "react";
import type { Device } from "../model/device";
import DropDown from "../components/DropDown.tsx";
import Windows from "../assets/Windows.svg";
import Linux from "../assets/Linux.svg";
import Apple from "../assets/Apple.svg"
import "../css/deviceresult.css";


interface SearchFormProps {
  filteredDevices: Device[];
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedDevice: Dispatch<SetStateAction<Device | null>>;
  setIsDeleteFormOpen: Dispatch<SetStateAction<boolean>>;
}

const DeviceResult = ({
  filteredDevices,
  setIsFormOpen,
  setIsDeleteFormOpen,
  setSelectedDevice,
}: SearchFormProps) => {
  
  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "WINDOWS":
        return <img className="icon" src={Windows} alt="Window icon"/>;
      case "MAC":
        return <img className="icon" src={Apple} alt="Apple Icon"/>;
      case "LINUX":
        return <img className="icon" src={Linux} alt="Linux Icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="device-list-items">
      <div className="device-header-sub-title-container">
        <h3 className="device-header-sub-title-text">Device</h3>
      </div>
      {filteredDevices &&
        filteredDevices.map((device) => {
          return (
            <div key={device.id} className="device-item">
              <div className="device-info">
                <div className="device-details">
                  <div className="device-details-header">
                    {getDeviceIcon(device.type)}
                    <h3 className="system-name">{device.system_name}</h3>
                  </div>
                  <p className="device-type">
                    {device.type.charAt(0).toUpperCase() +
                      device.type.slice(1).toLowerCase()} {" "}
                    workstation -{device.hdd_capacity} GB
                  </p>
                </div>
              </div>
              <div className="device-dropdown-menu">
                <DropDown
                  setIsFormOpen={setIsFormOpen}
                  setIsDeleteFormOpen={setIsDeleteFormOpen}
                  setSelectedDevice={setSelectedDevice}
                  device={device}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DeviceResult;
