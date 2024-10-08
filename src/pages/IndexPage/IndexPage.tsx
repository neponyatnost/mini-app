import { getUserByUsername, getUsersWithTokens } from '@/api/users'
import { DisplayData } from '@/components/DisplayData/DisplayData'
import { useInitData, useThemeParams } from '@telegram-apps/sdk-react'
import {
  Cell,
  List,
  Placeholder,
  Spinner,
  Tabbar,
  Text,
} from '@telegram-apps/telegram-ui'
import { TabbarItem } from '@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem'
import { useEffect, useState, type FC } from 'react'

export const IndexPage: FC = () => {
  const [usersList, setUsersList] = useState<
    | {
        tokens: number | null
        username: string | null
        city: string | null
        country: string | null
        firstName: string | null
        lastName: string | null
      }[]
    | undefined
  >()
  const [currentUserData, setCurrentUserData] = useState<
    | {
        city: string | null
        country: string | null
      }
    | undefined
  >()
  const [isLoading, setIsLoading] = useState(false)
  const [isActiveTabButton, setIsActiveTabButton] = useState('1')
  const initData = useInitData()
  const { isDark } = useThemeParams()

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true)
        const users = await getUsersWithTokens()
        if (!users) {
          setIsLoading(false)
          return
        }

        users.sort((a, b) => b.tokens! - a.tokens!)

        setUsersList(users)
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    async function fetchCurrentUserData() {
      try {
        setIsLoading(true)
        const currentUser = await getUserByUsername(
          initData?.user?.username || ''
        )

        setCurrentUserData(currentUser)
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        setIsLoading(false)
      }
    }

    fetchCurrentUserData()
  }, [])

  if (isLoading) {
    return (
      <Placeholder header='Loading' description='Please, wait...'>
        <Spinner size='l' />
      </Placeholder>
    )
  }

  if (usersList?.length === 0) {
    return
  }

  return (
    <>
      <Cell>Hello, {initData?.user?.firstName || 'Unknown user'}!</Cell>
      <Tabbar
        style={{
          zIndex: '100',
          backgroundColor: isDark ? '#17212b' : '#6ab2f2',
          // borderTopLeftRadius: '1rem',
          // borderTopRightRadius: '1rem',
          height: '70px',
        }}
      >
        <TabbarItem>
          <Text
            style={{
              color: '#f5f5f5',
              borderBottom: `${
                isActiveTabButton === '1' ? 'solid #f5f5f5' : ''
              }`,
              transition: 'all .2s ease',
            }}
            onClick={() => setIsActiveTabButton('1')}
          >
            City
          </Text>
        </TabbarItem>
        <TabbarItem>
          <Text
            style={{
              color: '#f5f5f5',
              borderBottom: `${
                isActiveTabButton === '2' ? 'solid #f5f5f5' : ''
              }`,
              transition: 'all .2s ease',
            }}
            onClick={() => setIsActiveTabButton('2')}
          >
            Country
          </Text>
        </TabbarItem>
        <TabbarItem>
          <Text
            style={{
              color: '#f5f5f5',
              borderBottom: `${
                isActiveTabButton === '3' ? 'solid #f5f5f5' : ''
              }`,
              transition: 'all .2s ease',
            }}
            onClick={() => setIsActiveTabButton('3')}
          >
            World
          </Text>
        </TabbarItem>
      </Tabbar>
      <List
        style={{
          paddingBottom: '70px',
          color: '#86cef0',
        }}
      >
        <DisplayData
          header={`Top users in ${
            isActiveTabButton === '1'
              ? 'your city'
              : isActiveTabButton === '2'
              ? 'your country'
              : 'the world'
          }`}
          footer={`Total user count: ${usersList?.length || 0}`}
          rows={
            usersList && isActiveTabButton === '3'
              ? usersList.map((user, index) => ({
                  title:
                    index +
                      1 +
                      '. ' +
                      (index === 0
                        ? '🥇 '
                        : index === 1
                        ? '🥈 '
                        : index === 2
                        ? '🥉 '
                        : '') +
                      user.firstName +
                      ` (${user.city}, ${user.country})` ||
                    'Can not get username',
                  value: "User's rating: " + user.tokens,
                }))
              : usersList && isActiveTabButton === '2'
              ? (() => {
                  const filteredUsers = usersList.filter(
                    (user) => user.country === currentUserData?.country
                  )
                  return filteredUsers.length
                    ? filteredUsers.map((user, index) => ({
                        title:
                          index +
                            1 +
                            '. ' +
                            (index === 0
                              ? '🥇 '
                              : index === 1
                              ? '🥈 '
                              : index === 2
                              ? '🥉 '
                              : '') +
                            user.firstName +
                            ` (${user.city}, ${user.country})` ||
                          'Can not get username',
                        value: "User's rating: " + user.tokens,
                      }))
                    : [
                        {
                          title: 'No users found in your country.',
                          value: 'Please try again later.',
                        },
                      ]
                })()
              : usersList && isActiveTabButton === '1'
              ? (() => {
                  const filteredUsers = usersList.filter(
                    (user) => user.city === currentUserData?.city
                  )
                  return filteredUsers.length
                    ? filteredUsers.map((user, index) => ({
                        title:
                          index +
                            1 +
                            '. ' +
                            (index === 0
                              ? '🥇 '
                              : index === 1
                              ? '🥈 '
                              : index === 2
                              ? '🥉 '
                              : '') +
                            user.firstName +
                            ` (${user.city}, ${user.country})` ||
                          'Can not get username',
                        value: "User's rating: " + user.tokens,
                      }))
                    : [
                        {
                          title: 'No users found in your city.',
                          value: 'Please try again later.',
                        },
                      ]
                })()
              : [
                  {
                    title: 'Something went wrong, try to reload this page.',
                    value: 'Something went wrong',
                  },
                ]
          }
        />
      </List>
    </>
  )
}
