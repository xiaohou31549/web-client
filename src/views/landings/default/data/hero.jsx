// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

export const hero = {
  headLine: (
    <>
      THE ONE STOP RESOURCE
      <br />
      FOR ALL THINGS
      <br />
      TARIFF HELP
    </>
  ),
  captionLine: 'FOR THE HUMANS IN THE ARENA',
  primaryBtn: { children: 'Explore Blocks', href: SECTION_PATH },
  // videoSrc: 'https://d2elhhoq00m1pj.cloudfront.net/houji-intro.mp4',
  videoSrc: '/assets/videos/hah.mp4',
  videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  listData: [
    { image: '/assets/images/shared/react.svg', title: 'React 19' },
    { image: '/assets/images/shared/next-js.svg', title: 'Next.js' },
    { image: '/assets/images/shared/material-ui.svg', title: 'Material UI v7' },
    { image: '/assets/images/shared/typescript.svg', title: 'TypeScript' },
    { image: '/assets/images/shared/javascript.svg', title: 'JavaScript' },
    { image: '/assets/images/shared/m3.svg', title: 'Material 3' },
    { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};
