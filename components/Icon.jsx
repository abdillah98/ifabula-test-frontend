import Image from 'next/image'

export default function Icon({icon, width, height, onClick}) {
	const size = !width || !height ? 'w-[24px] h-[2px]' : `w-[${width}px] h-[${height}px]`
	return (
		<button 
			type="button" 
			className={`${size} items-center justify-center`}
			onClick={onClick}
		>
			<Image src={icon} width={width} height={height} alt="icon"/>
		</button>
	)
}