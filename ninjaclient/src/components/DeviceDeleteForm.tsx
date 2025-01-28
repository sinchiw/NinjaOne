import React, { SetStateAction, Dispatch, SyntheticEvent } from "react";
import type { Device } from "../model/device";
import axios from "axios";
import close from "../assets/Close.svg";
import "../css/devicedeleteform.css";

interface DeviceDeleteFormProps {
  device: Device | null;
  setIsDeleteFormOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedDevice: Dispatch<SetStateAction<Device | null>>;
  getAllDevice: () => Promise<void>;
}
const DeviceDeleteForm = ({
  device,
  setIsDeleteFormOpen,
  setSelectedDevice,
  getAllDevice,
}: DeviceDeleteFormProps) => {
  const deleteItem = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (device) {
        await axios.delete(`devices/${device.id}`);
      }
      await getAllDevice();
      setIsDeleteFormOpen(false);
      setSelectedDevice(null);
    } catch (e) {
      console.log("Error when making a request",e);
    }
  };

  const cancelAction = () => {
    setIsDeleteFormOpen(false);
    setSelectedDevice(null);
  };

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <div className="delete-modal-header">
          <h3 className="delete-modal-header-text">Delete device?</h3>
          <button className="close-button" onClick={cancelAction}>
            <img src={close} alt="close icon for button" />
          </button>
        </div>
        <div className="delete-modal-content">
          <p className="delete-modal-content-text">
            You are about to delete the device{" "}
            <span className="device-system-name-text">
              {device?.system_name}
            </span>
            . This action cannot be undone.
          </p>
        </div>
        <div className="delete-modal-footer">
          <button className="cancel-button" onClick={cancelAction}>
            Cancel
          </button>
          <button className="delete-button" onClick={deleteItem}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceDeleteForm;
