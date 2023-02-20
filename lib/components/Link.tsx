import { useNextNavigator } from "@/hooks/useNextNavigator";
import { navBarContents } from "@/lib/components/NavBar";
import { Button, Stack } from "@mui/material";
import * as React from 'react';


export default function Link() {
	const { clickNavigate } = useNextNavigator();

	return (
		<Stack
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between'
			}}>
			<Stack spacing={2}>
				{navBarContents.slice(0, 4).map((items, i) => (
					<Button
						key={items.name}
						color="info"
						href={items.path}
						onClick={clickNavigate(items.path)}
						sx={{ justifyContent: 'left' }}
					>
						{items.name}
					</Button>

				))}
			</Stack>
			<Stack spacing={2}>
				{navBarContents.slice(4, 8).map((items, i) => (
					<Button
						key={items.name}
						color="info"
						href={items.path}
						onClick={clickNavigate(items.path)}
						sx={{ justifyContent: 'left' }}
					>
						{items.name}
					</Button>

				))}
			</Stack>
		</Stack>
	);
}