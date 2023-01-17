import Container from './Container'
import Brand from './Brand'
import Menu from './Menu'
import Button from './Button'

export default function Navbar({logoUrl}) {
	return (
		<div className="bg-grey py-4">
			<Container>
				<div className="flex items-center justify-between">
					<Brand brand="Breedly" logoUrl={logoUrl} />
					<div className="flex items-center gap-8">
						<Menu/>
						<Button label="Connect Wallet" />
					</div>	
				</div>	
			</Container>
		</div>
	)
}