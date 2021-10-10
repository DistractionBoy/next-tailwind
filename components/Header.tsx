import Link from 'next/link';

export default function Header({ id: string }) {
	return (
		<header>
			<nav className="navlinks flex flex-inline bg-gray-900 p-4">
				<Link href="/about">About</Link>
				<Link href="/test">Test</Link>
			</nav>
		</header>
	);
}
