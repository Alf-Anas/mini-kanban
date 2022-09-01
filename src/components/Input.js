import styled from "styled-components";
import { COLORS } from "../constants/colors";

const StyledInput = styled.input`
    box-sizing: border-box;

    padding: 8px 16px;
    gap: 10px;

    width: 100%;
    height: 36px;

    background: #ffffff;
    border: 2px solid #ededed;
    border-radius: 8px;

    flex: none;
    order: 0;
    flex-grow: 1;

    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    color: ${COLORS.NEUTRAL._90};
    ::placeholder {
        color: ${COLORS.NEUTRAL._90};
        opacity: 50%;
    }
`;

export default function Input(props) {
    return <StyledInput {...props} />;
}
