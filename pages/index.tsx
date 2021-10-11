import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import Header from '../components/Header/Header.tsx';
import { User } from '../types/User';

export const getServerSideProps: GetServerSideProps = async (): {
	user: User;
} => {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users/1'
		);
		const user = await response.json();
		return { props: { user: user } };
	} catch (e) {
		console.log(e);
		return { props: { user: null } };
	}
};

export default function Home({
	user
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return user ? (
		<div className="flex flex-col h-screen bg-gray-800 text-gray-100">
			<Header user={user} />
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
	) : (
		<div>Error</div>
	);
}
