type Text = { en: string; sw: string }

export interface ProductPage {
  slug: string
  name: string
  navDescription: Text
  image: string
  stepsImage: string
  eyebrow: Text
  headline: Text
  tagline?: Text
  heroIntro: Text
  overview: Text
  purpose: [{ label: Text; text: Text }, { label: Text; text: Text }]
  highlights: { value: string; label: Text }[]
  partner?: { title: Text; text: Text }
  steps: Text[]
  qualifies?: { title: Text; text: Text }[]
  capabilities?: { title: Text; text: Text }[]
  audience?: Text
  benefitsTitle: Text
  benefits: { title: Text; text: Text }[]
  faq?: { question: Text; answer: Text }[]
}

export const productPages: ProductPage[] = [
  {
    slug: 'dawa-kwanza',
    name: 'Dawa Kwanza',
    navDescription: { en: 'Stock financing', sw: 'Ufadhili wa stoo' },
    image: '/image copy 7.png',
    stepsImage: '/bodaman.png',
    eyebrow: { en: 'Stock financing', sw: 'Ufadhili wa stoo' },
    headline: { en: 'Get your stock today. Pay within 28 days.', sw: 'Pata stoo yako leo. Lipa ndani ya siku 28.' },
    tagline: { en: 'Dawa Kwanza — malipo baadaye.', sw: 'Dawa Kwanza — malipo baadaye.' },
    heroIntro: { en: 'Stock financing for pharmacies, clinics and dispensaries — receive medicines now and repay within 28 days through M-Pesa.', sw: 'Ufadhili wa stoo kwa famasia, kliniki na zahanati — pokea dawa sasa na ulipe ndani ya siku 28 kupitia M-Pesa.' },
    overview: {
      en: 'Dawa Kwanza is Dawa Mkononi’s stock financing service for health facilities. It lets pharmacies, clinics and dispensaries receive the medicines they need now and pay later, so a tight week never means an empty shelf.',
      sw: 'Dawa Kwanza ni huduma ya Dawa Mkononi ya kufadhili stoo kwa vituo vya afya. Inawezesha famasia, kliniki na zahanati kupokea dawa wanazohitaji sasa na kulipa baadaye, ili wiki ngumu isimaanishe rafu tupu.',
    },
    purpose: [
      { label: { en: 'Partners', sw: 'Washirika' }, text: { en: 'Built with Vodacom M-Pesa and NCBA Bank — approve and repay through your own Lipa Number.', sw: 'Imejengwa na Vodacom M-Pesa na Benki ya NCBA — idhinisha na lipa kupitia Lipa Namba yako.' } },
      { label: { en: '28 days', sw: 'Siku 28' }, text: { en: 'Medicines delivered now, repaid within 28 days. Your limit grows as you buy and repay.', sw: 'Dawa zinaletwa sasa, unalipa ndani ya siku 28. Kikomo chako kinakua kadiri unavyonunua na kulipa.' } },
    ],
    highlights: [
      { value: 'TZS 2.4B+', label: { en: 'Financed for health facilities', sw: 'Zimefadhiliwa kwa vituo vya afya' } },
      { value: '28', label: { en: 'Days to repay', sw: 'Siku za kulipa' } },
      { value: 'M-Pesa', label: { en: 'Approve and repay with your Lipa Number', sw: 'Idhinisha na lipa kwa Lipa Namba yako' } },
    ],
    partner: {
      title: { en: 'Built with Vodacom M-Pesa and NCBA Bank', sw: 'Imejengwa pamoja na Vodacom M-Pesa na Benki ya NCBA' },
      text: {
        en: 'Orders are approved and repaid through your own M-Pesa Lipa Number, and NCBA pays Dawa Mkononi on your behalf.',
        sw: 'Oda huidhinishwa na kulipwa kupitia Lipa Namba yako ya M-Pesa, na NCBA hulipa Dawa Mkononi kwa niaba yako.',
      },
    },
    steps: [
      { en: 'Eligible customers are enrolled onto Dawa Kwanza.', sw: 'Wateja wanaostahili husajiliwa kwenye Dawa Kwanza.' },
      { en: 'You order medicines from Dawa Mkononi.', sw: 'Unaagiza dawa kutoka Dawa Mkononi.' },
      { en: 'You approve the order in the Dawa Mkononi app and with your Vodacom Lipa Number.', sw: 'Unaidhinisha oda kwenye App ya Dawa Mkononi na kwa Lipa Namba yako ya Vodacom.' },
      { en: 'NCBA pays Dawa Mkononi, and your medicines are delivered.', sw: 'NCBA inalipa Dawa Mkononi, na dawa zako zinaletwa.' },
      { en: 'You repay through your Vodacom Lipa Number within 28 days.', sw: 'Unalipa kupitia Lipa Namba yako ya Vodacom ndani ya siku 28.' },
    ],
    qualifies: [
      { title: { en: '3 months', sw: 'Miezi 3' }, text: { en: 'An active Dawa Mkononi customer for at least 3 consecutive months', sw: 'Mteja hai wa Dawa Mkononi kwa angalau miezi 3 mfululizo' } },
      { title: { en: 'Good credit', sw: 'Mkopo mzuri' }, text: { en: 'A good credit score based on purchase history', sw: 'Alama nzuri ya mkopo kulingana na historia ya manunuzi' } },
      { title: { en: '5 purchases', sw: 'Manunuzi 5' }, text: { en: 'At least 5 purchases, with a mix of cash and credit', sw: 'Angalau manunuzi 5, ya taslimu na mkopo' } },
      { title: { en: 'Lipa Number', sw: 'Lipa Namba' }, text: { en: 'An active Vodacom M-Pesa Lipa Number', sw: 'Lipa Namba hai ya Vodacom M-Pesa' } },
    ],
    benefitsTitle: { en: 'Benefits — Faida zako', sw: 'Faida zako' },
    benefits: [
      { title: { en: 'Access to credit', sw: 'Upatikanaji wa mkopo' }, text: { en: 'Get the stock you need even when you don’t have cash at hand, and pay back within 28 days.', sw: 'Pata stoo unayohitaji hata kama huna pesa mkononi, na ulipe ndani ya siku 28.' } },
      { title: { en: 'Limits that grow', sw: 'Kikomo kinachoongezeka' }, text: { en: 'The more you buy and repay, the more credit you qualify for — typically your limit rises almost every month.', sw: 'Kadiri unavyonunua na kulipa, ndivyo unavyostahili mkopo zaidi — mara nyingi kikomo chako hupanda karibu kila mwezi.' } },
      { title: { en: 'Credit top-ups', sw: 'Kuongeza mkopo' }, text: { en: 'No need to clear the full amount first. Whatever you repay, you can use again as credit straight away — and that new order starts its own 28 days.', sw: 'Huhitaji kulipa deni lote kwanza. Unachorudisha unaweza kukitumia tena kama mkopo papo hapo — na oda hiyo mpya inaanza siku zake 28.' } },
      { title: { en: 'Cash-customer prices and offers', sw: 'Bei na ofa za wateja wa taslimu' }, text: { en: 'Because we are paid as soon as you approve an order, you get the best prices, priority and offers reserved for cash customers.', sw: 'Kwa kuwa tunalipwa mara tu unapoidhinisha oda, unapata bei bora, kipaumbele na ofa za wateja wa taslimu.' } },
      { title: { en: 'Cash and credit together', sw: 'Taslimu na mkopo pamoja' }, text: { en: 'You can still buy with cash when enrolled. When cash isn’t enough for an order, Dawa Kwanza covers the balance.', sw: 'Bado unaweza kununua kwa taslimu ukiwa umesajiliwa. Pesa isipotosha kwa oda, Dawa Kwanza inamalizia kiasi kilichobaki.' } },
    ],
  },
  {
    slug: 'nora',
    name: 'Nora AI',
    navDescription: { en: 'Your ordering assistant', sw: 'Msaidizi wa kuagiza' },
    image: '/pharmacist holding medicine2.jpeg',
    stepsImage: '/image copy 5.png',
    eyebrow: { en: 'Your ordering assistant', sw: 'Msaidizi wako wa kuagiza' },
    headline: { en: 'Tell Nora what you need. She builds your order.', sw: 'Mwambie Nora unachohitaji. Yeye anaandaa oda yako.' },
    heroIntro: { en: 'Type, paste, snap or upload your list — Nora finds the products and builds your order, in Swahili or English.', sw: 'Andika, bandika, piga picha au pakia orodha yako — Nora anapata bidhaa na kuandaa oda yako, kwa Kiswahili au Kiingereza.' },
    overview: {
      en: 'Nora AI is the ordering assistant inside the Dawa Mkononi app. Type, paste a list, send a photo or upload a file, and Nora finds the products with their prices and builds your order. She remembers what you usually buy, speaks Swahili and English, and is free to use. Nothing is ordered until you tap confirm your order.',
      sw: 'Nora AI ni msaidizi wa kuagiza ndani ya App ya Dawa Mkononi. Andika, bandika orodha, tuma picha au pakia faili, na Nora atapata bidhaa pamoja na bei zake na kuandaa oda yako. Anakumbuka unachonunua mara kwa mara, anazungumza Kiswahili na Kiingereza, na ni bure. Hakuna kinachoagizwa mpaka ubonyeze kuthibitisha oda.',
    },
    purpose: [
      { label: { en: 'For', sw: 'Kwa' }, text: { en: 'Counter and procurement staff at pharmacies, clinics and hospitals.', sw: 'Wafanyakazi wa kaunta na manunuzi katika famasia, kliniki na hospitali.' } },
      { label: { en: 'Free', sw: 'Bure' }, text: { en: 'Free to use, in Swahili and English. Nothing is ordered until you confirm.', sw: 'Ni bure, kwa Kiswahili na Kiingereza. Hakuna kinachoagizwa mpaka uthibitishe.' } },
    ],
    highlights: [
      { value: 'Free', label: { en: 'No cost to use', sw: 'Bure kutumia' } },
      { value: 'SW + EN', label: { en: 'Swahili, English or a mix', sw: 'Kiswahili, Kiingereza au mchanganyiko' } },
      { value: '24/7', label: { en: 'Order day or night', sw: 'Agiza mchana au usiku' } },
    ],
    steps: [
      { en: 'Open the Dawa Mkononi app and tap Nora AI on the home menu.', sw: 'Fungua App ya Dawa Mkononi na ubonyeze Nora AI kwenye menyu kuu.' },
      { en: 'Tell Nora what you need — in Swahili, English, or both.', sw: 'Mwambie Nora unachohitaji — kwa Kiswahili, Kiingereza, au vyote.' },
      { en: 'Nora finds the products and adds them to your cart.', sw: 'Nora anapata bidhaa na kuziweka kwenye kikapu chako.' },
      { en: 'Check the cart and tap confirm your order.', sw: 'Kagua kikapu na ubonyeze kuthibitisha oda yako.' },
    ],
    capabilities: [
      { title: { en: 'Order by typing', sw: 'Agiza kwa kuandika' }, text: { en: 'Type a product, or paste a whole list', sw: 'Andika bidhaa, au bandika orodha nzima' } },
      { title: { en: 'Order from a photo', sw: 'Agiza kwa picha' }, text: { en: 'Snap a handwritten list, a medicine box or your shelf', sw: 'Piga picha ya orodha ya mkono, boksi la dawa au rafu yako' } },
      { title: { en: 'Order from a file', sw: 'Agiza kwa faili' }, text: { en: 'Upload Excel (.xlsx, .xls), .csv, .pdf or .txt', sw: 'Pakia Excel (.xlsx, .xls), .csv, .pdf au .txt' } },
      { title: { en: 'Repeat your usual order', sw: 'Rudia oda yako ya kawaida' }, text: { en: 'Say “Place my usual order” / “Niandalie oda yangu ya kawaida”', sw: 'Sema “Niandalie oda yangu ya kawaida” / “Place my usual order”' } },
      { title: { en: 'Track an order', sw: 'Fuatilia oda' }, text: { en: 'Ask “Where is my last order?”', sw: 'Uliza “Oda yangu ya mwisho iko wapi?”' } },
      { title: { en: 'Check your Dawa Kwanza credit', sw: 'Angalia mkopo wa Dawa Kwanza' }, text: { en: 'Ask “Angalia mkopo” or “Salio langu”', sw: 'Uliza “Angalia mkopo” au “Salio langu”' } },
      { title: { en: 'Find an alternative', sw: 'Pata mbadala' }, text: { en: 'Nora suggests equivalents when a brand is out of stock', sw: 'Nora anapendekeza mbadala bidhaa ikiisha' } },
      { title: { en: 'Get answers on policies', sw: 'Pata majibu ya sera' }, text: { en: 'Returns, exchanges and account verification', sw: 'Kurudisha, kubadilisha na uthibitisho wa akaunti' } },
      { title: { en: 'Talk to a person', sw: 'Ongea na mtu' }, text: { en: 'Nora hands you to customer care on WhatsApp, with your details', sw: 'Nora anakuunganisha na huduma kwa wateja kwenye WhatsApp, pamoja na taarifa zako' } },
    ],
    audience: {
      en: 'Pharmacy, clinic and hospital staff who order stock — especially busy counter and procurement staff who order between customers.',
      sw: 'Wafanyakazi wa famasia, kliniki na hospitali wanaoagiza stoo — hasa wa kaunta na manunuzi wenye shughuli nyingi wanaoagiza kati ya wateja.',
    },
    benefitsTitle: { en: 'Benefits', sw: 'Faida' },
    benefits: [
      { title: { en: 'Faster at the counter', sw: 'Haraka zaidi kaunta' }, text: { en: 'Paste or photograph a whole list instead of searching item by item.', sw: 'Bandika au piga picha orodha nzima badala ya kutafuta bidhaa moja moja.' } },
      { title: { en: 'Never lose an order line', sw: 'Usipoteze bidhaa kwenye oda' }, text: { en: 'Nora understands misspellings and suggests alternatives when an item is out.', sw: 'Nora anaelewa makosa ya tahajia na anapendekeza mbadala bidhaa ikiisha.' } },
      { title: { en: 'Order any time', sw: 'Agiza wakati wowote' }, text: { en: 'Day or night, without waiting for someone to answer the phone.', sw: 'Mchana au usiku, bila kusubiri mtu apokee simu.' } },
      { title: { en: 'Your language', sw: 'Lugha yako' }, text: { en: 'Swahili, English, or a mix.', sw: 'Kiswahili, Kiingereza, au mchanganyiko.' } },
      { title: { en: 'Shared by your team', sw: 'Inatumiwa na timu yako' }, text: { en: 'The cart and order history belong to the facility, so two staff can order on separate phones.', sw: 'Kikapu na historia ya oda ni vya kituo, hivyo wafanyakazi wawili wanaweza kuagiza kwa simu tofauti.' } },
      { title: { en: 'Credit in the same chat', sw: 'Mkopo ndani ya mazungumzo hayo hayo' }, text: { en: 'See your Dawa Kwanza limit, balance and due date before you confirm.', sw: 'Ona kikomo, salio na tarehe ya kulipa ya Dawa Kwanza kabla ya kuthibitisha.' } },
    ],
    faq: [
      { question: { en: 'Does Nora cost anything?', sw: 'Je, Nora ana gharama yoyote?' }, answer: { en: 'No, Nora is free.', sw: 'Hapana, Nora ni bure.' } },
      { question: { en: 'Can Nora change or cancel a confirmed order?', sw: 'Je, Nora anaweza kubadilisha au kufuta oda iliyothibitishwa?' }, answer: { en: 'No — she passes you to customer care, who will help.', sw: 'Hapana — atakuunganisha na huduma kwa wateja, watakaokusaidia.' } },
      { question: { en: 'Does Nora work without internet?', sw: 'Je, Nora anafanya kazi bila intaneti?' }, answer: { en: 'No. Typing works on a weak signal; photos and files need a steadier connection.', sw: 'Hapana. Kuandika kunafanya kazi hata mtandao ukiwa dhaifu; picha na faili zinahitaji mtandao imara zaidi.' } },
      { question: { en: 'Can I ask Nora about doses or treatment?', sw: 'Je, naweza kumuuliza Nora kuhusu dozi au matibabu?' }, answer: { en: 'No. Nora helps with products, prices, stock and orders, not medical advice.', sw: 'Hapana. Nora anasaidia kuhusu bidhaa, bei, stoo na oda, si ushauri wa kitabibu.' } },
    ],
  },
  {
    slug: 'pos',
    name: 'Dawa Mkononi POS',
    navDescription: { en: 'Manage stock and sales', sw: 'Simamia stoo na mauzo' },
    image: '/pharmacist holding medicine3.jpeg',
    stepsImage: '/dawa.jpeg',
    eyebrow: { en: 'Point of sale', sw: 'Mfumo wa mauzo' },
    headline: { en: 'Run your pharmacy from your phone.', sw: 'Endesha famasia yako kutoka kwenye simu.' },
    heroIntro: { en: 'Record sales, restocks and expiry dates in the same app you order from — free, with no paper book.', sw: 'Rekodi mauzo, stoo mpya na tarehe za kuisha muda kwenye App ile ile unayoagizia — bure, bila daftari.' },
    overview: {
      en: 'Dawa Mkononi POS is a point-of-sale tool built into the Dawa Mkononi app. Pharmacies and clinics record sales, restocks, stock levels and expiry dates in the same app they already use to order medicines — no extra system, no paper book.',
      sw: 'Dawa Mkononi POS ni zana ya mauzo iliyo ndani ya App ya Dawa Mkononi. Famasia na kliniki hurekodi mauzo, stoo mpya, viwango vya stoo na tarehe za kuisha muda kwenye App ile ile wanayotumia kuagiza dawa — bila mfumo wa ziada, bila daftari.',
    },
    purpose: [
      { label: { en: 'For', sw: 'Kwa' }, text: { en: 'Pharmacies and clinics that dispense at the counter, especially those still keeping records by hand.', sw: 'Famasia na kliniki zinazotoa dawa kaunta, hasa zinazoweka kumbukumbu kwa mkono.' } },
      { label: { en: 'Free', sw: 'Bure' }, text: { en: 'Free inside the Dawa Mkononi app — no extra system, no paper book.', sw: 'Bure ndani ya App ya Dawa Mkononi — bila mfumo wa ziada, bila daftari.' } },
    ],
    highlights: [
      { value: 'Free', label: { en: 'Built into the app', sw: 'Iko ndani ya App' } },
      { value: '1 app', label: { en: 'Order, sell and track stock', sw: 'Agiza, uza na fuatilia stoo' } },
      { value: 'Alerts', label: { en: 'Before you run out', sw: 'Kabla stoo haijaisha' } },
    ],
    steps: [
      { en: 'Open the POS section of the Dawa Mkononi app.', sw: 'Fungua sehemu ya POS kwenye App ya Dawa Mkononi.' },
      { en: 'Load your opening stock with quantities, prices and expiry dates.', sw: 'Weka stoo ya kuanzia pamoja na idadi, bei na tarehe za kuisha muda.' },
      { en: 'Record each sale and each restock at the counter as it happens.', sw: 'Rekodi kila mauzo na kila stoo mpya kaunta inapotokea.' },
      { en: 'Get an alert when an item reaches its minimum quantity.', sw: 'Pata taarifa bidhaa inapofikia kiwango cha chini.' },
      { en: 'Record restocks from any supplier, not only Dawa Mkononi.', sw: 'Rekodi stoo kutoka kwa msambazaji yeyote, si Dawa Mkononi pekee.' },
      { en: 'View reports on sales, purchases, fast-moving items and peak selling times.', sw: 'Tazama ripoti za mauzo, manunuzi, bidhaa zinazotoka haraka na nyakati za mauzo makubwa.' },
    ],
    audience: {
      en: 'Pharmacies and clinics that dispense at the counter, especially those still keeping records by hand. All you need is a smartphone with the Dawa Mkononi app.',
      sw: 'Famasia na kliniki zinazotoa dawa kaunta, hasa zile ambazo bado zinaweka kumbukumbu kwa mkono. Unachohitaji ni simu janja yenye App ya Dawa Mkononi.',
    },
    benefitsTitle: { en: 'What you get', sw: 'Unachopata' },
    benefits: [
      { title: { en: 'Inventory', sw: 'Stoo' }, text: { en: 'Track stock in and out, get low-stock alerts before you run out, and record expiry dates at intake so medicines are sold before they expire.', sw: 'Fuatilia stoo inayoingia na kutoka, pata taarifa kabla haijaisha, na rekodi tarehe za kuisha muda ili dawa ziuzwe kabla hazijaharibika.' } },
      { title: { en: 'Customers', sw: 'Wateja' }, text: { en: 'Register regular customers and see who buys most and what each customer buys.', sw: 'Sajili wateja wa kudumu na uone nani ananunua zaidi na kila mteja ananunua nini.' } },
      { title: { en: 'Suppliers', sw: 'Wasambazaji' }, text: { en: 'Record restocks from every supplier, keeping all purchases in one place.', sw: 'Rekodi stoo kutoka kwa kila msambazaji, manunuzi yote yakiwa sehemu moja.' } },
      { title: { en: 'Revenue', sw: 'Mapato' }, text: { en: 'Reports on sales and purchases, fastest-moving items, your busiest hours and days, and the total value of stock on your shelves.', sw: 'Ripoti za mauzo na manunuzi, bidhaa zinazotoka haraka, saa na siku zenye shughuli nyingi, na thamani ya stoo yote kwenye rafu zako.' } },
    ],
    faq: [
      { question: { en: 'Does POS cost anything?', sw: 'Je, POS ina gharama yoyote?' }, answer: { en: 'It is free.', sw: 'Ni bure.' } },
      { question: { en: 'Is there a computer version?', sw: 'Je, kuna toleo la kompyuta?' }, answer: { en: 'Not yet — POS currently works in the mobile app only.', sw: 'Bado — kwa sasa POS inafanya kazi kwenye App ya simu pekee.' } },
      { question: { en: 'Can I record stock bought from other suppliers?', sw: 'Je, naweza kurekodi stoo niliyonunua kwa wasambazaji wengine?' }, answer: { en: 'Yes.', sw: 'Ndiyo.' } },
    ],
  },
]

export function getProductPage(slug: string) {
  return productPages.find((product) => product.slug === slug)
}
