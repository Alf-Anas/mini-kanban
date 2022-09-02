import styled from "styled-components";
import { COLORS } from "../constants/colors";

const StyledInputLabel = styled.p`
    height: 25px;

    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    margin: 0 0 8px 0;

    color: ${COLORS.NEUTRAL._90};
`;

export default function InputLabel(props) {
    return <StyledInputLabel {...props} />;
}
