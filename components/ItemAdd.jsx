import Image from 'next/image'
import Icon from './Icon'
import iconPlus from '../public/icon-plus.svg'

export default function ItemAdd({onClick}) {
	return (
		<div onClick={onClick} className="relative w-full h-0 pb-[100%] rounded-[40px] bg-grey flex cursor-pointer">
			<div className="absolute w-full h-full flex justify-center items-center">
				<Icon 
					icon={iconPlus}
					width={40} 
					height={40}
				/>
			</div>
		</div>
	)
}