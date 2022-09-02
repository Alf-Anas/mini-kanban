import styled from "styled-components";
import { COLORS } from "../constants/colors";

const StyledModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 24px;
    gap: 10px;

    background: ${COLORS.NEUTRAL._10};
    border-radius: 0px 0px 10px 10px;
`;

export default function ModalFooter({ children }) {
    return <StyledModalFooter>{children}</StyledModalFooter>;
}
