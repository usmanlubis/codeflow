import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function GlobalSearch() {
	return (
		<div className="relative w-full max-w-[600px] max-lg:hidden">
			<div className="background-light800_darkgradient relative flex min-h-[50px] grow items-center gap-1 rounded-xl px-4">
				<Image
					src="/assets/icons/search.svg"
					alt="search"
					height={24}
					width={24}
					className="cursor-pointer"
				/>

				<Input
					type="text"
					placeholder="Search"
					value=""
					className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
				/>
			</div>
		</div>
	);
}
