import React from 'react'
import Link from 'next/link'

export default function Menu() {
	return (
		<ul className="flex items-center gap-8">
			<li className="">
				<Link href="/" className="font-medium text-primary">Home</Link>
			</li>
			<li className="">
				<Link href="/breeding" className="font-medium">Breeding</Link>
			</li>
			<li className="">
				<Link href="/" className="font-medium">Collection</Link>
			</li>
		</ul>
	)
}