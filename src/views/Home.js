import Box from "../components/Box";
import Button from "../components/Button";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import MenuItem from "../components/MenuItem";
import { FaArrowLeft, FaArrowRight, FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import ProgressBar from "../components/ProgressBar";
import Label from "../components/Label";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import API from "../api/API";
import Cookies from "js-cookie";
import ModalBody from "../components/ModalBody";
import HeaderTitle from "../components/HeaderTitle";
import ModalContent from "../components/ModalContent";
import ModalFooter from "../components/ModalFooter";
import ModalAddNewGroup from "./child/ModalAddNewGroup";

const MODAL_SHOW = {
    ADD_NEW_GROUP: "ADD_NEW_GROUP",
    ADD_NEW_TASK: "ADD_NEW_TASK",
    DELETE_TASK: "DELETE_TASK",
};

export default function Home() {
    const [tokenLoad, setTokenLoad] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const [listGroup, setListGroup] = useState([]);

    useEffect(() => {
        API.signUp()
            .then((res) => {
                const token = res.data?.auth_token;
                if (token) {
                    Cookies.set("token", token);
                    setTokenLoad(true);
                } else {
                    throw new Error(res.status);
                }
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    useEffect(() => {
        if (!tokenLoad) return;
        API.getListToDo()
            .then((res) => {
                const datas = res?.data;
                if (Array.isArray(datas)) {
                    setListGroup(datas);
                } else {
                    throw new Error("Failed to get Group Data!");
                }
            })
            .catch((err) => {
                alert(err);
            });
    }, [tokenLoad]);

    return (
        <>
            <section>
                <Header>
                    <HeaderTitle>Product Roadmap</HeaderTitle>
                    <Button
                        color="primary"
                        onClick={() => {
                            setModalType(MODAL_SHOW.ADD_NEW_GROUP);
                            setShowModal(true);
                        }}
                    >
                        <FaPlus size="12" /> Add New Group
                    </Button>
                </Header>
            </section>
            <section className="main">
                {listGroup.map((item, idx) => {
                    const mIdx = idx + 1;
                    const color =
                        mIdx % 4 === 0
                            ? "success"
                            : mIdx % 3 === 0
                            ? "danger"
                            : mIdx % 2 === 0
                            ? "secondary"
                            : "primary";
                    return (
                        <Box key={idx} color={color}>
                            <Label color={color}>Group task {mIdx}</Label>
                            <InputLabel>{item?.title}</InputLabel>
                            Group task 1
                        </Box>
                    );
                })}
            </section>
            {modalType === MODAL_SHOW.ADD_NEW_GROUP && (
                <ModalAddNewGroup show={showModal} onHideModal={setShowModal} />
            )}
        </>
    );
}
