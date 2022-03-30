import {BgImageElement} from './BgImage.styled';

export const BgImage = ({src, top, left, right, bottom}) => {
  return (
    <BgImageElement
      src={src}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    />
  );
};
