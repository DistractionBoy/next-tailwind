import Link from 'next/link';

export default function Navlinks() {
	return (
		<div className="p-2">
			<Link href="/">Home</Link>
			<Link href="/blog">Blog</Link>
		</div>
	);
}
