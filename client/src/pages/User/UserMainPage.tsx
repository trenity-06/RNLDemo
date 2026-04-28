import UserList from "./components/UserList";
import AddUserFormModal from "./components/AddUserFormModal";
import { useModal } from "../../hooks/useModal";
import { useToastMessage } from "../../hooks/useToastMessage";
import ToastMessage from "../../components/ToastMessage/ToastMessage";
import EditUserFormModal from "./components/EditUserFormModal";
import { useRefresh } from "../../hooks/useRefresh";
import DeleteUserFormModal from "./components/DeleteUserFormModal";

const UserMainPage = () => {
  const {
    isOpen: isAddUserFormModalOpen,
    openModal: openAddUserFormModal,
    closeModal: closeAddUserFormModal
  } = useModal(false);

  const {
    isOpen: isEditUserFormModalOpen,
    selectedUser: selectedUserForEdit,
    openModal: openEditUserFormModal,
    closeModal: closeEditUserFormModal
  } = useModal(false);

  const {
    isOpen: isDeleteUserFormModalOpen,
    selectedUser: selectedUserForDelete,
    openModal: openDeleteUserFormModal,
    closeModal: closeDeleteUserFormModal
  } = useModal(false);

  const {
    message: toastMessage,
    isVisible: toastMessageIsVissible,
    showToastMessage,
    closeToastMessage
  } = useToastMessage('', false, false);

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
        user={selectedUserForEdit}
        onUserUpdated={showToastMessage}
        refreshKey={handleRefresh}
        isOpen={isEditUserFormModalOpen}
        onClose={closeEditUserFormModal}
      />
      <DeleteUserFormModal
        user={selectedUserForDelete}
        onUserDeleted={showToastMessage}
        refreshKey={handleRefresh}
        isOpen={isDeleteUserFormModalOpen}
        onClose={closeDeleteUserFormModal}
      />
      <UserList
        onAddUser={openAddUserFormModal}
        onEditUser={(user) => openEditUserFormModal(user)}
        onDeleteUser={(user) => openDeleteUserFormModal(user)}
        refreshKey={refresh}
      />
    </>
  );
};

export default UserMainPage;