import { GetLedgerResponse, Movement } from "@/pages/api/InterfaceLedger";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

interface NTable {
  readonly num: number;
  readonly year: number;
}


export default function MyTable(props: NTable) {
  const [movements, setMovements] = useState<Movement[]>([]);
  
  useEffect(() => {
    fetch(`/api/ledgers/${props.year}`)
      .then(r => r.json())
      .then((r: GetLedgerResponse) => {
        setMovements(r.ledger.movements);
      });
  }, [props.year]);

  
  return (
    <div 
      style={{
        overflowX: 'auto'
      }}
      >
      <TableContainer>
        <Table
          stickyHeader
          size='medium'
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Chi</TableCell>
              <TableCell>Causale</TableCell>
              <TableCell>Progetto/Note</TableCell>
              <TableCell>Entrate</TableCell>
              <TableCell>Uscite</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {movements.map((items, index) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                key={index}
              >
                <TableCell>{new Date(items.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{items.from}</TableCell>
                <TableCell>{items.reason}</TableCell>
                <TableCell>{items.notes}</TableCell>
                <TableCell
                  style={{color: items.type === 'in' 
                    ? 'green' 
                    : 'red'}}
                >
                  {items.type === 'in' 
                    ? `${items.amount}€` 
                    : ''}
                </TableCell>
                <TableCell 
                  style={{color: items.type === 'in' 
                  ? 'green' 
                  : 'red'}}
                >
                  {items.type === 'out' 
                    ? `${items.amount}€` 
                    : ''}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}