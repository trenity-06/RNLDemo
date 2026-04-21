import UserList from "./components/UserList";
import AddUserFormModal from "./components/AddUserFormModal";
import { useModal } from "../../hooks/useModal";
import { useToastMessage } from "../../hooks/useToastMessage";
import ToastMessage from "../../components/ToastMessage/ToastMessage";
import EditUserFormModal from "./components/EditUserFormModal";
import { useRefresh } from "../../hooks/useRefresh";

const UserMainPage = () => {
 const { 
    isOpen: isAddUserFormModalOpen, 
    openModal: openAddUserFormModal, 
    closeModal: closeAddUserFormModal 
  } = useModal(false);

  const {
    message: toastMessage,
    isVisible: toastMessageIsVissible,
    showToastMessage,
    closeToastMessage
  } = useToastMessage("", false);

  const { 
    isOpen: isEditUserFormModalOpen, 
    selectedUser, 
    openModal: openEditUserFormModal, 
    closeModal: closeEditUserFormModal 
  } = useModal(false);

const { refresh, handleRefresh } = useRefresh(false);

  return (
    <>
      <ToastMessage
        message={toastMessage}
        isVisible={toastMessageIsVissible}
        onClose={closeToastMessage}
      />
      <AddUserFormModal
        onUserAdded={showToastMessage}
        refreshKey={handleRefresh}
        isOpen={isAddUserFormModalOpen}
        onClose={closeAddUserFormModal}
      />
      <EditUserFormModal 
      user={selectedUser} 
      onUserUpdated={showToastMessage} 
      refreshKey={handleRefresh} 
      isOpen={isEditUserFormModalOpen} 
      onClose={closeEditUserFormModal}/>
      <UserList 
      onAddUser={openAddUserFormModal} 
        onEditUser={(user) => openEditUserFormModal(user)} 
      refreshKey={refresh}/>
    </>
  );
};

export default UserMainPage;