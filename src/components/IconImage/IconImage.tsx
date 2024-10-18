import Image        from 'next/image';
import React        from 'react'
import Light        from '@/assets/light.svg'
import Dark         from '@/assets/dark.svg'
import Github       from '@/assets/github.svg'
import Instagram    from '@/assets/instagram.svg'
// import Kakao        from '@/assets/kakao.svg'
// import ArrowDown    from '@/assets/arrow_down.png'
// import ArrowLeft   from 'assets/arrow_left.png';
// import ArrowRight   from 'assets/arrow_right.png';

interface IconProps {
  icon: 'DARK' |
        'LIGHT' |
        // 'USER'|
        'INSTAGRAM' |
        'GITHUB'
        // 'KAKAO'|
        // 'ARROWDOWN'|
        // 'ARROWLEFT' |
        // 'ARROWRIGHT'
}

interface IconImageProps extends IconProps {
  width       ?: number;
  height      ?: number;
}

const isDiscernIcon = ({ icon }: IconProps) => {
  switch (icon) {
    case 'LIGHT':
      return Light;
    case 'DARK':
      return Dark;
    case 'GITHUB':
      return Github;
    case 'INSTAGRAM':
      return Instagram;
    // case 'KAKAO':
    //   return Kakao;
    // case 'ARROWDOWN':
    //   return ArrowDown;
    // case 'ARROWLEFT':
    //   return ArrowLeft;
    // case 'ARROWRIGHT':
    //   return ArrowRight;
    default:
      break;
  };
}

const IconImage = ({
  icon,
  width       = 24,
  height      = 24
}: IconImageProps) => {
  const Icon: any = isDiscernIcon({ icon });
  
  // if (icon === 'INSTAGRAM') {
  //   return (
  //     <>
  //       <Icon width={width} height={height} fill={} />
  //     </>
  //   );
  // }
  return (
    <>
      <Image src={Icon} alt="아이콘" width={width} height={height}/>
    </>
  )
}

// const SvgComponent = ({

// }) => {
//   return (
//     <Icon width
//   );
// }

export { IconImage };