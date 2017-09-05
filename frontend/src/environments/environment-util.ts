import {environment} from './environment';

export class EnvironmentUtil {

  static getApiUrl(): string {
    return environment.backendUrl;
  }

  static getApiWsUrl(): string {
    return environment.backendWsUrl;
  }
}
