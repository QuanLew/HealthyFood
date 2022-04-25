import React, {useState} from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion} from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
    width: 340px;
    min-height: 678px;
    display: flex;
    flex-direction: column;
    border-radius: 17px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
    top: 150px;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 585px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 60%;
    transform: rotate(65deg);
    top: -320px;
    right: -85px;
    background: rgb(241,196,15);
    background: linear-gradient(
        90deg, 
        rgba(250,215,45,1) 20%, 
        rgba(252,241,40,1) 100%, 
        rgba(0,212,255,1) 100%
    );
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    margin-top: 19%;
    margin-left: 5%;
`;

const HeaderText = styled.h2`
    font-size: 39px;
    font-weight:  450;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    z-index: 10;
    margin: 0;
    margin-top: 10px;
`;

const InnerContainer = styled.div`
    width: 77%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1550px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
};

const expandingTransition ={
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout (() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    }
    
    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    }


    const contextValue = {switchToSignup,switchToSignin};

    return (
        <AccountContext.Provider value={contextValue}>
        <BoxContainer>
            <TopContainer>
                <BackDrop 
                    initial={false}
                    animate={isExpanded?"expanded":"collapsed"}
                    variants={backdropVariants}
                    transition={expandingTransition}
                />
                {active === "signin" && <HeaderContainer>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderText>Back</HeaderText>
                    <SmallText>Please sign-in to continue!</SmallText>
                </HeaderContainer>}
                {active === "signup" && <HeaderContainer>
                    <HeaderText>Create</HeaderText>
                    <HeaderText>Account</HeaderText>
                    <SmallText>Please sign-up to continue!</SmallText>
                </HeaderContainer>}
            </TopContainer>
            <InnerContainer>
                {active === "signin" && <LoginForm />}
                {active === "signup" && <SignupForm />}
            </InnerContainer>
        </BoxContainer>
        </AccountContext.Provider>
        )
}