import Config from 'react-native-config';
import packageJson from '../../../package.json';
export const CONFIG_ENV = Config.ENV;
export const ENV_DEV: string = 'development';
export const VERSION_NO = packageJson?.version;
