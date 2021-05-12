export function getAllDesk () {
  return [
    {id: 'D70', x: 310, y:220, width: 9, height: 15},
    {id: 'D71', x: 310, y:235, width: 9, height: 15},
    {id: 'D72', x: 310, y:250, width: 9, height: 15},
    {id: 'D73', x: 310, y:265, width: 9, height: 15},
    {id: 'D74', x: 310, y:280, width: 9, height: 15},
    {id: 'D75', x: 310, y:295, width: 9, height: 15},
    {id: 'D76', x: 310, y:310, width: 9, height: 15},
    {id: 'D77', x: 310, y:325, width: 9, height: 15},
    {id: 'D78', x: 310, y:340, width: 9, height: 15},
    {id: 'D79', x: 310, y:355, width: 9, height: 15},
    {id: 'D260', x: 330, y:220, width: 9, height: 15},
    {id: 'D261', x: 330, y:235, width: 9, height: 15},
    {id: 'D262', x: 330, y:250, width: 9, height: 15},
    {id: 'D263', x: 330, y:265, width: 9, height: 15},
    {id: 'D264', x: 330, y:280, width: 9, height: 15},
    {id: 'D265', x: 330, y:295, width: 9, height: 15},
    {id: 'D266', x: 330, y:310, width: 9, height: 15},
    {id: 'D267', x: 330, y:325, width: 9, height: 15},
    {id: 'D268', x: 330, y:340, width: 9, height: 15},
    {id: 'D269', x: 330, y:355, width: 9, height: 15},
    {id: 'D280', x: 350, y:220, width: 9, height: 15},
    {id: 'D281', x: 350, y:235, width: 9, height: 15},
    {id: 'D282', x: 350, y:250, width: 9, height: 15},
    {id: 'D283', x: 350, y:265, width: 9, height: 15},
    {id: 'D284', x: 350, y:280, width: 9, height: 15},
    {id: 'D285', x: 350, y:295, width: 9, height: 15},
    {id: 'D286', x: 350, y:310, width: 9, height: 15},
    {id: 'D287', x: 350, y:325, width: 9, height: 15},
    {id: 'D288', x: 350, y:340, width: 9, height: 15},
    {id: 'D289', x: 350, y:355, width: 9, height: 15},
  ]
}

