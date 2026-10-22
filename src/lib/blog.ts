export interface Article {
  id: string
  category: string
  image: string
  accent: string
  title: string
  summary: string
  paragraphs: string[]
}

export interface VideoLesson {
  reelId: string
  category: string
  title: string
  caption: string
  overlayTitle: string
  overlayText: string
  duration: string
}

export const articles: Article[] = [
  {
    id: 'stockouts',
    category: 'Pharmacy operations',
    image: '/image copy 5.png',
    accent: '#ED2B2C',
    title: 'A practical way to stay ahead of stockouts',
    summary: 'A few simple habits can make it easier to spot low stock before it becomes an empty shelf.',
    paragraphs: [
      'Start with the medicines that move fastest. Review their quantities often and set a minimum level that tells your team when it is time to reorder. A quick stock check at the same time each day can help make this routine easier to keep.',
      'Record new stock as it arrives and keep an eye on expiry dates. Dawa Mkononi POS helps facilities record sales, restocks and low-stock alerts in the app.',
    ],
  },
  {
    id: 'ordering',
    category: 'Ordering',
    image: '/pharmacist holding medicine2.jpeg',
    accent: '#527da4',
    title: 'Make your next medicine order easier to prepare',
    summary: 'A clear list helps your team spend less time searching and more time serving customers.',
    paragraphs: [
      'Before placing an order, gather the product names, strengths and quantities your facility needs. If you have a handwritten list, Nora AI can take a photo; you can also type your list or upload a file.',
      'Nora finds matching products and builds a cart for you to review. Check the items and prices, then confirm when you are ready. Nothing is ordered until you confirm.',
    ],
  },
  {
    id: 'cash-flow',
    category: 'Cash flow',
    image: '/bodaman.png',
    accent: '#4d8767',
    title: 'Keep essential stock moving when cash is tight',
    summary: 'Planning replenishment and payment together can help your facility keep operating through a busy month.',
    paragraphs: [
      'A pharmacy may need to replenish stock before cash from the week’s sales has come in. Dawa Kwanza gives eligible facilities a way to receive medicines now and repay within 28 days.',
      'Keep track of your orders, repayment dates and available credit so you can plan upcoming purchases with a clearer view of your cash flow.',
    ],
  },
]

export const videoLessons: VideoLesson[] = [
  {
    reelId: 'DZIUwYrqIsH',
    category: 'Ordering',
    title: 'Order your medicines with the Dawa Mkononi app',
    caption: 'Ordering your medicines has never been easier! 📱✨ Download our Dawa Mkononi App today and start ordering with ease!',
    overlayTitle: 'Dawa Mkononi App',
    overlayText: 'Order medicines for your pharmacy straight from your phone.',
    duration: '0:31',
  },
  {
    reelId: 'Db27Du1qoQh',
    category: 'Dawa Kwanza',
    title: 'Agiza stock kwa credit ya Dawa Kwanza',
    caption: 'Hakuna sababu ya kuishiwa stock wakati Dawa Mkononi ipo! 💊📦 Pata credit kupitia Dawa Kwanza, agiza stock yako na endelea na biashara bila wasiwasi. 💙📲🚀',
    overlayTitle: 'Dawa Kwanza',
    overlayText: 'Agiza stock leo, lipa ndani ya siku 28.',
    duration: '0:33',
  },
  {
    reelId: 'DcgeMV7qQN8',
    category: 'POS',
    title: 'Huduma mpya ya POS ndani ya App',
    caption: 'App ya Dawa Mkononi sasa ni bora zaidi! 📲 Pakua App yako leo na ufurahie huduma yetu mpya ya POS kwa urahisi na bila malipo yeyote. ✨',
    overlayTitle: 'Dawa Mkononi POS',
    overlayText: 'Rekodi mauzo na stock ndani ya App, bila malipo.',
    duration: '0:16',
  },
]

export function getArticle(id: string) {
  return articles.find((article) => article.id === id)
}
