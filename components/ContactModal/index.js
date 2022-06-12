import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Textarea } from "@chakra-ui/textarea";
import { useToast } from "@chakra-ui/toast";
import { useForm } from "react-hook-form";

const ContactModal = ({ isOpen, onClose }) => {
  const toast = useToast();
  const onSubmit = asnyc => { }

  if (!isOpen) {
    return <></>;
  }
  if (!mentor) {
    return <>No mentor</>;
  }
  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Send email to {mentee.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mt={4}>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Textarea {...register("subject")} id="subject" rows={6} />
              <FormHelperText>
                Your mentor at Tupu
              </FormHelperText>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="cc">CC</FormLabel>
              <Textarea {...register("cc")} id="cc" rows={6} />
              <FormHelperText>
                team@tupu.io, youremail@gmail.com
              </FormHelperText>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <Textarea {...register("message")} id="message" rows={6} />
              <FormHelperText>
                Get in contact with the mentee, establish a first session and see if you are a good fit.
              </FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={"grayButton"} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" colorScheme={"blueButton"}>
              Send email
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;