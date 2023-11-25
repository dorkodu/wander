export type AuthenticationMethod = {
  implementation: Auth.Implementation<Components>

  accountConsumer: (username: string) => Promise<AccountLinkingConsumer>
  accountProducer: (username: string) => Promise<AccountLinkingProducer>
  isUsernameAvailable: (username: string) => Promise<boolean>
  isUsernameValid: (username: string) => Promise<boolean>
  register: (options: { username: string; email?: string }) => Promise<{ success: boolean }>
  session: () => Promise<Maybe<Session>>
}