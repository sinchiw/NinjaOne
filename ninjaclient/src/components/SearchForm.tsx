import React, {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import {
  MenuItem,
  TextField,
  Select,

  FormControl,
} from "@mui/material";
import type { Device } from "../model/device";
import "../css/searchform.css";
import refresh from "../assets/refresh.svg";

interface SearchFormProps {
  devices: Device[];
  setFilteredDevices: Dispatch<SetStateAction<Device[]>>;
  getAllDevice: () => Promise<void>;
}

const SearchForm = ({ devices, setFilteredDevices, getAllDevice }: SearchFormProps) => {
  const [filter, setFilter] = useState("");
  const [deviceType, setDeviceType] = useState("All");
  const [sortBy, setSortBy] = useState("Descending");


  useEffect(()=> {
    if(devices.length === 0) return;
    const filterDevices = (filter: string, sortBy: string, deviceType: string) => {
      let devicesFilter = [...devices];

      if (filter) {
        devicesFilter = devicesFilter.filter((device) => {
          return device.system_name.toLowerCase().includes(filter.toLowerCase());
        });
      }
  
      if (deviceType !== "All") {
        devicesFilter = devicesFilter.filter((device) => {
          return device.type.toLowerCase() === deviceType.toLowerCase();
        });
      }
  
      if (sortBy === "Ascending") {
        devicesFilter.sort((a, b) => {
          return Number(a.hdd_capacity) - Number(b.hdd_capacity);
        });
      } else {
        devicesFilter.sort((a, b) => {
          return Number(b.hdd_capacity) - Number(a.hdd_capacity);
        });
      }
  
      setFilteredDevices(devicesFilter);
    };
    filterDevices(filter, sortBy, deviceType);
  }, [filter, deviceType, sortBy, devices, setFilteredDevices])

  const refreshPage = async () => { 
    setFilter("");
    setDeviceType("All");
    setSortBy("Descending");
    await getAllDevice();
  }

  return (
    <div className="device-search-container">
      <div className="device-list-filters-container">
        <TextField
          variant="outlined"
          label="Search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size="small"
          fullWidth
          style={{ width: "200px" }}
        />
        <FormControl size="small" fullWidth style={{ width: "230px" }}>
          <Select
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
            displayEmpty
            inputProps={{
              "aria-label": "Without label",
              style: {
                fontSize: "14px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
            }}
          >
            <MenuItem value="All">Device Type: All</MenuItem>
            <MenuItem value="Windows">Device Type: Windows</MenuItem>
            <MenuItem value="Linux">Device Type: Linux</MenuItem>
            <MenuItem value="Mac">Device Type: Mac</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" fullWidth style={{ width: "350px" }}>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            displayEmpty
            inputProps={{
              "aria-label": "Without label",
              style: {
                fontSize: "14px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
            }}
          >
            <MenuItem value="Descending">
              Sort by: HDD Capacity (Descending)
            </MenuItem>
            <MenuItem value="Ascending">
              Sort by: HDD Capacity (Ascending)
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <button className="resfresh-button" >
        <img src={refresh} alt="refresh icon" className="refresh-icon" onClick={refreshPage} />
      </button>
    </div>
  );
};

export default SearchForm;
