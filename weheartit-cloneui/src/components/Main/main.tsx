import React, { useEffect } from 'react'
import { ContentMainCard, ContentMain } from '../../styles/components/Main/main'
import Card from '../Card/card'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { fetchposts } from '../../store/actions/postAction'

export const Main: React.FC = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state: RootStateOrAny) => state.post)

  useEffect(() => {
    dispatch(fetchposts())
  }, [])

  return (
    <ContentMain>
      <h1>Mais Recentes</h1>
      <ContentMainCard>
        {posts.map(post => {
          return (
            <Card
              key={post.id}
              thumb={post.thumb}
              title={post.title}
              description={post.description}
              avaliation={post.hearts}
              author={[{ profile: post.user.profile, name: post.user.name }]}
            ></Card>
          )
        })}
      </ContentMainCard>
    </ContentMain>
  )
}

export default Main
