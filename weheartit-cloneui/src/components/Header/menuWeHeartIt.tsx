import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { openclosemenuweheartit } from '../../store/actions/menuWeHeartItAction'
import {
  ContentWHI,
  ContentWHIGroup
} from '../../styles/components/Header/menuWeHeartIt'
import ButtonDefault from '../button'

const MenuWeHeartIt: React.FC = () => {
  const { open } = useSelector((state: RootStateOrAny) => state.menuweheartit)

  return (
    <ContentWHI className={open !== false ? 'u-is__open' : ''}>
      <ContentWHIGroup>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Sobre o We Heart It
        </ButtonDefault>
      </ContentWHIGroup>
      <ContentWHIGroup className="c-content__p15 c-content__center">
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgPrimary' },
            { classUse: 'u-btn__boxShadow' },
            { classUse: 'u-btn__textCenter' },
            { classUse: 'u-btn__w80' },
            { classUse: 'u-btn__p12' }
          ]}
        >
          Baixe o App
        </ButtonDefault>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__boxShadow' },
            { classUse: 'u-btn__textCenter' },
            { classUse: 'u-btn__w80' },
            { classUse: 'u-btn__textLight' },
            { classUse: 'u-btn__p12' },
            { classUse: 'u-btn__mt1' }
          ]}
        >
          Botão Heart
        </ButtonDefault>
      </ContentWHIGroup>
      <ContentWHIGroup>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Termos
        </ButtonDefault>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Privacidade
        </ButtonDefault>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Contato
        </ButtonDefault>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__bgTransparentHover' },
            { classUse: 'u-btn__w100' },
            { classUse: 'u-btn__textLight' }
          ]}
        >
          Ajuda
        </ButtonDefault>
      </ContentWHIGroup>
    </ContentWHI>
  )
}

export default MenuWeHeartIt
