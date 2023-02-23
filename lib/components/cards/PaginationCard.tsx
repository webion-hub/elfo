
import { contentNotizie } from "@/lib/components/other/ContentsNotizie";
import { Pagination, Stack } from "@mui/material";
import { SetStateAction, useState } from "react";
import BigElfoCard from "./BigElfoCard/BigElfoCard";

interface Contenuti {
	readonly count: number;
}

export default function PaginationCard(props: Contenuti) {
	const [page, setPage] = useState(1);

	const elems = 10;
	const pages = props.count

	const index = (page - 1) * elems;
	const data = [...contentNotizie].slice(index, index + elems)

	const handleChange = (_e: any, p: number) => {
		setPage(p)
	}

	return (
		<Stack
			direction="column"
			alignItems={'center'}
		>
			{data.map((item, index) => (
				<BigElfoCard
					key={index}
					img={item.img}
					data={item.data}
					title={item.title}
					text={item.title}
					sx={{ marginTop: 5 }}
				/>
		))}
			<Pagination
				sx={{ marginTop: 10 }}
				count={pages}
				color="primary"
				size='large'
				onChange={handleChange}
			/>
		</Stack>
	);
}