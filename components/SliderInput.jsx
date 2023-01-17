import React from 'react'

export default function SliderInput({name, id, value, color, onChange}) {
	const leftValue = value
	const rightValue = 100 - value
	const leftColor = color ? color[0] : '#eee';
	const rightColor = color ? color[1] : '#eee';
	return (
		<div>
			<div className="flex justify-between">
    		<div className="text-base mb-2">{leftValue}%</div>
    		<div className="text-base mb-2">{rightValue}%</div>
      </div>
      <div className="relative">
      	<div style={{'width' : `${leftValue}%`, 'backgroundColor': leftColor}} className="absolute left-0 h-[50px] rounded-l-[10px]" />
      	<div style={{'width' : `${rightValue}%`, 'backgroundColor': rightColor}} className="absolute right-0 h-[50px] rounded-r-[10px]" />
	      <input 
	      	className="slider" 
	      	type="range" 
	      	id={id} 
	      	name={name} 
	      	min="0" 
	      	max="100" 
	      	value={value} 
	      	onChange={onChange} 
	      />
      </div>

     
		</div>
	)
}