import { ContentTable, tabelle } from "@/lib/ContentTable";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface NTable
{
    num: number;
}


export default function MyTable(props: NTable){
    return (
        <TableContainer sx={{maxHeight: 450}}>
            <Table stickyHeader size='medium' aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Data </TableCell>
                        <TableCell>Chi</TableCell>
                        <TableCell>Causale</TableCell>
                        <TableCell>Progetto/Note</TableCell>
                        <TableCell>Entrate</TableCell>
                        <TableCell>Uscite</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {tabelle[props.num].map((items) => (
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>{items.data}</TableCell>
                        <TableCell >{items.chi}</TableCell>
                        <TableCell>{items.causale}</TableCell>
                        <TableCell>{items.progetto}</TableCell>
                        <TableCell>{items.entrate}</TableCell>
                        <TableCell>{items.uscite}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}