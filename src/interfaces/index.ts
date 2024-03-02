export interface siteInterface {
  isLoading: boolean;
  is404: boolean;
  setLoding: (state: boolean) => void;
  set404: (state: boolean) => void;
}

export interface authInterface {
  isLoggedIn: boolean;
  role: string;
  access_token: string | null;
  refresh_token: string | null;
  setLogin: (loginState: boolean) => void;
  setTokne: (token: string | null, tokentype: string) => void;
}
