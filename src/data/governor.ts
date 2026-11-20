import photo from '../assets/governor/gov-and-vg.png';

/**
 * Governor's Message, verbatim from the live site (content.md §6).
 * The section shows only the first `excerptParagraphs`; the rest expands in place. The photo is the one the
 * live site shows beside the message (Governor and Vice Governor).
 * Note: the message still says "newly launched" and refers to the pandemic (audit item, content.md §12).
 */
export const governor = {
  photo: { src: photo, alt: 'Governor Daniel R. Fernando and Vice Governor Alex C. Castro' },
  eyebrow: 'From the Governor',
  heading: "Governor's Message",
  attribution: { name: 'Daniel R. Fernando', title: 'Governor of Bulacan' },
  readMore: 'Read full message',
  readLess: 'Show less',
  excerptParagraphs: 1,
  paragraphs: [
    'Brimming with pride and joy, I welcome you all to the newly launched official website of the Provincial Government of Bulacan!',
    "It is my great pleasure to have you visit our inclusive online platform that aims to uphold our adherence to a responsive, fair and transparent governance. May this site empower our dear constituents with understanding about our province's milestones, programs and aspirations.",
    'In here, we let everyone witness how the unity and shared dynamism of the local government and the people have constantly opened doors to promote our tourism, agriculture and economy; preserve our history and cultural heritage; reinforce our preparedness and response to crises and calamities; and move forward as a more resilient and thriving province.',
    "As the People's Governor, it is my utmost duty to ensure that the voice and the will of the Bulakeños are prioritized in launching sustainable interventions in the province, as part of our continued fulfillment of The People's Agenda 10 advocacies.",
    'My dear Bulakeños, we have gone past the darkest days of the pandemic. I want to commend each and every one for braving through every challenge and standing up with renewed strength and faith in God. In our journey to recovery, I encourage everyone to continue putting your trust in your public servants towards achieving everlasting peace and progress for our beloved province.',
    'Cheers to our empowered Bulakeños! Cheers to our beloved province of Bulacan!',
  ],
} as const;
