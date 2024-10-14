import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Home() {
	return (
		<main>
			<SignedOut>
				<SignInButton />
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
			<h1>Yang lainnya mana?</h1>
		</main>
	);
}
