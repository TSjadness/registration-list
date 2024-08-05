import Image from 'next/image'
import { Table } from '.'



export type EmptyTableMessageProps = {
	type?: string
}
export function EmptyTableMessage({
	type = 'algum item',
}: EmptyTableMessageProps) {
	return (
		<Table.Row className="items-center justify-center align-middle">
			<Table.Cell colSpan={7}>
				<div className="flex h-80 w-full flex-row items-center justify-center gap-5 p-10 text-center align-middle">
					<Image
						src={'/images/empty_folder.png'}
						alt="Empty folder"
						width={90}
						height={90}
					/>
					<span className="font-inter text-left text-2xl font-normal text-[#A0AEC0]">
						Não há registros a serem exibidos no momento. Realize o cadastro de{' '}
						{type} e consulte novamente.
					</span>
				</div>
			</Table.Cell>
		</Table.Row>
	)
}
