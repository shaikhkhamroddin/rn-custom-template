import * as Sentry from '@sentry/react-native';
import {CONFIG_ENV} from '@constants';

class SentryModule {
  private SentryObj = Sentry;
  private DSN_KEY = '';
  private arrIgnoreSentryErrors = [
    /sp-react-native-in-app-updates checkNeedsUpdate/,
    /Se(e) is not a function./,
  ];

  /** initialize sentry */
  public SentryInitialize = () => {
    if (this.DSN_KEY === '') {
      return;
    }
    try {
      this.SentryObj.init({
        dsn: this.DSN_KEY,
        /** We recommend adjusting this value in production */
        tracesSampleRate: 1.0,
        ignoreErrors: this.arrIgnoreSentryErrors,
        environment: CONFIG_ENV,
      });
    } catch (error) {
      console.log('sentry initialize error ', error);
    }
  };

  public WrapApp = (App: React.FC) => {
    return this.SentryObj.wrap(App);
  };

  /** post error */
  public postError = (err: any) => {
    this.SentryObj.captureException(err);
  };

  /*public setSentryUser = details => {
    try {
      const {userProfileId, name, username} = details;
      this.SentryObj.setUser({
        userProfileId: userProfileId,
        name: name,
        username: username,
      });
    } catch (setUserError) {
      console.log('Set user error', setUserError);
    }
  };*/
}
const SentryModuleInstance = new SentryModule();
export default SentryModuleInstance;
