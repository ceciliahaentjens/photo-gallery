import { Image, Modal } from "native-base";

const ModalPhoto = () => {
  const BG_COLOR = "rgba(0, 0, 0, 0.8)";

  return (
    <Modal onClose={() => {}} size="full" backgroundColor={BG_COLOR}>
      <Modal.CloseButton />
      <Modal.Body>
        <Image
          alt="test"
          source={{
            width: "",
            height: "",
            uri: "",
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalPhoto;
