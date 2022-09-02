import { FaPlusCircle } from "react-icons/fa";
import styled from "styled-components";
import { COLORS } from "../constants/colors";

const StyledNewTaskButton = styled.p`
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    margin: 0;

    cursor: pointer;
    display: flex;
    gap: 7px;

    align-items: center;

    color: ${COLORS.NEUTRAL._100};
`;

export default function NewTaskButton({ children = "", onClick = () => {} }) {
    return (
        <StyledNewTaskButton onClick={onClick}>
            <FaPlusCircle size={16} />
            {children}
        </StyledNewTaskButton>
    );
}
