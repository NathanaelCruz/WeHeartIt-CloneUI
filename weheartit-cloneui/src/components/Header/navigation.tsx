import React from 'react'
import {
  NavigationList,
  IconMenu
} from '../../styles/components/Header/navigation'
import { useRouter } from 'next/router'

interface IArrayNavigation {
  link: string
  title: string
  itemClass: string
  root: string
}

interface INavigationProps {
  menuList: Array<IArrayNavigation>
}

const Navigation: React.FC<INavigationProps> = props => {
  const router = useRouter()
  const routeCurrancy = router.pathname
  return (
    <NavigationList>
      <ul>
        {props &&
          props.menuList.map((menuItem, index) => {
            return (
              <li key={index}>
                <a
                  href={menuItem.link}
                  className={
                    routeCurrancy === menuItem.root ? 's-menu__active' : ''
                  }
                >
                  <IconMenu className={menuItem.itemClass} />
                  {menuItem.title}
                </a>
              </li>
            )
          })}
      </ul>
    </NavigationList>
  )
}

export default Navigation
