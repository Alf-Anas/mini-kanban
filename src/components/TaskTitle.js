import styled from "styled-components";
import { COLORS } from "../constants/colors";

const StyledTaskTitle = styled.p`
    height: 25px;

    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    margin: 0;

    color: ${COLORS.NEUTRAL._90};
`;

export default function TaskTitle({ children }) {
    return <StyledTaskTitle>{children}</StyledTaskTitle>;
}
