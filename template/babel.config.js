module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          // This has to be mirrored in tsconfig.json
          '@src': './src',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@services': './src/services',
          '@assets': './src/shared/assets',
          '@components': './src/shared/components',
          '@constants': './src/shared/constants',
          '@localization': './src/shared/localization',
          '@styles': './src/shared/styles',
          '@theme': './src/shared/theme',
          '@types': './src/shared/types',
          '@vectoricons': './src/shared/vectoricons',
          '@utils': './src/utils',
          '@appium': './src/utils/appium',
          '@message': './src/utils/message',
          '@sentryutil': './src/utils/sentry',
          '@sounds': './src/utils/sounds',
        },
      },
    ],
  ],
};
