import React from 'react';
import {Text, View, Modal, StyleSheet, Pressable} from 'react-native';
import SpInAppUpdates, {
  IAUUpdateKind,
  IAUInstallStatus,
} from 'sp-react-native-in-app-updates';
import {useFocusEffect} from '@react-navigation/native';
import {useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {VERSION_NO} from '../../constants';
import {getTestID} from '../../../utils/appium';
import AppTypography from '../../theme/fonts';
import {widthScale} from '../../styles';
import {COLORS} from '../../theme/colors';
export interface AppUpdateResp {
  status: number;
  totalBytesToDownload: number;
  bytesDownloaded: number;
}

const UpdateAppModal = ({testId = 'updateAppModal'}) => {
  const inAppUpdates = new SpInAppUpdates(false);
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [downloadedValue, setDownloadedValue] = useState('');
  const {t} = useTranslation();
  const checkForUpdate = () => {
    inAppUpdates
      .checkNeedsUpdate({curVersion: VERSION_NO})
      .then(result => {
        setIsUpdateAvailable(result?.shouldUpdate);
      })
      .catch(checkUpdateError =>
        console.log('Check update error :', checkUpdateError),
      );
  };

  const startUpdate = () => {
    const updateOptions = {
      updateType: IAUUpdateKind.FLEXIBLE,
    };
    inAppUpdates.addStatusUpdateListener(
      ({
        status,
        totalBytesToDownload = 0,
        bytesDownloaded = 0,
      }: AppUpdateResp) => {
        if (status === IAUInstallStatus.DOWNLOADING) {
          if (totalBytesToDownload && bytesDownloaded) {
            const percentage = (bytesDownloaded * 100) / totalBytesToDownload;
            setDownloadedValue(`Downloading (${percentage}%)`);
          }
        }
        if (status === IAUInstallStatus.DOWNLOADED) {
          inAppUpdates.removeStatusUpdateListener(_ => {});
          inAppUpdates.installUpdate();
        }
      },
    );
    inAppUpdates.startUpdate(updateOptions).catch(e => {
      console.log('startUpdate error', e);
    });
  };

  useFocusEffect(
    useCallback(() => {
      checkForUpdate();
    }, []),
  );

  return (
    <Modal
      visible={isUpdateAvailable}
      transparent
      {...getTestID('modal-' + testId)}>
      <View style={styles.container} {...getTestID('mainview-' + testId)}>
        <View style={styles.subContainer} {...getTestID('subview-' + testId)}>
          {!downloadedValue && (
            <Text
              style={[styles.textMessage]}
              {...getTestID('text-message-' + testId)}>
              {t('common:appUpdateMessage')}
            </Text>
          )}

          {downloadedValue && (
            <Text
              style={[styles.textMessage]}
              {...getTestID('text-value-' + testId)}>
              {downloadedValue}
            </Text>
          )}
          {!downloadedValue && (
            <View style={styles.hrline} {...getTestID('view-line-' + testId)} />
          )}

          {!downloadedValue && (
            <View
              style={styles.buttonsView}
              {...getTestID('view-btncontainer-' + testId)}>
              <Pressable
                {...getTestID('btn-upgrade-' + testId)}
                onPress={startUpdate}
                style={[styles.buttonView]}>
                <Text
                  style={styles.textButton}
                  {...getTestID('text-upgrade-' + testId)}>
                  {t('common:upgrade')}
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButtonMainView: {paddingBottom: 20, paddingTop: 20},
  buttonStyle: {
    height: 45,
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 150,
  },
  subContainer: {
    width: '70%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textMessage: {
    fontFamily: AppTypography.FONT_REGULAR,
    fontSize: widthScale(12),
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 25,
  },
  btnText: {
    textAlign: 'center',
    width: '100%',
    fontFamily: AppTypography.FONT_SEMIBOLD,
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
  },
  buttonView: {
    flex: 1,
    height: '100%',
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    backgroundColor: COLORS.colorPrimaryLightA700Main,
  },
  textButton: {
    fontFamily: AppTypography.FONT_SEMIBOLD,
    fontSize: widthScale(14),
    textAlign: 'center',
    color: COLORS.colorPrimaryLightA1100,
  },
  hrline: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.colorPrimaryLightA400,
  },
});

export default UpdateAppModal;
