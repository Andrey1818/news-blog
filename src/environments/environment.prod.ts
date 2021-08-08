import {Environments} from "./interface";
import {PrivateKeys} from "./private.keys";

export const environment: Environments = {
  production: true,
  apiKey: PrivateKeys.apiKey,
  fbDbKey: PrivateKeys.fbDbKey
};
