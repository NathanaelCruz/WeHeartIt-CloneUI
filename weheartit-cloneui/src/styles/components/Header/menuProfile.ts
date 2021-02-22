import styled from 'styled-components'

export const ContentProfile = styled.div`
  background-color: ${props => props.theme.colors.background};
  &.u-is__open {
    ${props => props.theme.orientation.flex}
    flex-direction: column;
  }
  display: none;
  width: 100%;
  min-width: 20em;
  max-width: 25em;
  position: absolute;
  top: 5.5em;
  right: 0;
  border-radius: 0.5em;
  overflow: hidden;
  box-shadow: ${props => props.theme.colors.boxShadowHover};
`

export const ContentProfileGroup = styled.div`
  background-color: ${props => props.theme.colors.background};
  &.u-is__open {
    ${props => props.theme.orientation.flex}
    flex-direction: column;
  }
  width: 100%;
  height: auto;
  padding: 1.2em 0;
  box-shadow: ${props => props.theme.colors.boxShadowHover};

  &.c-content__center {
    ${props => props.theme.orientation.flexCenter}
  }
`
