import Icon from './Icon'
import iconClose from '../public/icon-close.svg'

export default function Modal({children, onClose}) {
	return (
		<div className="fixed w-full h-full top-0 left-0 bottom-0 backdrop-blur-sm bg-white/10 z-20 flex items-start px-6 py-6 md:px-0 md:py-8 overflow-y-auto">
			<div className="bg-white mx-auto max-w-full md:max-w-4xl lg:max-w-6xl rounded-[20px] md:rounded-[40px] shadow-lg p-6 md:p-8">
				<div className="flex justify-end items-center mb-8">
					<Icon 
						icon={iconClose} 
						width={24} 
						height={24}
						onClick={onClose}
					/>
				</div>
				<div>
					{children}
				</div>
			</div>
		</div>
	)
}