import { FaExclamationTriangle } from "react-icons/fa";
import API from "../../api/API";
import Button from "../../components/Button";
import ModalBody from "../../components/ModalBody";
import ModalContent from "../../components/ModalContent";
import ModalFooter from "../../components/ModalFooter";
import { COLORS } from "../../constants/colors";

export default function ModalDeleteTask({
    show = false,
    onHideModal = () => {},
    groupID = "",
    taskID = "",
    setStateReload,
}) {
    function deleteTask() {
        if (!groupID || !taskID) {
            alert("Task ID and Group ID must not empty!");
            return;
        }
        API.deleteItem(groupID, taskID)
            .then(() => {
                alert("Task Deleted!");
                onHideModal(false);
                if (setStateReload) setStateReload(new Date().getTime());
            })
            .catch((err) => {
                alert(err);
            });
    }
    return (
        <ModalBody
            show={show}
            onHideModal={onHideModal}
            title={
                <>
                    <FaExclamationTriangle
                        color={COLORS.DANGER.MAIN}
                        size={20}
                        style={{ marginRight: "12px" }}
                    />
                    Delete Task
                </>
            }
        >
            <ModalContent>
                Are you sure want to delete this task? your action can't be reverted.
            </ModalContent>
            <ModalFooter>
                <Button onClick={() => onHideModal(false)}>Cancel</Button>
                <Button color="danger" onClick={deleteTask}>
                    Delete
                </Button>
            </ModalFooter>
        </ModalBody>
    );
}
