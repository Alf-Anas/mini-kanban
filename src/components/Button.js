import styled from "styled-components";
import { COLORS } from "../constants/colors";

export const BUTTON_COLOR = {
    PRIMARY: "primary",
    DANGER: "danger",
    NEUTRAL: "neutral",
};

const StyledButton = styled.button`
    box-sizing: border-box;
    padding: 4px 16px;
    width: max-content;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    cursor: pointer;

    background: ${({ color }) => {
        let hexColor = "";
        switch (color) {
            case BUTTON_COLOR.PRIMARY:
                hexColor = COLORS.PRIMARY.MAIN;
                break;
            case BUTTON_COLOR.DANGER:
                hexColor = COLORS.DANGER.MAIN;
                break;
            default:
                hexColor = COLORS.NEUTRAL._10;
        }
        return hexColor;
    }};
    border: ${({ color }) => {
        let hexColor = "";
        switch (color) {
            case BUTTON_COLOR.PRIMARY:
                hexColor = COLORS.PRIMARY.MAIN;
                break;
            case BUTTON_COLOR.DANGER:
                hexColor = COLORS.DANGER.MAIN;
                break;
            default:
                hexColor = "1px solid " + COLORS.NEUTRAL._40;
        }
        return hexColor;
    }};
    color: ${({ color }) => {
        let hexColor = "";
        switch (color) {
            case BUTTON_COLOR.PRIMARY:
                hexColor = COLORS.NEUTRAL._10;
                break;
            case BUTTON_COLOR.DANGER:
                hexColor = COLORS.NEUTRAL._10;
                break;
            default:
                hexColor = COLORS.NEUTRAL._100;
        }
        return hexColor;
    }};

    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    align-items: center;

    &:hover {
        background-color: ${({ color }) => {
            let hexColor = "";
            switch (color) {
                case BUTTON_COLOR.PRIMARY:
                    hexColor = COLORS.PRIMARY.MAIN + "aa";
                    break;
                case BUTTON_COLOR.DANGER:
                    hexColor = COLORS.DANGER.MAIN + "aa";
                    break;
                default:
                    hexColor = COLORS.NEUTRAL._10 + "aa";
            }
            return hexColor;
        }};
    }
`;

export default function Button(props) {
    return <StyledButton {...props} />;
}
