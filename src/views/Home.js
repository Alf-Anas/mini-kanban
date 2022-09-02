import Box from "../components/Box";
import Button from "../components/Button";
import MenuItem from "../components/MenuItem";
import { FaArrowLeft, FaArrowRight, FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import ProgressBar from "../components/ProgressBar";
import Label from "../components/Label";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import API from "../api/API";
import Cookies from "js-cookie";
import HeaderTitle from "../components/HeaderTitle";
import ModalAddNewGroup from "./child/ModalAddNewGroup";
import TaskTitle from "../components/TaskTitle";
import NewTaskButton from "../components/NewTaskButton";
import TaskBox from "../components/TaskBox";
import ModalAddNewTask from "./child/ModalAddNewTask";
import TaskItemName from "../components/TaskItemName";
import HorizontalBorder from "../components/HorizontalBorder";
import MenuButton from "../components/MenuButton";
import ModalDeleteTask from "./child/ModalDeleteTask";
import ModalEditTask from "./child/ModalEditTask";

const MODAL_SHOW = {
    ADD_NEW_GROUP: "ADD_NEW_GROUP",
    ADD_NEW_TASK: "ADD_NEW_TASK",
    DELETE_TASK: "DELETE_TASK",
    EDIT_TASK: "EDIT_TASK",
};

export default function Home() {
    const [tokenLoad, setTokenLoad] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const [listGroup, setListGroup] = useState([]);
    const [groupID, setGroupID] = useState("");
    const [activeTask, setActiveTask] = useState({});
    const [listTask, setListTask] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(new Date().getTime());

    useEffect(() => {
        setIsLoading(true);

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

        setIsLoading(true);
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
    }, [tokenLoad, reload]);

    useEffect(() => {
        if (listGroup.length === 0) return;

        async function loadData(item) {
            return new Promise((resolve, reject) => {
                API.getListItem(item.id)
                    .then((res) => {
                        const datas = res?.data;
                        if (Array.isArray(datas)) {
                            resolve(datas);
                        } else {
                            throw new Error("Failed to get the list of " + item.title);
                        }
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        }

        async function iterateLoadData() {
            const listTaskByGroup = {};
            for (let i = 0; i < listGroup.length; i++) {
                const iGroup = listGroup[i];
                const mData = await loadData(iGroup)
                    .then((resData) => resData)
                    .catch((err) => {
                        alert(err);
                        return [];
                    });
                listTaskByGroup[iGroup.id] = mData;
            }
            setListTask(listTaskByGroup);
            setIsLoading(false);
        }

        iterateLoadData();
    }, [listGroup]);

    function moveTask(newGroupID = "", currentGroupID = "", taskIndex = 0, theTask = {}) {
        setListTask((oldState) => {
            const newList = { ...oldState };
            newList[currentGroupID].splice(taskIndex, 1);
            newList[newGroupID].unshift(theTask);
            return newList;
        });
    }

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

            {isLoading && <p style={{ width: "100%", textAlign: "center" }}>Loading...</p>}
            {!isLoading && listGroup.length === 0 && "Please Create New Group!"}

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
                    const eListTask = listTask[item.id];
                    return (
                        <Box key={idx} color={color} onDrop={() => console.log(activeTask)}>
                            <Label color={color}>Group task {mIdx}</Label>
                            <TaskTitle>{item?.title}</TaskTitle>
                            {Array.isArray(eListTask) && eListTask.length > 0 ? (
                                eListTask.map((itask, tIdx) => (
                                    <TaskBox key={tIdx} onDragStart={() => setActiveTask(itask)}>
                                        <TaskItemName>{itask.name}</TaskItemName>
                                        <HorizontalBorder />
                                        <div
                                            style={{
                                                width: "100%",
                                                padding: "4px 0",
                                                display: "flex",
                                                gap: "26px",
                                            }}
                                        >
                                            <div style={{ width: "100%" }}>
                                                <ProgressBar progress={itask.progress_percentage} />
                                            </div>
                                            <MenuButton>
                                                <div>
                                                    {idx !== listGroup.length - 1 && (
                                                        <MenuItem
                                                            color="primary"
                                                            icon={<FaArrowRight />}
                                                            onClick={() => {
                                                                const idRightGroup =
                                                                    listGroup[idx + 1].id;
                                                                moveTask(
                                                                    idRightGroup,
                                                                    item.id,
                                                                    tIdx,
                                                                    itask
                                                                );
                                                            }}
                                                        >
                                                            Move Right
                                                        </MenuItem>
                                                    )}

                                                    {idx !== 0 && (
                                                        <MenuItem
                                                            color="primary"
                                                            icon={<FaArrowLeft />}
                                                            onClick={() => {
                                                                const idLeftGroup =
                                                                    listGroup[idx - 1].id;
                                                                moveTask(
                                                                    idLeftGroup,
                                                                    item.id,
                                                                    tIdx,
                                                                    itask
                                                                );
                                                            }}
                                                        >
                                                            Move Left
                                                        </MenuItem>
                                                    )}

                                                    <MenuItem
                                                        color="primary"
                                                        icon={<FaEdit />}
                                                        onClick={() => {
                                                            setGroupID(item?.id);
                                                            setActiveTask(itask);
                                                            setModalType(MODAL_SHOW.EDIT_TASK);
                                                            setShowModal(true);
                                                        }}
                                                    >
                                                        Edit
                                                    </MenuItem>
                                                    <MenuItem
                                                        color="danger"
                                                        icon={<FaTrashAlt />}
                                                        onClick={() => {
                                                            setGroupID(item?.id);
                                                            setActiveTask(itask);
                                                            setModalType(MODAL_SHOW.DELETE_TASK);
                                                            setShowModal(true);
                                                        }}
                                                    >
                                                        Delete
                                                    </MenuItem>
                                                </div>
                                            </MenuButton>
                                        </div>
                                    </TaskBox>
                                ))
                            ) : (
                                <TaskBox>No Task</TaskBox>
                            )}

                            <NewTaskButton
                                onClick={() => {
                                    setGroupID(item?.id);
                                    setModalType(MODAL_SHOW.ADD_NEW_TASK);
                                    setShowModal(true);
                                }}
                            >
                                New task
                            </NewTaskButton>
                        </Box>
                    );
                })}
            </section>
            {modalType === MODAL_SHOW.ADD_NEW_GROUP && (
                <ModalAddNewGroup
                    show={showModal}
                    onHideModal={setShowModal}
                    setStateReload={setReload}
                />
            )}
            {modalType === MODAL_SHOW.ADD_NEW_TASK && (
                <ModalAddNewTask
                    show={showModal}
                    onHideModal={setShowModal}
                    groupID={groupID}
                    setStateReload={setReload}
                />
            )}
            {modalType === MODAL_SHOW.DELETE_TASK && (
                <ModalDeleteTask
                    show={showModal}
                    onHideModal={setShowModal}
                    groupID={groupID}
                    taskID={activeTask.id}
                    setStateReload={setReload}
                />
            )}
            {modalType === MODAL_SHOW.EDIT_TASK && (
                <ModalEditTask
                    show={showModal}
                    onHideModal={setShowModal}
                    task={activeTask}
                    setStateReload={setReload}
                />
            )}
        </>
    );
}
