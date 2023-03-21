import { Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import MyTable from "./MyTable";



export default function TabsAndTable() {
  const [tab, setTab] = useState(0);



  const handleChange = (e: any, p: number) => {
    setTab(p)

  }

  return (
    <Stack>
      <Tabs
        variant="scrollable"
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        onChange={handleChange}
        value={tab}
        centered
      >
        <Tab label="2023" />
        <Tab label="2022" />
        <Tab label="2021" />
        <Tab label="2020" />
        <Tab label="2019" />
        <Tab label="2018" />
        <Tab label="2017" />
        <Tab label="2016" />
      </Tabs>
      <MyTable num={tab}></MyTable>
    </Stack>
  );
}