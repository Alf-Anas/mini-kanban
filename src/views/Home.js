import Box from "../components/Box";
import Button from "../components/Button";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import MenuItem from "../components/MenuItem";
import { FaArrowLeft, FaArrowRight, FaEdit, FaTrashAlt } from "react-icons/fa";
import ProgressBar from "../components/ProgressBar";
import Label from "../components/Label";
import Header from "../components/Header";
import { useEffect } from "react";
import API from "../api/API";
import Cookies from "js-cookie";

export default function Home() {
    useEffect(() => {
        API.signUp()
            .then((res) => {
                const token = res.data?.auth_token;
                if (token) {
                    Cookies.set("token", token);
                } else {
                    throw new Error(res.status);
                }
            })
            .catch((err) => {
                alert(err);
            });
    }, []);
    return (
        <>
            <section>
                <Header />
            </section>
            <section className="main">
                <Box color="primary">
                    <Label color="primary">Group task 1</Label>
                    <InputLabel>Task Name</InputLabel>
                    Group task 1
                </Box>
                <Box color="danger">Group task 2</Box>
                <Box color="secondary">Group task 3</Box>
                <Box color="success">Group task 4</Box>
            </section>
        </>
    );
}
