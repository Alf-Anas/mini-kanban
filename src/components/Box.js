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
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 4px;

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

    flex: none;
    order: 0;
    flex-grow: 1;
`;

export default function Box(props) {
    return <StyledBox {...props} />;
}
