import { getUsersWithTokens } from '@/api/users'
import { Link } from '@/components/Link/Link.tsx'
import { useInitData } from '@telegram-apps/sdk-react'
import {
  Cell,
  Headline,
  Image,
  List,
  Section,
} from '@telegram-apps/telegram-ui'
import { useEffect, useState, type FC } from 'react'
import tonImage from './ton.svg'

// function getUserRows(user: User): DisplayDataRow[] {
//   return [
//     { title: 'id', value: user.id.toString() },
//     { title: 'username', value: user.username },
//     { title: 'photo_url', value: user.photoUrl },
//     { title: 'last_name', value: user.lastName },
//     { title: 'first_name', value: user.firstName },
//     { title: 'is_bot', value: user.isBot },
//     { title: 'is_premium', value: user.isPremium },
//     { title: 'language_code', value: user.languageCode },
//     { title: 'allows_to_write_to_pm', value: user.allowsWriteToPm },
//     { title: 'added_to_attachment_menu', value: user.addedToAttachmentMenu },
//   ]
// }

export const IndexPage: FC = () => {
  const [users, setUsers] = useState<
    | {
        tokens: number | null
        username: string | null
      }[]
    | undefined
  >([])
  // const initDataRaw = useLaunchParams().initDataRaw
  const initData = useInitData()

  // const initDataRows = useMemo<DisplayDataRow[] | undefined>(() => {
  //   if (!initData || !initDataRaw) {
  //     return
  //   }
  //   const {
  //     hash,
  //     queryId,
  //     chatType,
  //     chatInstance,
  //     authDate,
  //     startParam,
  //     canSendAfter,
  //     canSendAfterDate,
  //   } = initData
  //   return [
  //     { title: 'raw', value: initDataRaw },
  //     { title: 'auth_date', value: authDate.toLocaleString() },
  //     { title: 'auth_date (raw)', value: authDate.getTime() / 1000 },
  //     { title: 'hash', value: hash },
  //     { title: 'can_send_after', value: canSendAfterDate?.toISOString() },
  //     { title: 'can_send_after (raw)', value: canSendAfter },
  //     { title: 'query_id', value: queryId },
  //     { title: 'start_param', value: startParam },
  //     { title: 'chat_type', value: chatType },
  //     { title: 'chat_instance', value: chatInstance },
  //   ]
  // }, [initData, initDataRaw])

  // const userRows = useMemo<DisplayDataRow[] | undefined>(() => {
  //   return initData && initData.user ? getUserRows(initData.user) : undefined
  // }, [initData])

  // const receiverRows = useMemo<DisplayDataRow[] | undefined>(() => {
  //   return initData && initData.receiver
  //     ? getUserRows(initData.receiver)
  //     : undefined
  // }, [initData])

  // const chatRows = useMemo<DisplayDataRow[] | undefined>(() => {
  //   if (!initData?.chat) {
  //     return
  //   }
  //   const { id, title, type, username, photoUrl } = initData.chat

  //   return [
  //     { title: 'id', value: id.toString() },
  //     { title: 'title', value: title },
  //     { title: 'type', value: type },
  //     { title: 'username', value: username },
  //     { title: 'photo_url', value: photoUrl },
  //   ]
  // }, [initData])

  useEffect(() => {
    async function getUsers() {
      const users = await getUsersWithTokens()

      users?.sort((a, b) => b.tokens! - a.tokens!)

      setUsers(users)
    }

    getUsers()
  }, [])

  console.log(initData)

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
          <Headline>Top users</Headline>
        </Cell>
      </Section>
      <Section>
        {users &&
          users.map((user) => (
            <Cell
              key={user.username}
              before={<Image src={initData?.chat?.photoUrl} />}
            >
              {user.username} - {user.tokens}
            </Cell>
          ))}
      </Section>
    </List>
  )
}
