import { useState } from "react";
import API from "../../api/API";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputLabel from "../../components/InputLabel";
import ModalBody from "../../components/ModalBody";
import ModalContent from "../../components/ModalContent";
import ModalFooter from "../../components/ModalFooter";

export default function ModalAddNewGroup({ show = false, onHideModal = () => {}, setStateReload }) {
    const [newGroup, setNewGroup] = useState({ title: "", description: "" });

    function createToDo() {
        if (!newGroup.title || !newGroup.description) {
            alert("Group Title and Description must not empty!");
            return;
        }
        API.postCreateToDo(newGroup.title, newGroup.description)
            .then(() => {
                alert(newGroup.title + " Group Created!");
                setNewGroup({ title: "", description: "" });
                onHideModal(false);
                if (setStateReload) setStateReload(new Date().getTime());
            })
            .catch((err) => {
                alert(err);
            });
    }
    return (
        <ModalBody show={show} onHideModal={onHideModal} title="Add New Group">
            <ModalContent>
                <div style={{ marginBottom: "16px" }}>
                    <InputLabel>Title</InputLabel>
                    <Input
                        placeholder="Type group title"
                        value={newGroup.title}
                        onChange={(e) => setNewGroup({ ...newGroup, title: e.target.value })}
                    />
                </div>
                <div>
                    <InputLabel>Description</InputLabel>
                    <Input
                        placeholder="Type group description"
                        value={newGroup.description}
                        onChange={(e) => setNewGroup({ ...newGroup, description: e.target.value })}
                    />
                </div>
            </ModalContent>
            <ModalFooter>
                <Button onClick={() => onHideModal(false)}>Cancel</Button>
                <Button color="primary" onClick={createToDo}>
                    Create Group
                </Button>
            </ModalFooter>
        </ModalBody>
    );
}
