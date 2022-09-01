import Box from "../components/Box";
import Button from "../components/Button";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import MenuItem from "../components/MenuItem";
import { FaArrowLeft, FaArrowRight, FaEdit, FaTrashAlt } from "react-icons/fa";
import ProgressBar from "../components/ProgressBar";
import Label from "../components/Label";

export default function Component() {
    return (
        <div>
            <Label color="primary">Group task 1</Label>
            <Label color="danger">Group task 2</Label>
            <Label color="secondary">Group task 3</Label>
            <Label color="success">Group task 4</Label>

            <InputLabel>Task Name</InputLabel>
            <Input placeholder="Type your Task" />
            <Button color="primary">Save task</Button>
            <Button color="danger">Delete</Button>
            <Button>Cancel</Button>

            <Box color="primary">Group task 1</Box>
            <Box color="danger">Group task 2</Box>
            <Box color="secondary">Group task 3</Box>
            <Box color="success">Group task 4</Box>

            <div>
                <MenuItem color="primary" icon={<FaArrowLeft />}>
                    Move Right
                </MenuItem>
                <MenuItem color="primary" icon={<FaArrowRight />}>
                    Move Left
                </MenuItem>
                <MenuItem icon={<FaEdit />}>Edit</MenuItem>
                <MenuItem color="danger" icon={<FaTrashAlt />}>
                    Delete
                </MenuItem>
            </div>
            <ProgressBar progress={10} />
            <ProgressBar progress={20} />
            <ProgressBar progress={50} />
            <ProgressBar progress={80} />
            <ProgressBar progress={100} />
            <ProgressBar progress={-1} />
        </div>
    );
}
