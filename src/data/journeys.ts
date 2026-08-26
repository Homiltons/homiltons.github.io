export type Journey = {
  slug: string;
  title: string;
  location: string;
  date: string;
  summary: string;
  cover: string;
  images: string[];
};

export const journeys: Journey[] = [
  {
    slug: 'guangxi-chongzuo-2026',
    title: 'A slower rhythm by the border',
    location: 'Chongzuo, Guangxi',
    date: 'April 2026',
    summary: 'Karst landscapes, winding rivers, and a few quiet days close to nature.',
    cover: '/images/journeys/chongzuo/chongzuo-01.jpg',
    images: [
      '/images/journeys/chongzuo/chongzuo-01.jpg',
      '/images/journeys/chongzuo/chongzuo-02.jpg',
      '/images/journeys/chongzuo/chongzuo-03.jpg',
    ],
  },
  {
    slug: 'hong-kong-2024',
    title: 'Arts, streets, and summer light',
    location: 'Hong Kong SAR',
    date: 'August 2024',
    summary: 'Victoria Harbour, hillside streets, and the energetic contrasts of the city.',
    cover: '/images/journeys/hong-kong/hong-kong-01.jpg',
    images: [
      '/images/journeys/hong-kong/hong-kong-01.jpg',
      '/images/journeys/hong-kong/hong-kong-02.jpg',
      '/images/journeys/hong-kong/hong-kong-03.jpg',
      '/images/journeys/hong-kong/hong-kong-04.jpg',
    ],
  },
];
