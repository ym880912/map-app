export function getAllDesk () {
  return [
    { id: 'A1', x: 730, y: 220, width: 10, height: 20 },
    { id: 'A2', x: 730, y: 240, width: 10, height: 20 },
    { id: 'A3', x: 730, y: 260, width: 10, height: 20 },
    { id: 'A4', x: 730, y: 280, width: 10, height: 20 },
    { id: 'A5', x: 730, y: 300, width: 10, height: 20 },
    { id: 'A6', x: 730, y: 320, width: 10, height: 20 },
    { id: 'A7', x: 730, y: 340, width: 10, height: 20 },
    { id: 'A11', x: 750, y: 220, width: 10, height: 20 },
    { id: 'A12', x: 750, y: 240, width: 10, height: 20 },
    { id: 'A13', x: 750, y: 260, width: 10, height: 20 },
    { id: 'A14', x: 750, y: 280, width: 10, height: 20 },
    { id: 'A15', x: 750, y: 300, width: 10, height: 20 },
    { id: 'A16', x: 750, y: 320, width: 10, height: 20 },
    { id: 'A17', x: 750, y: 340, width: 10, height: 20 }
  ]
}

export function getAllUser () {
  return [
    {
      id: 1,
      date: '両日',
      deskId: ['D-77', 'D-78'],
      name: 'mhd',
      tag: ['ファッション', 'アクセサリー'],
      introduction: 'mhdはデザイン業を営む MASAKAZU HORI DESIGN が運営。代表の堀は、2004年大阪芸術大学卒業後に総合ペット用品メーカーに勤務後に独立しフリーデザイナーとして欧州の各製造業の現場にも趣き製造業の現場やクラフトマンシップに触れながら創作活動も行い、ミラノサローネなどの出展も経験、帰国後にmhdを地元の大阪・堺でスタート。「日本列島デザインネックレス」が評判を得るなど大手小売店との取引も開始。その後、革問屋の多い関西の土地柄もあり革小物を中心とした展開も広げ「本革の端切れからできたリボンブローチRe:born」などアップサイクル商品シリーズは全国の小売店で販売。',
      information: 'mhdは、プロダクトデザイナー堀真寿のオリジナルデザイン雑貨ブランドです。「デザイン＝おもいやり」をテーマに発想されたプロダクトには、まるで命が吹き込まれているかのような存在感と優しさを感じることができます。プロダクトデザイナーならではの発想で創作された、シンプルながらも心地よく、長く使って飽きがこない、 愛着が生まれ大切に使い続けたくなるような素材やデザイン、そして、日本を感じられる商品開発を心がけています。「国産本革に拘ったレザーアイテム」「日本文化のすばらしさを再確認できるアクセサリーアイテム」等を展開しています。',
      homepage: 'http://www.mhd-japan.com/',
      sns: {
        twitter: 'https://twitter.com/mhdjapan',
        facebook: 'https://www.instagram.com/mhd_japan/'
      },
      imageUrl: 'https://designfesta.com/exhibitors/introduction/jp/img_honban/530225_1_014922.jpg'
    },
    {
      id: 2,
      date: '両日',
      deskId: ['D-265'],
      name: 'ゴシックホリック',
      tag: ['ファッション', 'アクセサリー'],
      introduction: 'ゴシックホリック',
      information: '髪や帽子につけるキラキラの蝶々クリップや耳やしっぽのモフモフなケモノアイテムをたくさん連れて参加します。いつものファッションにちょっとアクセントを。',
      homepage: 'https://gothicholic.com',
      imageUrl: 'https://designfesta.com/exhibitors/introduction/jp/img_honban/530378_1_022214.jpg'
    },
    {
      id: 3,
      date: '土曜日',
      deskId: ['D-280'],
      name: 'くろねこ宝石店',
      tag: ['アクセサリー', '雑貨'],
      introduction: 'デザフェスには2回目の出展です。\nくろねこ宝石店の立花千里と、友人の立花万里のお店「Golden calcite」と共同出展しています。',
      information: 'くろねこ宝石店はレジンを使用した作品がメインです。"いつでも一緒にお出かけ"をコンセプトに、猫や鳥など動物モチーフを中心にバッグチャームやヘアアクセサリーなどを作っています。\nGolden calciteはフクロウをモチーフとした作品を制作しています。本物のフクロウの羽根を使用したアクセサリーやチャームはオススメです。\nまた羽根を使用した「猫のおもちゃ」はネコちゃん、飼い主さん共に好評ですよ！\nぜひ遊びに来て下さい。',
      imageUrl: 'https://designfesta.com/exhibitors/introduction/jp/img_honban/531442_1_010006.jpg'
    }
  ]
}
