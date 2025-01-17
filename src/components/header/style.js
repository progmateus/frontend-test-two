import styled from "styled-components"


export const Container = styled.header`
    display: flex;

   background-color: ${(props) => props.theme.bgHeader};

    height: 4rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

    svg{
        font-size: 28px;

        path{
            color: white;
        }
    }

    /* ul {
        display: flex; 
        justify-content: space-between;
        width: 10rem;
        
        li{
            list-style: none;
            a{
                display: block;
                text-decoration: none;
                color: white;
            }
        }
    } */

`;
