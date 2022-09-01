import styled from "styled-components";
import { COLORS } from "../constants/colors";

export const LABEL_COLOR = {
    PRIMARY: "primary",
    DANGER: "danger",
    NEUTRAL: "neutral",
};

const StyledMenuItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 16px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    cursor: pointer;

    color: ${COLORS.NEUTRAL._333};
    &:hover {
        color: ${({ color }) => {
            let hexColor = "";
            switch (color) {
                case LABEL_COLOR.PRIMARY:
                    hexColor = COLORS.PRIMARY.MAIN;
                    break;
                case LABEL_COLOR.DANGER:
                    hexColor = COLORS.DANGER.MAIN;
                    break;
                default:
                    hexColor = COLORS.NEUTRAL._100;
            }
            return hexColor;
        }};
    }
`;

const StyledMenuItemText = styled.p`
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.2px;
    flex: none;
    order: 0;
    flex-grow: 1;
`;

export default function MenuItem(props) {
    return (
        <StyledMenuItem {...props}>
            {props.icon}
            <StyledMenuItemText {...props}>{props.children}</StyledMenuItemText>
        </StyledMenuItem>
    );
}
