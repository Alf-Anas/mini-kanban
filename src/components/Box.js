import styled from "styled-components";
import { COLORS } from "../constants/colors";

export const BOX_COLOR = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    DANGER: "danger",
    SUCCESS: "success",
};

const StyledBox = styled.div`
    box-sizing: border-box;
    padding: 16px;
    min-width: 326px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 4px;
    gap: 8px;
    height: fit-content;

    background: ${({ color }) => {
        let hexColor = "";
        switch (color) {
            case BOX_COLOR.SECONDARY:
                hexColor = COLORS.SECONDARY.SURFACE;
                break;
            case BOX_COLOR.DANGER:
                hexColor = COLORS.DANGER.SURFACE;
                break;
            case BOX_COLOR.SUCCESS:
                hexColor = COLORS.SUCCESS.SURFACE;
                break;
            default:
                hexColor = COLORS.PRIMARY.SURFACE;
        }
        return hexColor;
    }};
    border: 1px solid
        ${({ color }) => {
            let hexColor = "";
            switch (color) {
                case BOX_COLOR.SECONDARY:
                    hexColor = COLORS.SECONDARY.BORDER;
                    break;
                case BOX_COLOR.DANGER:
                    hexColor = COLORS.DANGER.BORDER;
                    break;
                case BOX_COLOR.SUCCESS:
                    hexColor = COLORS.SUCCESS.BORDER;
                    break;
                default:
                    hexColor = COLORS.PRIMARY.BORDER;
            }
            return hexColor;
        }};
    color: ${({ color }) => {
        let hexColor = "";
        switch (color) {
            case BOX_COLOR.SECONDARY:
                hexColor = COLORS.SECONDARY.PRESSED;
                break;
            case BOX_COLOR.DANGER:
                hexColor = COLORS.DANGER.MAIN;
                break;
            case BOX_COLOR.SUCCESS:
                hexColor = COLORS.SUCCESS.MAIN;
                break;
            default:
                hexColor = COLORS.PRIMARY.MAIN;
        }
        return hexColor;
    }};
`;

export default function Box({ color, children, onDrop = () => {} }) {
    return (
        <StyledBox onDrop={onDrop} color={color}>
            {children}
        </StyledBox>
    );
}
