import styled from "styled-components";

interface WrapperProps{
        level: string
}

interface TextProps {
        color?: string
}

export const Wrapper = styled.div<WrapperProps>`
        padding: 17px;
        border:  2px solid;
        border-radius: 4px;
        
        border-color: ${props => {
        switch (props.level) {
                case 'beginner': 
                        return props.theme.colors.green
                case 'intermediate':
                        return props.theme.colors.orange
                case 'advanced':
                        return props.theme.colors.red
                default:
                        return null
                }
        }};
`

export const Topic = styled.h2`
        margin-top: 0;
        margin-bottom: 12px;
`

export const MetaWrapper = styled.div`
        display: flex;
        gap: 8px;

`

export const Text = styled.p<TextProps>`
        margin: 0;

        color: ${props => {
                return props.color
        }};
`

export const Button = styled.button`
        padding: 4px;
        margin: 0;
        border: none;
        color: red;

        :hover{
                color: green;
                background-color: blue;
        }

        svg{
                display: block;
        }
`