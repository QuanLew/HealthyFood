import React, {useContext} from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import {Marginer} from "../marginer"
import { AccountContext } from "./accountContext";

export function LoginForm(props){

    const {switchToSignup} = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </FormContainer>
            <Marginer direction= "vertical" margin = {12} />
                <MutedLink href="#">Forget your password?</MutedLink>
                <Marginer direction= "vertical" margin= "1.5em" />
                <SubmitButton type="submit">Sign in</SubmitButton>
                <Marginer direction= "vertical" margin= "1em" />
                <MutedLink href="#">Don't have an account?
                    <BoldLink href="#" onClick={switchToSignup}> Sign up</BoldLink>
                </MutedLink>
        </BoxContainer> 
    )
}