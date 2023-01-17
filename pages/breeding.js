import {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { SmoothCorners } from 'react-smooth-corners'
import mix from 'mix-css-color'
import itemImage from '../public/images/item-1.png'
import logoImage from '../public/logo.svg'
import loveImage from '../public/love.svg'
import iconClose from '../public/icon-close.svg'
import {Layout, Container, Navbar, Item, ItemAdd, Modal, Button, SliderInput} from '../components'
import metadata from '../data/index.json'
import {eyeAssets, mouthAssets} from '../assets/index'

export default function Breeding() {
	const [openModal, setOpenModal] = useState(false)
	const [openBreed, setOpenBreed] = useState(false)
	const [items, setItems] = useState(metadata)
	const [maleItem, setMaleItem] = useState(null)
	const [femaleItem, setFemaleItem] = useState(null)
	const [genderSelected, setGenderSelected] = useState(null)
	const [slider, setSlider] = useState(50)
	const [itemNew, setItemNew] = useState(null)
	const [configItem, setConfigItem] = useState({
		colorPercentage: 50, 
		eyePercentage: 50, 
		mouthPercentage: 50, 
		color: [null, null],
		eye: [null, null],
		mouth: [null, null],
	})

	const _addItemToBreeding = (gender = null) => {
		setGenderSelected(gender)
		setOpenModal(!openModal)
	}

	const _setAttributeConfig = (color, eye, mouth, index) => {
		setConfigItem(prev => ({
			...prev,
			color: prev.color.map((_color, _index) => (
				index === _index ? color : _color
			)),
			eye: prev.eye.map((_eye, _index) => (
				index === _index ? eye : _eye
			)),
			mouth: prev.mouth.map((_mouth, _index) => (
				index === _index ? mouth : _mouth
			)),
		}))
	}

	const _selectedItem = (item) => {
		const color = item?.attributes[0].value;
		const eye = item?.attributes[1].value;
		const mouth = item?.attributes[2].value;
		
		if(genderSelected === 'male') {
			setMaleItem(item)
			_setAttributeConfig(color, eye, mouth, 0)
		}
		else {
			setFemaleItem(item)
			_setAttributeConfig(color, eye, mouth, 1)
		}

		setOpenModal(!openModal)
	}

	const _changeSliderValue = (e) => {
		const { name, value } = e.target
		setConfigItem({...configItem, [name]: value})
	}

	const _breedingNow = () => {
		const {
			colorPercentage, 
			eyePercentage, 
			mouthPercentage,
			color,
			eye,
			mouth
		} = configItem

		const mixColor = mix(color[0], color[1], colorPercentage)?.hex;
		const mixEye = eyePercentage > 50 ? eye[0] : eye[1];
		const mixMouth = mouthPercentage > 50 ? mouth[0] : mouth[1];
		const name = `Item #${metadata.length + 1}`
		const description = `new item result of breeding.`
		const mixItem = {
			name, 
			description, 
			attributes: [
				{trait_type : "Color", value :  mixColor},
				{trait_type : "Eye", value : mixEye},
				{trait_type : "Mouth", value : mixMouth}
			],
			eye: eyeAssets[mixEye.toLowerCase()],
			mouth: mouthAssets[mixMouth.toLowerCase()],
		}
		
		setOpenBreed(!openBreed)
		setItemNew(mixItem)
	}

	return (
		<Layout logoUrl={logoImage}>
      <Container >
        <div className="py-10">
          <h1 className="text-4xl font-bold text-center mb-16">Two of your lovely nft soon be parental</h1>
          <div className="relative mx-auto max-w-2xl">
	          <div className="absolute w-full h-full flex justify-center items-center">
	          	<div className="bg-white z-10 h-[100px] w-[100px] rounded-full shadow-lg flex items-end justify-center pb-4">
	          		<Image src={loveImage} width={60} alt="love" />
	          	</div>
          	</div>
	          <div className="grid grid-cols-2 gap-6 mb-8">
	           	{
	           		maleItem ?
	           		<Item imageUrl={maleItem.image} name={maleItem.name} /> :
	           		<ItemAdd onClick={() => _addItemToBreeding('male')} /> 
	           	}
	           	{
	           		femaleItem ?
	           		<Item imageUrl={femaleItem.image} name={femaleItem.name} /> :
	           		<ItemAdd onClick={() => _addItemToBreeding('female')} />
	           	}
	          </div>
          </div>
          {
          	maleItem && femaleItem &&
	          <div className="md:max-w-md mx-auto py-4">
		          <div className="grid grid-cols-3 flex items-end py-2">
			          <div className="col-span-1 pb-3">
			          	<div className="text-xl font-bold">Color</div>
			          </div>
			          <div className="col-span-2">
			          	<SliderInput
			          		name="colorPercentage" 
			          		value={configItem.colorPercentage}
			          		color={configItem.color}
			          		onChange={_changeSliderValue}
			          	/>
			          </div>
		          </div>
		          <div className="grid grid-cols-3 flex items-end py-2">
			          <div className="col-span-1 pb-3">
			          	<div className="text-xl font-bold">Eye</div>
			          </div>
			          <div className="col-span-2">
			          	<SliderInput
			          		name="eyePercentage" 
			          		value={configItem.eyePercentage}
			          		color={configItem.color}
			          		onChange={_changeSliderValue}
			          	/>
			          </div>
		          </div>
		          <div className="grid grid-cols-3 flex items-end py-2">
			          <div className="col-span-1 pb-3">
			          	<div className="text-xl font-bold">Mouth</div>
			          </div>
			          <div className="col-span-2">
			          	<SliderInput
			          		name="mouthPercentage" 
			          		value={configItem.mouthPercentage}
			          		color={configItem.color}
			          		onChange={_changeSliderValue}
			          	/>
			          </div>
		          </div>
	          </div>
          }
          {
          	!maleItem && !femaleItem ?
          	<div className="md:max-w-md mx-auto text-center">
          		Choose <span className="text-primary">two</span> of your items to <span className="text-primary">breed</span> them and get adorable babies 😍
          	</div> :
          	<div className="md:max-w-md mx-auto text-center">
          		<div className="mb-4">The offspring of the item you breed will likely have similar characteristics to its parents depending on the configuration you make.</div>
          		<Button 
          			label="Breeding Now"
          			onClick={_breedingNow}
          		/>
          	</div>
          }
        </div>
      </Container>
      {
      	openModal && 
      	<Modal onClose={_addItemToBreeding}>
      		<h1 className="text-4xl font-bold text-center mb-16">Choose two of your items to breed them</h1>
      		<div className="grid grid-cols-3 gap-6">
      		  {
      		    items.map((item, index) => 
      		      <Item 
      		      	key={index}
      		        imageUrl={item.image} 
      		        name={item.name} 
      		        onSelected={() => _selectedItem(item)}
      		      />
      		    )
      		  }
      		</div>
      	</Modal>
     	}
     	 {
     	 	openBreed && 
     	 	<Modal onClose={() => setOpenBreed(!openBreed)}>
     	 		<h1 className="text-4xl font-bold text-center mb-16">Congratulations on the birth of your baby</h1>
     	 		{
     	 			itemNew &&
     	 			<>
	     	 			<div className="relative mx-auto w-[250px] h-[250px] rounded-[20px] bg-grey mb-4">
			          <div className="absolute w-full h-full flex justify-center -top-[50px]">
			          	<div className="bg-white z-10 h-[100px] w-[100px] rounded-full shadow-lg flex items-end justify-center pb-4">
			          		<Image src={loveImage} width={60} alt="love" />
			          	</div>
		          	</div>
		     	 			<div 
		     	 				style={{'backgroundColor': itemNew.attributes[0].value}}
		     	 				className="absolute w-full h-full rounded-[20px]" 
		     	 			/>
		     	 			<Image className="absolute" src={itemNew.eye} width={250} height={250} alt={itemNew.name} />
		     	 			<Image className="absolute" src={itemNew.mouth} width={250} height={250} alt={itemNew.name} />
	     	 			</div>
	     	 			<div className="text-center">
		     	 			<div className="text-lg font-bold mb-4">
		     	 				{itemNew.name}
		     	 			</div>
		     	 			<div className="text-base md:max-w-sm mx-auto mb-2">
		     	 				Sell your tiny baby now and get additional benefits from this item 😍
		     	 			</div>
		     	 			<Button label="Sell Now!"/>
	     	 			</div>
     	 			</>
     	 		}
     	 	</Modal>
     		}
    </Layout>
	)
}