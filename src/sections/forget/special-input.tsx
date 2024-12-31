'use client'

import React, { useState, useRef } from 'react'

export default function CodeInput({ length = 5, onComplete, onIncomplete }: { length: number; onComplete: (code: string) => void; onIncomplete: () => void }) {

	// states ------------------------------------------------------------------------------------------------------------------------------
	const [values, setValues] = useState(Array(length).fill('')) // Array to hold input values
	const inputsRef = useRef<Array<HTMLInputElement | null>>([])

	// handlers ------------------------------------------------------------------------------------------------------------------------------
	const handleChange = (index: number, value: string) => {
		if (!value.match(/^[0-9]$/)) return // Allow only alphanumeric characters
		const newValues = [...values]
		newValues[index] = value
		setValues(newValues)
		// Move to the next input
		if (index < length - 1 && value) {
			inputsRef.current[index + 1]?.focus()
		}
		// If all inputs are filled, trigger the onComplete callback
		if (newValues.every((char) => char !== '')) {
			onComplete(newValues.join(''))
		}
	}

	const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
		if (event.key === 'Backspace') {
			const newValues = [...values]
			newValues[index] = ''
			setValues(newValues)
			// Move to the previous input
			if (index > 0) {
				inputsRef.current[index - 1]?.focus()
				onIncomplete()
			}
		}
	}

	return (
		<div className="flex justify-between">
			{values.map((value, index) => (
				<input
					key={index}
					ref={(el) => (inputsRef.current[index] = el)} // sets the input element, to its index position in the inputsRef array
					type="text"
					maxLength={1}
					value={value}
					onChange={(e) => handleChange(index, e.target.value)}
					onKeyDown={(e) => handleKeyDown(index, e)}
					className="w-14 h-14 text-center border-2 border-[#E1E1E1] rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#47C666] focus:border-none"
				/>
			))}
		</div>
	)
}
