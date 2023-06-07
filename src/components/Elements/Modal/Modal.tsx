import { Modal as ChakraModal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { PropsWithChildren, ReactNode } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    header?: string
    //initialFocus?: React.MutableRefObject<null>;
  };

export const Modal = (
    { 
        isOpen, 
        onClose, 
        children, 
        header 
    }: PropsWithChildren<ModalProps>) => {
    return (
        <ChakraModal isOpen={isOpen} onClose={onClose} size={"lg"}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                {children}
            </ModalContent>
        </ChakraModal>
    )
}

const Header = ({ children }) => {
    return <ModalHeader>{children}</ModalHeader>
}

const Body = ({ children }) => {
    return <ModalBody>{children}</ModalBody>
}

const Footer = ({ children }) => {
    return <ModalFooter px={6} py={5}>{children}</ModalFooter>
}

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer

//export default Modal