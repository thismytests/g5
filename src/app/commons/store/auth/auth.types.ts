export interface AuthAction {
  type: string;
  token?: string;
}

// логин, аватар, выпадающий список с функцией ‘ Log out ’
export interface AuthState {
  'kind': string;
  'user': Array<User>;
}

export interface User {
  'localId': string;
  'email': string;
  'displayName': string;
  'photoUrl': string;
  'emailVerified': true;
  'providerUserInfo': Array<ProviderUserInfo>;
  'validSince': string;
  'lastLoginAt': string;
  'createdAt': string;
  'lastRefreshAt': string;
}

export interface ProviderUserInfo {
  'providerId': string;
  'displayName': string;
  'photoUrl': string;
  'federatedId': string;
  'email': string;
  'rawId': string;
}
