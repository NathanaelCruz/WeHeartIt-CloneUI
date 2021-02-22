import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { fetchnotifications } from '../../store/actions/notificationAction'
import {
  ContentNotification,
  ContentList,
  FooterContentNotification,
  ContentListItem
} from '../../styles/components/Header/menuNotification'
import Button from '../button'

const MenuNotification: React.FC = () => {
  const dispatch = useDispatch()
  const { notifications, open } = useSelector(
    (state: RootStateOrAny) => state.notification
  )

  useEffect(() => {
    dispatch(fetchnotifications())
  }, [])
  return (
    <ContentNotification className={open !== false ? 'u-is__open' : ''}>
      <ContentList>
        {notifications.map(notification => {
          if (notification.type === 'COLLECTION') {
            return (
              <ContentListItem key={notification.id} className="u-grid__2">
                <img src={notification.thumb} alt={notification.description} />
                <p className="c-notification__text">
                  {notification.description}
                </p>
              </ContentListItem>
            )
          }
          return (
            <ContentListItem key={notification.id} className="u-grid__3">
              <img src={notification.profile} alt={notification.name} />
              <p className="c-notification__text">
                <strong>{notification.name}</strong> {notification.menssage}
                <strong> {notification.collection}</strong>
              </p>
              <Button
                classes={[
                  { classUse: 'u-btn__bgSecundary' },
                  { classUse: 'u-btn__boxShadow' },
                  { classUse: 'u-btn__h100' }
                ]}
              >
                Seguir
              </Button>
            </ContentListItem>
          )
        })}
      </ContentList>
      <FooterContentNotification>
        <Button
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__textPrimary' }
          ]}
        >
          ver todas as notificações
        </Button>
      </FooterContentNotification>
    </ContentNotification>
  )
}

export default MenuNotification
