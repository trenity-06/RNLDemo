import UserList from "./components/UserList";
import AddUserFormModal from "./components/AddUserFormModal";
import { useModal } from "../../hooks/useModal";
import { useToastMessage } from "../../hooks/useToastMessage";
import ToastMessage from "../../components/ToastMessage/ToastMessage";

const UserMainPage = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const {
    message: toastMessage,
    isVisible: toastMessageIsVissible,
    showToastMessage,
    closeToastMessage
  } = useToastMessage('', false);

  return (
    <>
      <ToastMessage
        message={toastMessage}
        isVisible={toastMessageIsVissible}
        onClose={closeToastMessage}
      />
      <AddUserFormModal
        onUserAdded={showToastMessage}
        isOpen={isOpen}
        onClose={closeModal}
      />
      <UserList onAddUser={openModal} />
    </>
  );
};

export default UserMainPage;