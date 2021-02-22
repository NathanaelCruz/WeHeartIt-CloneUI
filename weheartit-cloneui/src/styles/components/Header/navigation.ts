import styled from 'styled-components'

export const NavigationList = styled.nav`
  background-color: transparent;
  ${props => props.theme.orientation.flex}

  &, ul, li, a {
    height: 100%;
  }

  ul {
    ${props => props.theme.orientation.flex}
    padding: 0 2em;

    a {
      color: ${props => props.theme.colors.textLight};
      ${props => props.theme.orientation.flex}
      padding: 0 0.8em;
      transition: 0.2s ease-in;
    }
    a.s-menu__active {
      color: ${props => props.theme.colors.textLinkHover};
      border-bottom: 2px solid ${props => props.theme.colors.primary};
    }

    a:hover {
      color: ${props => props.theme.colors.textLinkHover};
    }
  }
`

export const IconMenu = styled.i`
  display: inline-block;
  height: 2em;
  width: 2em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-right: 0.2em;

  &.u-icon__home {
    background-image: url('https://assets.whicdn.com/assets/whi-light/icons/home_graydark-123679f5cace54226212387b9f27b90a02a8d8a3ccb48306fa19ff5dd4159067.png');
  }

  &.u-icon__discovery {
    background-image: url('https://assets.whicdn.com/assets/whi-light/icons/discover_graydark-adcb6c3e76ae8544bcc79926259ceb8a6b85e6e7377eb51f07ef217d3ee836a8.png');
  }

  &.u-icon__articles {
    background-image: url('https://assets.whicdn.com/assets/whi-light/icons/article_graydark-0cc8fd999b0626074498b32693e330d389259151895be68c62a0f58fb6ab7c93.png');
  }

  &.u-icon__channels {
    background-image: url('https://assets.whicdn.com/assets/whi-light/icons/channels_graydark-1953b20bccb80d8f24114d7952ec27b5b1bb88d49ebd56cac0decec272667a1d.png');
  }

  &.u-icon__podcast {
    background-image: url('https://assets.whicdn.com/assets/whi-light/icons/podcasts_graydark-94e6cae951765f4c1d852e6e43fb6300e671ae0b53f6e47d515e0b879322a653.png');
    width: 1.25em;
    height: 1.25em;
  }
`
