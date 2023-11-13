interface TUser extends TMongoCommon {
  name: string;
  role: string;
}

interface TMongoCommon {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export type TGetError = (res: any) => string;

export type TAuth = {
  [x: string]: any;
  isLoggedIn: boolean;
  user: TUser | null;
  token: string | null;
};

export type TCallback<T> = (args: T) => void;

export interface TCommonRespond {
  success: boolean;
}
