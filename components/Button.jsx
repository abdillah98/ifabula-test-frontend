import React from 'react'

export default function Button({label, onClick}) {
	return (
		<button
			type="button"
			className="px-8 py-4 bg-primary text-white font-semibold rounded-xl"
			onClick={onClick}
		>
			{label}
		</button>
	)
}