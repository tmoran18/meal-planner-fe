import { Image } from '@chakra-ui/image'
import { Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

const Meal = (props) => {
  return (
    <Flex flexDir='column'>
      <Text>{props.secondary_title}</Text>
      <Image src={props.image_URL} />
      {props.steps &&
        props.steps.map((step, index) => (
          <div>
            <h3>{`Step ${index + 1}`}</h3>
            <p>{step}</p>
          </div>
        ))}
    </Flex>
  )
}

export default Meal
