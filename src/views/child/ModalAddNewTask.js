import { useState } from "react";
import API from "../../api/API";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputLabel from "../../components/InputLabel";
import ModalBody from "../../components/ModalBody";
import ModalContent from "../../components/ModalContent";
import ModalFooter from "../../components/ModalFooter";

export default function ModalAddNewTask({
    show = false,
    onHideModal = () => {},
    groupID = "",
    setStateReload,
}) {
    const [newTask, setNewTask] = useState({ name: "", progress: "" });

    function createToDo() {
        if (!groupID || !newTask.name || !newTask.progress) {
            alert("Task Group ID, name, and progress must not empty!");
            return;
        }
        API.postCreateItem(groupID, newTask.name, parseInt(newTask.progress))
            .then(() => {
                alert(newTask.name + " - Task Created!");
                setNewTask({ name: "", progress: "" });
                onHideModal(false);
                if (setStateReload) setStateReload(new Date().getTime());
            })
            .catch((err) => {
                alert(err);
            });
    }
    return (
        <ModalBody show={show} onHideModal={onHideModal} title="Create Task">
            <ModalContent>
                <div style={{ marginBottom: "16px" }}>
                    <InputLabel>Task Name</InputLabel>
                    <Input
                        placeholder="Type your task"
                        value={newTask.name}
                        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                    />
                </div>
                <div style={{ width: "143px" }}>
                    <InputLabel>Progress</InputLabel>
                    <Input
                        type="number"
                        placeholder="70%"
                        value={newTask.progress}
                        onChange={(e) => setNewTask({ ...newTask, progress: e.target.value })}
                    />
                </div>
            </ModalContent>
            <ModalFooter>
                <Button onClick={() => onHideModal(false)}>Cancel</Button>
                <Button color="primary" onClick={createToDo}>
                    Save Task
                </Button>
            </ModalFooter>
        </ModalBody>
    );
}
