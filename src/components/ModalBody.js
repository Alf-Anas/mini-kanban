import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { COLORS } from "../constants/colors";

const StyledBackdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    padding: 0px;
    z-index: 20;
    display: flex;

    background-color: #00000080;
`;

const StyledModalBody = styled.div`
    margin: auto;
    width: 420px;
    min-height: 150px;
    opacity: 100%;

    background: ${COLORS.NEUTRAL._10};

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const StyledModalTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    gap: 8px;
    border-radius: 10px;
    justify-content: space-between;

    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: ${COLORS.NEUTRAL._100};
`;

export default function ModalBody({ title, children, show = false, onHideModal = () => {} }) {
    return (
        <>
            {show && (
                <StyledBackdrop onClick={() => onHideModal(false)}>
                    <StyledModalBody onClick={(e) => e.stopPropagation()}>
                        <StyledModalTitle>
                            <div>{title}</div>
                            <FaTimes
                                style={{ cursor: "pointer" }}
                                onClick={() => onHideModal(false)}
                            />
                        </StyledModalTitle>
                        {children}
                    </StyledModalBody>
                </StyledBackdrop>
            )}
        </>
    );
}
