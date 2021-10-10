import Link from 'next/link';

export default function IndexPage() {
	return (
		<div className="bg-red-500">
			Hello World
			<Link className="text-red-500" href="/about">
				About
			</Link>
		</div>
	);
}
