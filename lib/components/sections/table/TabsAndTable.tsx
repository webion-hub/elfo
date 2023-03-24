import { GetLedgersResponse } from "@/pages/api/InterfaceLedger";
import { Stack, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import MyTable from "./MyTable";



export default function TabsAndTable() {
  const [tab, setTab] = useState(0);

  const handleChange = (e: any, p: number) => {
    setTab(p)
    
  }

  const [tabs, setTabs] = useState<number[]>([]);

  useEffect(() => {
    fetch('/api/ledgers')
      .then(r => r.json())
      .then((r: GetLedgersResponse) => {
        setTabs(r
          .ledgers
          .map(l => l.year)
          .reverse()
        );
      });
  }, []);



  return (
    <Stack>
      <Tabs
        variant="scrollable"
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        onChange={handleChange}
        value={tab}
        //centered
      >
        {tabs.map((t, i) => {
          return <Tab label={t} key={i}/>
        })}
      </Tabs>
      <MyTable num={tab} year={tabs[tab]}></MyTable>
    </Stack>
  );
}