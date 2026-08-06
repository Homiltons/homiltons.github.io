export type Publication = {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  venueLong: string;
  year: number;
  topic: string;
  image: string;
  paper: string;
  bibtex: string;
  contribution?: string;
};

export const publications: Publication[] = [
  {
    slug: 'monica',
    title: 'MONICA: Real-Time Monitoring and Calibration of Chain-of-Thought Sycophancy in Large Reasoning Models',
    authors: 'Jingyu Hu, Shu Yang, Xilin Gong, Hongming Wang, Weiru Liu, Di Wang',
    venue: 'ICML 2026',
    venueLong: 'International Conference on Machine Learning',
    year: 2026,
    topic: 'LLM Reasoning',
    image: '/images/publications/monica.png',
    paper: 'https://arxiv.org/abs/2511.06419',
    bibtex: `@article{hu2025monica,
  title={MONICA: Real-Time Monitoring and Calibration of Chain-of-Thought Sycophancy in Large Reasoning Models},
  author={Hu, Jingyu and Yang, Shu and Gong, Xilin and Wang, Hongming and Liu, Weiru and Wang, Di},
  journal={arXiv preprint arXiv:2511.06419},
  year={2025}
}`,
  },
  {
    slug: 'brainsegdmif',
    title: 'BrainSegDMIF: A Dynamic Fusion-enhanced SAM for Brain Lesion Segmentation',
    authors: 'Hongming Wang*, Yifeng Wu*, Huimin Huang, Hongtao Wu, Jiaxuan Jiang, Xiaodong Zhang, Hao Zheng, Yawen Huang, Xian Wu, Yefeng Zheng, Jinping Xu, Jing Cheng',
    venue: 'ACM MM 2025',
    venueLong: 'ACM International Conference on Multimedia',
    year: 2025,
    topic: 'Medical AI',
    image: '/images/publications/brainsegdmif.jpg',
    paper: 'https://dl.acm.org/doi/abs/10.1145/3746027.3755230',
    contribution: '* Equal contribution (co-first authors).',
    bibtex: `@inproceedings{wang2025brainsegdmif,
  title={BrainSegDMIF: A Dynamic Fusion-enhanced SAM for Brain Lesion Segmentation},
  author={Wang, Hongming and Wu, Yifeng and Huang, Huimin and Wu, Hongtao and Jiang, Jiaxuan and Zhang, Xiaodong and Zheng, Hao and Huang, Yawen and Wu, Xian and Zheng, Yefeng and others},
  booktitle={Proceedings of the 33rd ACM International Conference on Multimedia},
  pages={1520--1529},
  year={2025},
  note={Hongming Wang and Yifeng Wu contributed equally}
}`,
  },
];
