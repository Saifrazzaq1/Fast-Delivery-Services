import { ViewProps } from 'react-native';
import { AnimatedProps } from 'react-native-reanimated';
import { FlexType } from '../../config/styles';
interface IAnimatedViewProps extends AnimatedProps<ViewProps> {
  flexLayout?: FlexType | FlexType[];
  width?: number | string;
  height?: number | string;
  size?: number;
  animated?: true;
}

interface IViewProps extends ViewProps {
  flexLayout?: FlexType | FlexType[];
  width?: number | string;
  height?: number | string;
  size?: number;
  animated?: false;
}
export type Props = IViewProps | IAnimatedViewProps;
