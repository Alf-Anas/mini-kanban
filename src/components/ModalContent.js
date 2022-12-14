import styled from "styled-components";
import { COLORS } from "../constants/colors";

const StyledModalContent = styled.div`
    padding: 0 24px;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${COLORS.NEUTRAL._90};
`;

export default function ModalContent({ children }) {
    return <StyledModalContent>{children}</StyledModalContent>;
}
