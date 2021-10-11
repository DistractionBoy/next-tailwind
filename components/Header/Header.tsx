import Navlinks from './Navlinks';
import UserMenu from './UserMenu';

export default function Header({ user }) {
	return (
		<header>
			<nav className="navlinks flex justify-between bg-gray-900 p-4">
				<Navlinks />
				<UserMenu user={user} />
			</nav>
		</header>
	);
}
