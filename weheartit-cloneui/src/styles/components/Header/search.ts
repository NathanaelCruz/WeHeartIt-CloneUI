import styled from 'styled-components'

export const Search = styled.input`
  width: 18em;
  box-shadow: ${props => props.theme.colors.boxShadow};
  padding: 0.8em;
  border-radius: 0.2em;
  border: none;
  background-color: ${props => props.theme.colors.bgContent};
  transition: 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.colors.boxShadowHover};
  }

  &:active,
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-size: 0.8em;
  }

  &.u-icon__search {
    background-image: url('https://assets.whicdn.com/assets/whi-light/icons/search_graydark-ec9fd3c71de1694d2d7c6c49ecdc107509ed19c9bfde330a8b85cc1b1a1d2257.png');
    background-repeat: no-repeat;
    background-size: 1.6em;
    background-position: left 0.6em center;
    padding-left: 2.5em;
  }
`
