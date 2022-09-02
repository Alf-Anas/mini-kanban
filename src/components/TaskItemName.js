import styled from "styled-components";
import { COLORS } from "../constants/colors";

const StyledTaskItemName = styled.p`
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    margin: 0;

    color: ${COLORS.NEUTRAL._90};
`;

export default function TaskItemName({ children }) {
    return <StyledTaskItemName>{children}</StyledTaskItemName>;
}
