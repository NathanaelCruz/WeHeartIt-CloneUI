import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { fetchprofile } from '../../store/actions/profileAction'
import {
  ContentProfile,
  ContentProfileGroup
} from '../../styles/components/Header/menuProfile'
import ButtonDefault from '../button'

const MenuProfile: React.FC = () => {
  const dispatch = useDispatch()
  const { profile, open } = useSelector(
    (state: RootStateOrAny) => state.profile
  )

  useEffect(() => {
    dispatch(fetchprofile())
  }, [])
  return (
    <ContentProfile className={open !== false ? 'u-is__open' : ''}>
      <ContentProfileGroup>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Meu Canvas
        </ButtonDefault>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Minhas Coleções
        </ButtonDefault>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' },
            { classUse: 'u-btn__ptb09' }
          ]}
        >
          Meus Posts
        </ButtonDefault>
      </ContentProfileGroup>
      <ContentProfileGroup>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Preferências
        </ButtonDefault>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Widgets
        </ButtonDefault>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Encontra meus amigos
        </ButtonDefault>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Línguas
        </ButtonDefault>
      </ContentProfileGroup>
      <ContentProfileGroup className="c-content__center">
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__boxShadow' },
            { classUse: 'u-btn__w80' },
            { classUse: 'u-btn__textCenter' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Deslogar
        </ButtonDefault>
      </ContentProfileGroup>
    </ContentProfile>
  )
}

export default MenuProfile
