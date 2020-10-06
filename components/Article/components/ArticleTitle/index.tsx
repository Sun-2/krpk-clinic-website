import styled from "styled-components";

export const ArticleTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.families.primary};
  font-size: 3rem;
  font-weight: normal;
  text-align: center;
  


  &::before,
  &::after {
    display: block;
    content: "";
    width: 70%;
    height: 0;
    border-top: 1px dashed #737373;
    margin: 0 auto;
  }
  &::before {
    margin-bottom: ${({theme}) => theme.spacing(1)}px;
  }
  &::after {
    margin-top: ${({theme}) => theme.spacing(1)}px;
  }
`;