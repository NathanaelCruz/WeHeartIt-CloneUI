import React, { useEffect } from 'react'
import {
  HeaderSite,
  ComponentLogo,
  ContentInfoMenu
} from '../../styles/components/Header/header'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { openclosenotifications } from '../../store/actions/notificationAction'
import {
  fetchprofile,
  opencloseprofile
} from '../../store/actions/profileAction'
import { openclosemenuweheartit } from '../../store/actions/menuWeHeartItAction'
import WeHeartItLogo from '../../assets/images/logoWHI.png'
import Navigation from './navigation'
import SearchBar from './search'
import ButtonDefault from '../button'
import MenuNotification from './menuNotification'
import MenuProfile from './menuProfile'
import MenuWeHeartIt from './menuWeHeartIt'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const { profile } = useSelector((state: RootStateOrAny) => state.profile)

  useEffect(() => {
    dispatch(fetchprofile())
  }, [])

  const openCloseNotification = () => {
    dispatch(openclosenotifications())

    return false
  }
  const openCloseProfile = () => {
    dispatch(opencloseprofile())

    return false
  }

  const openCloseWHI = () => {
    dispatch(openclosemenuweheartit())

    return false
  }
  return (
    <HeaderSite>
      <ComponentLogo src={WeHeartItLogo} alt="Logo" />
      <Navigation
        menuList={[
          {
            link: '#',
            title: 'Home',
            itemClass: 'u-icon__home',
            root: '/home'
          },
          {
            link: '#',
            title: 'Descubra',
            itemClass: 'u-icon__discovery',
            root: '/'
          },
          {
            link: '#',
            title: 'Artigos',
            itemClass: 'u-icon__articles',
            root: '/articles'
          },
          {
            link: '#',
            title: 'Canais',
            itemClass: 'u-icon__channels',
            root: '/channel'
          },
          {
            link: '#',
            title: 'PodCast',
            itemClass: 'u-icon__podcast',
            root: '/pordcast'
          }
        ]}
      />
      <SearchBar />
      <ButtonDefault
        classes={[
          { classUse: 'u-btn__bgPrimary' },
          { classUse: 'u-btn__boxShadow' },
          { classUse: 'u-btn__h70' },
          { classUse: 'u-btn__mLR10' }
        ]}
      >
        <img
          src="https://assets.whicdn.com/assets/whi-light/icons/add_white-d707fc94c99504a7cc704bf49932a1ef876a0633591f44542567cdec8ba5f637.png"
          alt="novo post"
        />
        Novo post
      </ButtonDefault>
      <ButtonDefault
        classes={[
          { classUse: 'u-btn__bgTransparent' },
          { classUse: 'u-btn__imgDefault' },
          { classUse: 'u-btn__h70' }
        ]}
      >
        <img
          src="https://assets.whicdn.com/assets/whi-light/icons/messages_graydark-57fa95dd302082315f5046436301c14efba00ebf5286b05fc6b1a95e73320918.png"
          alt="Message"
        />
      </ButtonDefault>
      <ContentInfoMenu
        role="contentinfo"
        onMouseOver={() => openCloseNotification()}
        onMouseOut={() => openCloseNotification()}
      >
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__imgDefault' },
            { classUse: 'u-btn__h70' }
          ]}
        >
          <img
            src="https://assets.whicdn.com/assets/whi-light/icons/notifications_graydark-5f1041a87772a11e59a54daaa70a4a182a4dc9eb4283a39badaae9ab3abba6c4.png"
            alt="Notification"
          />
        </ButtonDefault>
        <MenuNotification />
      </ContentInfoMenu>
      <ContentInfoMenu
        role="contentinfo"
        className="u-menu__h100 u-menu__flex"
        onMouseOver={() => openCloseProfile()}
        onMouseOut={() => openCloseProfile()}
      >
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__imgProfile' },
            { classUse: 'u-btn__h80' }
          ]}
        >
          {profile.map(user => {
            return <img key={user.id} src={user.thumb} alt={user.name} />
          })}
        </ButtonDefault>
        <MenuProfile />
      </ContentInfoMenu>
      <ContentInfoMenu
        role="contentinfo"
        className="u-menu__h100"
        onMouseOver={() => openCloseWHI()}
        onMouseOut={() => openCloseWHI()}
      >
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__imgDefault' },
            { classUse: 'u-btn__menuWeHeartIt' },
            { classUse: 'u-btn__h80' }
          ]}
        >
          ▾
        </ButtonDefault>
        <MenuWeHeartIt />
      </ContentInfoMenu>
    </HeaderSite>
  )
}

export default Header
