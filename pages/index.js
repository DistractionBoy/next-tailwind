import Link from 'next/link';

export default function IndexPage() {
	return (
		<div className="flex flex-col h-screen bg-gray-800 text-gray-100">
			<header>
				<nav className="navlinks flex flex-inline bg-gray-900 p-4">
					<Link href="/about">About</Link>
					<Link href="/test">Test</Link>
				</nav>
			</header>
			<section className="p-4">
				<h1 className="text-2xl">The Title</h1>
				<p className="pt-2">
					This is a paragraph that says a bunch of stuff and is really long
					sometimes. It goes on and on and hopefully has enough letters that you
					can just sit back and enjoy all the glorious space it creates on the
					page
				</p>
			</section>
		</div>
	);
}
