import Image from 'next/image'
import Button from './Button'
import logoEthImage from '../public/logo-eth.svg'

export default function Item({imageUrl, name, price, onSelected}) {
	return (
		<div className="cursor-pointer">
		  <div className="relative mb-2 w-full h-0 pb-[100%] bg-primary rounded-[40px] overflow-hidden">
		    <Image className="w-full object-cover" layout="fill" src={imageUrl} alt="item"/>
		  </div>
		  <div className="flex flex-col items-center">
		    <div className="text-lg font-bold">{name}</div>
		    {
		    	price &&
		    	<div className="flex items-center gap-2">
		    	  <Image 
		    	  	src={logoEthImage} 
		    	  	width={24} 
		    	  	height={24} 
		    	  	alt="item"
		    	  />
		    	  <div className="font-medium">{price}</div>
		    	</div>
		    }
		    {
		    	onSelected &&
		    	<div className="py-4">
		    		<Button label="Select" onClick={onSelected}/>
		    	</div>
			}
		  </div>
		</div>
	)
}