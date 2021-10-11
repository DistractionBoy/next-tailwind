import Link from 'next/link';

export default function UserMenu({ user }) {
	console.log('user is', user.name);
	return (
		<div className="p-2">
			<Link href="/profile">
				<span>{user.name}</span>
			</Link>
		</div>
	);
}
