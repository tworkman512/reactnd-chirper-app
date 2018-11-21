export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receivedTweets(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}
