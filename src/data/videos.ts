import type { Video } from './types';

import peXuGpPKFys from '../assets/videos/peXuGpPKFys.jpg';
import z0HlifxTvPs from '../assets/videos/z0HlifxTvPs.jpg';
import ovSj7s5O_sU from '../assets/videos/ovSj7s5O_sU.jpg';
import fM0lfOQKXcY from '../assets/videos/fM0lfOQKXcY.jpg';
import me_TB3uRkBI from '../assets/videos/me_TB3uRkBI.jpg';
import eGXn1TBHfu0 from '../assets/videos/eGXn1TBHfu0.jpg';
import brBR19XiKwg from '../assets/videos/brBR19XiKwg.jpg';
import t_XT4t_QTEM from '../assets/videos/t-XT4t-QTEM.jpg';
import hO9_y4BGUNw from '../assets/videos/hO9-y4BGUNw.jpg';
import h2BdbzsLGY from '../assets/videos/7h2BdbzsLGY.jpg';

export const videosHeading = {
  title: 'Featured videos',
  moreLabel: 'More on Galing Bulacan',
  moreHref: 'https://www.youtube.com/user/MyBulacan',
};

/** 10 videos, in live-site order. The player (youtube-nocookie) loads only on click. */
export const videos: Video[] = [
  { youtubeId: 'peXuGpPKFys', title: 'Singkaban 2026 Teaser', thumbnail: peXuGpPKFys },
  { youtubeId: 'z0HlifxTvPs', title: 'Bulacan Dreamers', thumbnail: z0HlifxTvPs },
  { youtubeId: 'ovSj7s5O_sU', title: 'The State of Governance in Bulacan', thumbnail: ovSj7s5O_sU },
  { youtubeId: 'fM0lfOQKXcY', title: 'Bulacan Medical Center', thumbnail: fM0lfOQKXcY },
  { youtubeId: 'me_TB3uRkBI', title: 'Bulacan Polytechnic College', thumbnail: me_TB3uRkBI },
  {
    youtubeId: 'eGXn1TBHfu0',
    title: 'Provincial Disaster Risk Reduction and Management Council Accomplishments',
    thumbnail: eGXn1TBHfu0,
  },
  { youtubeId: 'brBR19XiKwg', title: 'PHACTO: Hiyas ng Bulacan Cultural Center', thumbnail: brBR19XiKwg },
  {
    youtubeId: 't-XT4t-QTEM',
    title: 'BIAM: Inauguration of MRI Section Department of Radiology sa Bulacan Medical Center',
    thumbnail: t_XT4t_QTEM,
  },
  { youtubeId: 'hO9-y4BGUNw', title: 'Galing Bulacan Season 2 Episode 33', thumbnail: hO9_y4BGUNw },
  { youtubeId: '7h2BdbzsLGY', title: 'Phases of Ambulance Response', thumbnail: h2BdbzsLGY },
];
