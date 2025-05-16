# Devices Task

This repository contains both a **client** and a **server** application that work together to display and manage a list of devices. Below you will find instructions for installation, setup, and usage, as well as a summary of features and potential future improvements.

---

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v12 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

---

## Installation & Setup

1. **Download this Repository**  
   - Clone the project or download

2. **Install Dependencies for the Client**  
   - Navigate to the `ninjaclient` directory:
     ```bash
     cd ninjaclient
     ```
   - Install the necessary packages:
     ```bash
     npm install
     ```

3. **Install Dependencies for the Server**  
   - Navigate to the `devicesTask_serverApp` directory:
     ```bash
     cd devicesTask_serverApp
     ```
   - Install the necessary packages:
     ```bash
     npm install
     ```

---

## Running the Applications

1. **Start the Server**  
   - From the `devicesTask_serverApp` directory, run:
     ```bash
     npm start
     ```
   - This command will spin up the backend server.

2. **Start the Client**  
   - In a separate terminal, return to the `ninjaclient` directory:
     ```bash
     cd ninjaclient
     npm start
     ```
   - This command will open a browser window or tab (typically at [http://localhost:3000](http://localhost:3000)) where you should see the list of devices on initial load.
---

## Application Functionality

### Search & Filter
- **Search by System Name**: Use the text input in the search section to filter devices by their system name.
- **Filter by Device Type**: Use the first dropdown to show only a specific device type (e.g., Windows, Mac, etc.).
- **Sort by GB (Ascending/Descending)**: Use the second dropdown to sort the devices by their storage capacity, in ascending or descending order.
- **Combining Filters**: These filters can be used together, allowing you to refine the list according to multiple criteria simultaneously.
- **Refresh Button**: Near the search form, there is a refresh button that would fetch the latest data and reset the filter input back to default.

### Add a New Device
- **Add Device Button**: Click the **Add Device** button to create a new device.
- **Auto-Updating List**: Newly added devices will appear in the list according to the current filter or sorting options (or default if no filters/sorting are applied).

### Edit or Delete a Device
- **Hover Menu**: Hover over any device item in the list to reveal a three-dot (hamburger) menu.
- **Edit**: Update an existing device’s details.
- **Delete**: Remove the device from the list.

---
<img width="902" alt="Screenshot 2025-05-15 at 10 38 20 PM" src="https://github.com/user-attachments/assets/020c597d-caf3-4498-af0b-3d795b511296" />

**Thank you for checking out this project!**  
