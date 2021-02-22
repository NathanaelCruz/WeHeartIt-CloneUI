import styled from 'styled-components'

export const HeaderSite = styled.header`
  width: 100vw;
  height: 6em;
  padding: 0 2em;
  ${props => props.theme.orientation.flex}
`

export const ComponentLogo = styled.img`
  height: 50%;
  width: auto;
`

export const ContentInfoMenu = styled.div`
  position: relative;
  z-index: 2;

  &.u-menu__h100 {
    height: 100%;
  }

  &.u-menu__flex {
    ${props => props.theme.orientation.flexCenter}
  }
`
