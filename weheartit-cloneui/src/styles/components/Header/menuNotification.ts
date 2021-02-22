import styled from 'styled-components'

export const ContentNotification = styled.div`
  background-color: ${props => props.theme.colors.background};
  &.u-is__open {
    ${props => props.theme.orientation.flex}
    flex-direction: column;
  }
  display: none;
  width: 100%;
  min-width: 50em;
  max-width: 60em;
  position: absolute;
  height: 25em;
  top: 5em;
  right: 0;
  border-radius: 0.5em;
  overflow: hidden;
  box-shadow: ${props => props.theme.colors.boxShadowHover};
`
export const ContentList = styled.ul`
  ${props => props.theme.orientation.flexStart}
  flex-direction: column;
  height: 80%;
  width: 100%;
  overflow: auto;
`

export const ContentListItem = styled.li`
  width: 100%;
  height: 6.5em;
  padding: 1.5em;
  box-shadow: ${props => props.theme.colors.boxShadowBottom};
  display: grid;
  align-items: center;

  &.u-grid__3 {
    grid-template-columns: 5em 1fr 7em;
  }

  &.u-grid__2 {
    grid-template-columns: 5em 1fr;
  }

  &:hover {
    cursor: pointer;
  }
  img {
    width: auto;
    border-radius: 50%;
  }

  .c-notification__text {
    font-size: 1.2em;
    margin-left: 0.6em;

    strong {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const FooterContentNotification = styled.footer`
  ${props => props.theme.orientation.flexCenter}
  height: 20%;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.colors.boxShadowHover};
`
