import React from 'react'
import Image from 'next/image'

export default function Brand({logoUrl, brand}) {
	return (
		<div className="flex items-center">
			<Image 
				src={logoUrl} 
				width={40} 
				height={40} 
				alt="logo"
				className="mr-2"
			/>
			<span className="font-bold text-lg">{brand}</span>
		</div>
	)
}