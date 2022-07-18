import { Image, Modal } from "native-base";
import { useWindowDimensions } from "react-native";

const ModalPhoto = ({ modalVisible, setModalVisible, imageModal, setImageModal, window }) => {
  const BG_COLOR = "rgba(0, 0, 0, 0.8)";

  return (
    <Modal
      onClose={() => {
        setModalVisible(!modalVisible);
      }}
      size="full"
      backgroundColor={BG_COLOR}
      isOpen={modalVisible}
    >
      <Modal.CloseButton />
      <Modal.Body>
        <Image
          alt='hello'
          source={{
            width: window.width - 32,
            height: (window.width - 32) * (imageModal.height / imageModal.width),
            uri: imageModal.download_url
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalPhoto;