export function getAllArtist () {
  return [
    {
      id: 1,
      date: '両日',
      deskId: ['D-77', 'D-78'],
      name: 'mhd',
      tag: ['ファッション', 'アクセサリー'],
      information: {
        'アーティスト情報': 'mhdはデザイン業を営む MASAKAZU HORI DESIGN が運営。代表の堀は、2004年大阪芸術大学卒業後に総合ペット用品メーカーに勤務後に独立しフリーデザイナーとして欧州の各製造業の現場にも趣き製造業の現場やクラフトマンシップに触れながら創作活動も行い、ミラノサローネなどの出展も経験、帰国後にmhdを地元の大阪・堺でスタート。「日本列島デザインネックレス」が評判を得るなど大手小売店との取引も開始。その後、革問屋の多い関西の土地柄もあり革小物を中心とした展開も広げ「本革の端切れからできたリボンブローチRe:born」などアップサイクル商品シリーズは全国の小売店で販売。',
        '作品について': 'mhdは、プロダクトデザイナー堀真寿のオリジナルデザイン雑貨ブランドです。「デザイン＝おもいやり」をテーマに発想されたプロダクトには、まるで命が吹き込まれているかのような存在感と優しさを感じることができます。プロダクトデザイナーならではの発想で創作された、シンプルながらも心地よく、長く使って飽きがこない、 愛着が生まれ大切に使い続けたくなるような素材やデザイン、そして、日本を感じられる商品開発を心がけています。「国産本革に拘ったレザーアイテム」「日本文化のすばらしさを再確認できるアクセサリーアイテム」等を展開しています。',
      },
      imageUrl: 'https://designfesta.com/exhibitors/introduction/jp/img_honban/530225_1_014922.jpg',
      homepage: 'http://www.mhd-japan.com/',
      sns: {
        twitter: 'https://twitter.com/mhdjapan',
        facebook: 'https://www.instagram.com/mhd_japan/'
      },
    },
    {
      id: 2,
      date: '両日',
      deskId: ['D-265'],
      name: 'ゴシックホリック',
      tag: ['ファッション', 'アクセサリー'],
      information: {
        'アーティスト情報': 'ゴシックホリック',
        '作品について': '髪や帽子につけるキラキラの蝶々クリップや耳やしっぽのモフモフなケモノアイテムをたくさん連れて参加します。いつものファッションにちょっとアクセントを。',
      },
      imageUrl: 'https://designfesta.com/exhibitors/introduction/jp/img_honban/530378_1_022214.jpg',
      homepage: 'https://gothicholic.com',
    },
    {
      id: 3,
      date: '土曜日',
      deskId: ['D-280'],
      name: 'くろねこ宝石店',
      tag: ['アクセサリー', '雑貨'],
      information: {
        'アーティスト情報': 'デザフェスには2回目の出展です。\nくろねこ宝石店の立花千里と、友人の立花万里のお店「Golden calcite」と共同出展しています。',
        '作品について': 'くろねこ宝石店はレジンを使用した作品がメインです。"いつでも一緒にお出かけ"をコンセプトに、猫や鳥など動物モチーフを中心にバッグチャームやヘアアクセサリーなどを作っています。\nGolden calciteはフクロウをモチーフとした作品を制作しています。本物のフクロウの羽根を使用したアクセサリーやチャームはオススメです。\nまた羽根を使用した「猫のおもちゃ」はネコちゃん、飼い主さん共に好評ですよ！\nぜひ遊びに来て下さい。',
      },
      imageUrl: 'https://designfesta.com/exhibitors/introduction/jp/img_honban/531442_1_010006.jpg',
    },
    {
      id: 4,
      date: '両日',
      deskId: ['D-282'],
      name: 'ちゃ',
      tag: ['アクセサリー'],
      information: {
        'アーティスト情報': '折り紙ジュエリーの「ちゃ」と言います。\n折り紙でジュエリーを製作して\n普段は東京を中心にイベントに出展しています。\n\n2019年には台湾でも出展しました。\n2020年夏には手乗りの九尾の狐さんがTwitterでバズり「ねとらぼ」「Yahoo!ニュース」などで紹介されました。\n\nhttps://www.instagram.com/s_charmy2/',
        '作品について': '折り紙でつくった作品（伝統的な鶴、手裏剣、奴さんなどの他に蝶や花など）をもとにアクセサリー（ピアス、イヤリング、ブローチ、指輪、ピンズなど）を作っています。紙の部分はコーティングしているので強度もあり水に触れても平気です。\nまた、紙の素材は国産、海外産に問わずいろいろなものを使っています。紙の柄は、和柄、オリジナルにデザインしたPOPなもの、手書きで作ったものなどいろいろあります。',
      },
      imageUrl: 'https://designfesta.com/exhibitors/introduction/jp/img_honban/530856_1_024737.jpg',
      homepage: 'https://ameblo.jp/chachacha02/',
      sns: {
        twitter: 'https://twitter.com/charmy',
      },
    },
    {
      id: 5,
      date: '土曜日',
      deskId: ['D-74'],
      name: 'HERHUM',
      tag: ['ファッション'],
      information: {},
      imageUrl: 'https://designfesta.com/exhibitors/introduction/jp/img_honban/530084_1_025910.jpg',
    },
    {
      id: 6,
      date: '両日',
      deskId: ['D-73'],
      name: 'Konduct',
      tag: ['アクセサリー'],
      information: {},
      imageUrl: 'https://designfesta.com/exhibitors/introduction/jp/img_honban/530208_1_123149.jpg',
    },

  ]
}

export function getArtist(id: number) {
  const allArtist = getAllArtist()
  const target = allArtist.filter(a => a.id === id)
  return target[0]
}
