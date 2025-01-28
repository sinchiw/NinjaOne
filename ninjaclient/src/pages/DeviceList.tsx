import React, { useEffect, useState } from "react";
import Layout from "../components/Layout.tsx";
import DeviceForm from "../components/DeviceForm.tsx";
import DeviceDeleteForm from "../components/DeviceDeleteForm.tsx";
import SearchForm from "../components/SearchForm.tsx";
import DeviceResult from "../components/DeviceResult.tsx";
import axios from "axios";
import { Device } from "../model/device.ts";
import plus from "../assets/plus.svg";
import "../css/devicelist.css";

const DeviceList = () => {

  const [devices, setDevices] = useState<Device[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);

  useEffect(() => {
    getAllDevice();
  }, []);


  const getAllDevice = async (): Promise<void> => {
    try {
      const { data } = await axios.get("devices");
      setDevices(data);
      setFilteredDevices(data);
    } catch (e) {
      console.log('Error when fetching data',e);
    }
  };

  return (
    <Layout>
      <div className="device-list">
        <div className="device-list-header">
          <h3 className="device-list-header-title-text">Devices</h3>
          <button
            className="add-device"
            onClick={() => {
              setSelectedDevice(null);
              setIsFormOpen(true);
            }}
          >
            <img
              src={plus}
              alt="Plus icon in gray, representing to add device"
              className="add-device-icon"
            />
            Add device
          </button>
        </div>
        <SearchForm devices={devices} setFilteredDevices={setFilteredDevices} getAllDevice ={getAllDevice}/>
        <DeviceResult filteredDevices={filteredDevices} setIsFormOpen ={setIsFormOpen} setSelectedDevice={setSelectedDevice} setIsDeleteFormOpen={setIsDeleteFormOpen} />
        {isFormOpen && (
          <DeviceForm
            device={selectedDevice}
            setIsFormOpen={setIsFormOpen}
            setSelectedDevice={setSelectedDevice}
            getAllDevice={getAllDevice}
          />
        )}
        {isDeleteFormOpen && (
          <DeviceDeleteForm
            device={selectedDevice}
            setIsDeleteFormOpen={setIsDeleteFormOpen}
            setSelectedDevice={setSelectedDevice}
            getAllDevice={getAllDevice}
          />
        )}
      </div>
    </Layout>
  );
};

export default DeviceList;
