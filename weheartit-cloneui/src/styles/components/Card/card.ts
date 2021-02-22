import styled from 'styled-components'

export const CardDefault = styled.article`
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  max-width: 23.5%;
  margin-left: 1.5%;
  height: 100%;
  box-shadow: ${props => props.theme.colors.boxShadow};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10em 5em;
  position: relative;
  border-radius: 0.8em;
  overflow: hidden;

  &:first-child {
    margin-left: 0;
  }
`
export const CardProfile = styled.img`
  height: 3.2em;
  width: 3.2em;
  border-radius: 50%;
  border: 2px solid #fff;
  position: absolute;
  top: 1em;
  left: 1em;
`
export const CardThumb = styled.figure`
  width: 100%;
  height: 20em;
  overflow: hidden;

  button {
    position: absolute;
    top: 1em;
    right: 1em;
  }
`
export const CardThumbImage = styled.img`
  transform: scale(1);
`
export const CardLinkAuthor = styled.a`
  color: ${props => props.theme.colors.textLight};
  font-size: 1.2em;
`
export const CardFooter = styled.footer`
  ${props => props.theme.orientation.flexCenter}
  justify-content: space-between;
  padding: 1em;
`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1em;
  h4 {
    font: 500 1.7em Montserrat;
    text-align: left;
    margin-bottom: 0.5em;
  }
`
