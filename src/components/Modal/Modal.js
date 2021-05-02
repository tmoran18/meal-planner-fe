import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'

const Modal = ({
  children,
  isOpen,
  onOpen,
  onClose,
  modalTitle,
  modalButtonText,
}) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button
            type='submit'
            colorScheme='blue'
            mr={3}
            onClick={onClose}
            form='submit-form'
          >
            {modalButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
