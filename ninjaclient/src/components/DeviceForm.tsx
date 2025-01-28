import React, { useState, useEffect, SetStateAction, Dispatch, SyntheticEvent } from "react";
import type { Device, DeviceFormData } from "../model/device";
import axios from 'axios';
import "../css/deviceform.css";
import close from "../assets/Close.svg";

interface DeviceModalProps {
  device: Device | null;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedDevice: Dispatch<SetStateAction<Device | null>>;
  getAllDevice: () => Promise<void>
}

const DeviceForm = ({
  device,
  setIsFormOpen,
  setSelectedDevice,
  getAllDevice,
}: DeviceModalProps) => {
  const [formData, setFormData] = useState<DeviceFormData>({
    system_name: "",
    type: "WINDOWS",
    hdd_capacity: "",
  });

  useEffect(() => {
    if (device) {
      setFormData({
        system_name: device.system_name,
        type: device.type,
        hdd_capacity: device.hdd_capacity,
      });
    }
  }, [device]);

  const handleClose = () => {
    setIsFormOpen(false);
    setSelectedDevice(null);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try{
        if(device){
            await axios.put(`/devices/${device.id}`, formData)
        } else {
            await axios.post("devices", formData)
        }
        await getAllDevice()
        setIsFormOpen(false);
        setSelectedDevice(null)
    } catch(e){
        console.log("Error when making a request", e)
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{device ? "Edit device" : "Add device"}</h2>
          <button className="close-button" onClick={handleClose}><img src={close} alt="close icon for button"/></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>System name *</label>
            <input
              id="system_name"
              type="text"
              value={formData.system_name}
              onChange={(e) =>
                setFormData({ ...formData, system_name: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label>Device type *</label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  type: e.target.value as Device["type"],
                })
              }
              required
            >
              <option value="WINDOWS">Windows workstation</option>
              <option value="MAC">Mac</option>
              <option value="LINUX">Linux</option>
            </select>
          </div>
          <div className="form-group">
            <label>HDD capacity (GB) *</label>
            <input
              id="hdd_capacity"
              type="number"
              value={formData.hdd_capacity}
              onChange={(e) =>
                setFormData({ ...formData, hdd_capacity: e.target.value })
              }
              required
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="cancel-button"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeviceForm;
