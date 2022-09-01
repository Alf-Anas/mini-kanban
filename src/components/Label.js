import styled from "styled-components";
import { COLORS } from "../constants/colors";

export const LABEL_COLOR = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    DANGER: "danger",
    SUCCESS: "success",
};

const StyledLabel = styled.p`
    box-sizing: border-box;
    padding: 2px 8px;
    height: 24px;
    margin: 0;
    width: max-content;
    background: ${({ color }) => {
        let hexColor = "";
        switch (color) {
            case LABEL_COLOR.SECONDARY:
                hexColor = COLORS.SECONDARY.SURFACE;
                break;
            case LABEL_COLOR.DANGER:
                hexColor = COLORS.DANGER.SURFACE;
                break;
            case LABEL_COLOR.SUCCESS:
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
                case LABEL_COLOR.SECONDARY:
                    hexColor = COLORS.SECONDARY.BORDER;
                    break;
                case LABEL_COLOR.DANGER:
                    hexColor = COLORS.DANGER.BORDER;
                    break;
                case LABEL_COLOR.SUCCESS:
                    hexColor = COLORS.SUCCESS.BORDER;
                    break;
                default:
                    hexColor = COLORS.PRIMARY.BORDER;
            }
            return hexColor;
        }};
    border-radius: 4px;
    color: ${({ color }) => {
        let hexColor = "";
        switch (color) {
            case LABEL_COLOR.SECONDARY:
                hexColor = COLORS.SECONDARY.PRESSED;
                break;
            case LABEL_COLOR.DANGER:
                hexColor = COLORS.DANGER.MAIN;
                break;
            case LABEL_COLOR.SUCCESS:
                hexColor = COLORS.SUCCESS.MAIN;
                break;
            default:
                hexColor = COLORS.PRIMARY.MAIN;
        }
        return hexColor;
    }};
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
`;

export default function Label(props) {
    return <StyledLabel {...props} />;
}
