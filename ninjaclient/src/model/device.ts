type DeviceType = "WINDOWS" | "MAC" | "LINUX";

export interface Device {
    id: string;
    system_name: string;
    type: DeviceType;
    hdd_capacity: string;
}

export interface DeviceFormData {
    system_name: string
    type: Device["type"]
    hdd_capacity: string
  }