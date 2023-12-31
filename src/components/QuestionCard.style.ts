import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 800px;
    backgronud: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085ae;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    color: #fff;

    .question{
        font-size: 1.4rem;
    }

    p {
        font-size: 1rem;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover{
        opacity: 0.8;
    }

    button {
        font-size: 1.2rem;
        cursor: ponter;
        user-select: none;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({correct, userClicked}) =>
            correct
            ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
            : !correct && userClicked
            ? 'linear-gradient(90deg, #ff5656, #c16868)'
            : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`