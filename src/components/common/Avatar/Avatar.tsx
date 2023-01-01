import React, {
  ImgHTMLAttributes, useEffect, useRef, useState,
} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import colors from 'styles/colors';
import { WithRequired } from 'utils/WithRequired';

export enum AvatarShape {
  Circle,
  Square,
}

export interface AvatarProps {
  src: string;
  srcSet?: string;
  size?: number;
  alt?: string;
  /**
   * 아바타의 모양을 설정합니다.
   */
  shape?: AvatarShape;
  /**
   * 배지 표기를 원할 경우에 사용합니다.
   */
  statusBadge?: 'online' | 'offline';
  /**
   * 배지 표기의 사이즈를 지정합니다.
   */
  statusBadgeSize?: number;
  backgroundColor?: string;
  /**
   * 이미지를 로드하지 못했을 경우 대체해서 표시할 이미지의 주소를 설정합니다.
   */
  fallbackSrc?: string;
  /**
   * loading 옵션을 설정합니다. native image tag loading 속성입니다.
   */
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading'];
  /**
   * avatar의 border를 설정합니다.
   */
  hideBorder?: boolean;
}

function Avatar({
  src,
  srcSet,
  size = 48,
  alt = 'avatar',
  shape = AvatarShape.Circle,
  statusBadge,
  statusBadgeSize = 12,
  backgroundColor = colors.gray[300],
  fallbackSrc = CLOUDFRONT_URL,
  loading = 'lazy',
  hideBorder = false,
}: AvatarProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageSrc, setImageSrc] = useState(src);
  const [loadCompleted, setLoadCompleted] = useState(false);

  const handleOnLoad = () => {
    setLoadCompleted(true);
  };

  const handleOnError = () => {
    setImageSrc(fallbackSrc);
  };

  useEffect(() => {
    if (imageRef.current?.complete) {
      setLoadCompleted(true);
    }
  }, []);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <AvatarBlock
      size={size}
      shape={shape}
      backgroundColor={backgroundColor}
      role="article"
      hideBorder={hideBorder}
    >
      <Image
        ref={imageRef}
        src={imageSrc}
        srcSet={srcSet}
        alt={alt}
        shape={shape}
        onError={handleOnError}
        onLoad={handleOnLoad}
        loading={loading}
        visible={loadCompleted}
      />

      {statusBadge && (
        <StatusBadge
          active={statusBadge === 'online'}
          size={statusBadgeSize}
          position={calcStatusBadgePosition(size, statusBadgeSize)}
          role="status"
        />
      )}
    </AvatarBlock>
  );
}

const CLOUDFRONT_URL = 'https://d2v80xjmx68n4w.cloudfront.net/assets/images/desktop/kmong-empty-profile.png';

const shapeStyle = (shape: AvatarShape) => css`
  border-radius: ${shape === AvatarShape.Circle ? '50%' : '4px'};
`;

type AvatarBlockProps = WithRequired<Pick<AvatarProps, 'size' | 'shape' | 'hideBorder'>, 'shape'> & {
  backgroundColor: string;
};
const AvatarBlock = styled.div<AvatarBlockProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${colors.gray[300]};
  position: relative;
  outline: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);

  ${({ shape }) => shapeStyle(shape)};
  ${({ hideBorder }) => hideBorder && css`box-shadow: none;`}
`;

type ImageProps = WithRequired<Pick<AvatarProps, 'shape'>, 'shape'> & { visible: boolean };
const Image = styled.img<ImageProps>`
  display: block;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s;
  opacity: 0;

  ${(props) => shapeStyle(props.shape)};
  ${(props) => props.visible
    && css`
      opacity: 1;
    `};
`;

const calcStatusBadgePosition = (
  parentSize: number,
  badgeSize: number,
) => ((parentSize - Math.SQRT2 * (parentSize / 2)) / 2) - (badgeSize / 2);

const StatusBadge = styled.div<{ active?: boolean, size: number, position: number }>`
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.gray[300]};
  border: 1px solid white;
  z-index: 3;

  ${({ size }) => size
    && css`
      width: ${size}px;
      height: ${size}px;
    `}

  ${({ position }) => position
    && css`
    bottom: ${position}px;
    right: ${position}px;
  `}

  ${({ active }) => active
    && css`
      background-color: #7ed321;
  `}
`;

export default Avatar;
