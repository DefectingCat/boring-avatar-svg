import avatarBauhaus from './components/avatar-bauhaus';
import avatarBeam from './components/avatar-beam';
import avatarMarble from './components/avatar-marble';

type Variants = 'pixel' | 'bauhaus' | 'ring' | 'beam' | 'sunset' | 'marble';
type Props = {
  variant?: Variants;
} & AvatarProps;
export type AvatarProps = {
  colors?: [string, string, string, string, string];
  name?: string;
  square?: boolean;
  title?: boolean;
  size?: number;
};

const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble'];
const deprecatedVariants = { geometric: 'beam', abstract: 'bauhaus' };

const avatar = (props?: Props) => {
  const avatarProps: Required<Props> = {
    variant: 'marble',
    colors: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
    name: 'Clara Barton',
    square: false,
    title: true,
    size: 40,
    ...props,
  };
  const checkedVariant = () => {
    if (Object.keys(deprecatedVariants).includes(avatarProps.variant)) {
      return deprecatedVariants[avatarProps.variant];
    }
    if (variants.includes(avatarProps.variant)) {
      return avatarProps.variant;
    }
    return 'marble';
  };

  const avatars = {
    bauhaus: () => avatarBauhaus(avatarProps),
    beam: () => avatarBeam(avatarProps),
    marble: () => avatarMarble(avatarProps),
  };

  return avatars[checkedVariant()]();
};

export default avatar;
