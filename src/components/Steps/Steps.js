import React from 'react'
import { Textarea, Text, Button, list } from '@chakra-ui/react'

const Steps = ({ addSteps, steps }) => {
  let [value, setValue] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  const onSubmit = () => {
    addSteps(value)
    setValue('')
  }

  return (
    <>
      <Text mb='8px'>{`Step ${steps.length + 1}`}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
      <Button onClick={onSubmit}>Add Step</Button>
      {steps.length !== 0 && (
        <ul>
          {steps.map((step, index) => (
            <li key={index}>
              <h2>{`Step ${index + 1}`}</h2>
              <p>{step}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Steps
