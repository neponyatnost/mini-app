import { Link } from '@/components/Link/Link.tsx'
import { Button, Cell, Image, List, Section } from '@telegram-apps/telegram-ui'
import type { FC } from 'react'
import tonImage from './ton.svg'

export const IndexPage: FC = () => {
  return (
    <List>
      <Section>
        <Link to='/ton-connect'>
          <Cell
            before={<Image src={tonImage} size={48} />}
            subtitle='Connect your TON wallet!'
          >
            TON Connect
          </Cell>
        </Link>
      </Section>
      <Section>
        <Cell>
          <Button onClick={() => console.log('dfgd')}>Test</Button>
        </Cell>
      </Section>
    </List>
  )
}
