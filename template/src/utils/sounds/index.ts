var Sound = require('react-native-sound');
Sound.setCategory('Playback');

type SoundObj = {
  sound: null | {play: (_) => void};
  file: string;
  name: string;
};
export let Sounds = {
  successSound: {
    sound: null,
    file: 'beep.mp3',
    name: 'Success',
  },
};
/**
 *
 *
 * initialize : createSoundInstance(soundObj.successSound)
 * use : playParamSound(soundObj.successSound)
 */

export const createSoundInstance = (soundObj: SoundObj) => {
  soundObj.sound = new Sound(soundObj.file, Sound.MAIN_BUNDLE, (error: any) => {
    if (error) {
      console.log(`${soundObj.name} Sound failed to load the sound`, error);
      return;
    }
  });
};

export const playParamSound = (soundObj: SoundObj) => {
  if (soundObj.sound) {
    soundObj?.sound?.play((success: any) => {
      if (success) {
        console.log(`${soundObj.name} Sound successfully finished playing`);
      } else {
        console.log(
          'Alloted Sound playback failed due to audio decoding errors',
        );
      }
    });
  }
};
