import Navbar from './Navbar'

export default function Layout({children, logoUrl}) {
	return (
		<div>
			<Navbar logoUrl={logoUrl} />
			<main>{children}</main>
		</div>
	)
}