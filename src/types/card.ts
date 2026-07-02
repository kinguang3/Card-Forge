export interface CardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  attack: number;
  defense: number;
  cost: number;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  fontName: string;
  template: string;
  width: number;
  height: number;
  showStats: boolean;
  rounded: boolean;
  imageScaleType: 'contain' | 'cover' | 'fill';
  showCardFlip: boolean;
  statsPosition: { x: number; y: number };
  titlePosition: { x: number; y: number };
  subtitlePosition: { x: number; y: number };
  descriptionPosition: { x: number; y: number };
  titleFontSize: number;
  subtitleFontSize: number;
  descriptionFontSize: number;
}

export interface Template {
  id: string;
  name: string;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  preview: string;
}

export const DEFAULT_CARD_DATA: CardData = {
  id: 'card-1',
  title: '神秘卡牌',
  subtitle: 'A',
  description: '这是一张神秘的卡牌，拥有强大的力量。',
  imageUrl: '',
  attack: 10,
  defense: 8,
  cost: 7,
  backgroundColor: '#FFFFFF',
  borderColor: '#000000',
  textColor: '#000000',
  fontName: 'Georgia',
  template: 'classic',
  width: 288,
  height: 420,
  showStats: false,
  rounded: true,
  imageScaleType: 'contain',
  showCardFlip: false,
  statsPosition: { x: 50, y: 90 },
  titlePosition: { x: 50, y: 92 },
  subtitlePosition: { x: 8, y: 6 },
  descriptionPosition: { x: 50, y: 78 },
  titleFontSize: 14,
  subtitleFontSize: 20,
  descriptionFontSize: 12
};

export const TEMPLATES: Template[] = [
  {
    id: 'classic',
    name: '经典',
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    textColor: '#000000',
    preview: '#FFFFFF'
  },
  {
    id: 'red',
    name: '红色',
    backgroundColor: '#FFFFFF',
    borderColor: '#DC143C',
    textColor: '#DC143C',
    preview: '#FFFFFF'
  },
  {
    id: 'blue',
    name: '蓝色',
    backgroundColor: '#FFFFFF',
    borderColor: '#1E3A8A',
    textColor: '#1E3A8A',
    preview: '#FFFFFF'
  },
  {
    id: 'gold',
    name: '金色',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFD700',
    textColor: '#8B4513',
    preview: '#FFFFFF'
  },
  {
    id: 'green',
    name: '绿色',
    backgroundColor: '#FFFFFF',
    borderColor: '#166534',
    textColor: '#166534',
    preview: '#FFFFFF'
  }
];

export const FONT_OPTIONS = [
  { id: 'Georgia', name: 'Georgia' },
  { id: 'Times New Roman', name: 'Times New Roman' },
  { id: 'Arial', name: 'Arial' },
  { id: 'Verdana', name: 'Verdana' },
  { id: 'Courier New', name: 'Courier New' },
  { id: 'Impact', name: 'Impact' },
  { id: 'Comic Sans MS', name: 'Comic Sans MS' },
  { id: 'SimSun', name: '宋体' },
  { id: 'Microsoft YaHei', name: '微软雅黑' },
  { id: 'KaiTi', name: '楷体' },
  { id: 'FangSong', name: '仿宋' }
];

export const IMAGE_SCALE_OPTIONS = [
  { id: 'contain', name: '自适应' },
  { id: 'cover', name: '覆盖' },
  { id: 'fill', name: '填充' }
];