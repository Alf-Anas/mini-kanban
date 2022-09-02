import styled from "styled-components";
import { COLORS } from "../constants/colors";

const StyledTaskBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 16px;
    gap: 8px;
    cursor: grab;

    background: ${COLORS.NEUTRAL._20};
    border: 1px solid ${COLORS.NEUTRAL._40};
    border-radius: 4px;

    flex: none;
    align-self: stretch;
    flex-grow: 0;

    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${COLORS.NEUTRAL._70};
`;

export default function TaskBox({ children, onDragStart = () => {} }) {
    return (
        <StyledTaskBox
            draggable="true"
            onDragStart={onDragStart}
            onDragStartCapture={(e) => {
                e.target.style.backgroundColor = COLORS.PRIMARY.SURFACE;
                e.target.style.border = `1px solid ${COLORS.PRIMARY.BORDER}`;
            }}
            onDragEndCapture={(e) => {
                e.target.style.backgroundColor = COLORS.NEUTRAL._20;
                e.target.style.border = `1px solid ${COLORS.NEUTRAL._40}`;
            }}
        >
            {children}
        </StyledTaskBox>
    );
}
