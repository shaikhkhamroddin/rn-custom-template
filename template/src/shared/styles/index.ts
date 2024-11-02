import {Dimensions, TextStyle, ViewStyle} from 'react-native';

const standardWidth = 375.0;
const standardHeight = 812.0;

export const myWidth: number = Dimensions.get('window').width;
export const myHeight: number = Dimensions.get('window').height;

export function widthScale(dimension: number): number {
  return (dimension / standardWidth) * myWidth;
}

export function heightScale(dimension: number): number {
  return (dimension / standardHeight) * myHeight;
}

type StyleObj = {
  [key: string]: ViewStyle | TextStyle;
};
export const commonStyles: StyleObj = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lable: {
    fontSize: widthScale(16),
    fontWeight: 'bold',
    color:'white',
  },
  btn: {
    marginTop: heightScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    height: heightScale(45),
    borderRadius: widthScale(10),
    width: widthScale(200),
    backgroundColor: '#0096FF',
    shadowColor:'#171717',
    elevation:20,

    // ios shadow
    // shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
};
