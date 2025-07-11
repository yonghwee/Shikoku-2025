const MapMeta ={
  lat: 33,
  lng: 130,
  zoom: 6
};

const TripStartDate = new Date('November 19, 2025');

const Trip = [
  { day: 1, en: 'Kansai International Airport' },
  { day: 1, en: 'Fairfield by Marriott Hyogo Awaji Fukura', hide: true},
  { day: 2, en: 'Ryozen Temple (#1)', jp: '第一番札所 霊山寺' },
  { day: 2, en: 'Udon @ Maruike-Seimenjo', jp: '丸池製麺所' },
  { day: 2, en: 'Awa Sand Pillars', jp: '阿波の土柱' },
  { day: 2, en: 'Udatsu Townscape', jp: 'うだつの町並み' },
  { day: 2, en: 'Business Hotel Matsuka', hide: true},
  { day: 3, en: 'Mount Tsurugi', jp: '剣山', addr: 'Mt,Tsurugi Chair Lift 剣山 見ノ越第一駐車場' },
  { day: 3, en: 'Oku-Iya Double Vine Bridge', jp: '奥祖谷二重かずら橋' },
  { day: 3, en: 'Nagoro "Scarecrow" Village', jp: '天空の村 かかしの里' },
  { day: 3, en: 'Toyoko Inn Tokushima-eki Bizan-guchi', hide: true},
  { day: 4, en: 'Kaisendon @ Nakasusogosuisan Market', jp: '中洲総合水産市場' },
  { day: 4, en: 'Ōkawara Plateau', jp: '大川原高原' },
  { day: 4, en: 'Hyakuken Falls', jp: '百間滝', addr: 'Hyakukendaki Parking Lot 百間滝駐車場' },
  { day: 4, en: 'Yamainudake Viewpoint', jp: '山犬嶽展望岩' },
  { day: 4, en: 'Otodoro Waterfall', jp: '大轟の滝' },
  { day: 4, en: 'Hotel Route Inn Anan', hide: true },
  { day: 5, en: 'Ōmatsu Daigongen', jp: 'お松大権現' },
  { day: 5, en: 'Tairyū-ji Temple (#21)', jp: '太龍寺', addr: '太龍寺纜車停車場' },
  { day: 5, en: 'Kaisendon @ Drive Inn Kaizokubune', jp: 'ドライブイン 海賊舟' },
  { day: 5, en: 'Yakuō-ji Temple (#23)', jp: '薬王寺' },
  { day: 5, en: 'Hotel Route Inn Anan', hide: true },
  { day: 6, en: 'Cape Gamoda', jp: '蒲生田岬' },
  { day: 6, en: 'Minami Awa Sunline Road', jp: '南阿波サンライン' },
  { day: 6, en: 'Kaisendon @ Ajimasa', jp: '味政', addr: '味政 Ota-30-1 Asakawa, Kaiyō, Kaifu District, Tokushima 775-0101, Japan' },
  { day: 6, en: 'Todoroki Kujūku Falls', jp: '轟九十九滝' },
  { day: 6, en: 'Fureai No Yado Yu Yu NASA', hide: true },
  { day: 7, jp: '鹿岡の夫婦岩' },
  { day: 7, en: 'Cape Muroto', jp: '室戸岬' },
  { day: 7, en: 'Muroto Skyline', jp: '室戸スカイライン' },
  { day: 7, en: 'Hotsumisaki-ji Temple (#24)', jp: '最御崎寺', waypoint: false },
  { day: 7, en: 'Muroto Skyline Observation Deck', jp: '室戸スカイライン山頂展望台', waypoint: false },
  { day: 7, en: 'Hotsumisaki-ji Temple (#24)', jp: '最御崎寺', addr: 'Hotsumisaki-ji Temple 最御崎寺' },
  { day: 7, en: 'Muroto Skyline Observation Deck', jp: '室戸スカイライン山頂展望台' },
  { day: 7, en: 'Kaisendon @ Ryotei Kagetsu', jp: '料亭 花月' },
  { day: 7, en: 'Kitagawa village "Monet\'s Garden"', jp: 'Marmottan 北川村「モネの庭」マルモッタン' },
  { day: 7, en: 'JR Clement Inn Kochi', hide: true },
  { day: 8, en: 'Ryugado Cave', jp: '龍河洞' },
  { day: 8, en: 'Kaisendon @ Hirome Market', jp: 'ひろめ市場' },
  { day: 8, en: 'Kochi Castle', jp: '高知城' },
  { day: 8, en: 'Godaisan', jp: '五台山' },
  { day: 8, en: 'The Kochi Prefectural Makino Botanical Garden', jp: '高知県立牧野植物園', waypoint: false },
  { day: 8, en: 'Godaisan Park', jp: '五台山公園', waypoint: false },
  { day: 8, en: 'Chikurin-ji Temple (#31)', jp: '竹林寺', waypoint: false },
  { day: 8, en: 'JR Clement Inn Kochi', hide: true },
  { day: 9, en: 'UFO Line', jp: 'UFOライン', addr: 'UFO Line (aka Bottle Forest Line) UFOライン' },
  { day: 9, en: 'Shikoku Karst', jp: '四国カルスト' },
  { day: 9, en: 'Tengu Highlands', jp: '天狗高原' },
  { day: 9, en: 'Godan Highland', jp: '五段高原' },
  { day: 9, en: 'Stargazing & Kaiseiki dinner', jp: '星を楽しむ', addr: 'Hoshifuru Village TENGU' },
  { day: 10, en: 'Nakatsu Gorge', jp: '中津渓谷県立自然公園', addr: '中津渓谷県立自然公園' },
  { day: 10, en: 'Yasui Gorge', jp: '安居渓谷' },
  { day: 10, en: 'JR Clement Inn Kochi', hide: true },
  { day: 11, en: 'Befu Gorge', jp: 'べふ峡' },
  { day: 11, en: 'Konose Gorge', jp: '高の瀬峡' },
  { day: 11, en: 'JR Clement Inn Kochi', hide: true },
  { day: 12, en: 'Kochi Sunday Market', jp: '日曜市' },
  { day: 12, en: 'Sedogawa Gorge', jp: '瀬戸川渓谷' },
  { day: 12, en: 'Nikobuchi', jp: 'にこ淵' },
  { day: 12, en: 'Nagoya Submersible Bridge', jp: '名越屋沈下橋' },
  { day: 12, en: 'JR Clement Inn Kochi', hide: true },
  { day: 13, en: 'Kaisendon @ Kure Taishomachi Market', jp: '久礼大正町市場' },
  { day: 13, en: 'Yasunami Waterwheels', jp: '安並水車の里' },
  { day: 13, en: 'Imanari (Sada) Submersible Bridge', jp: '今成橋' },
  { day: 13, en: 'New Royal Hotel Shimanto', hide: true },
  { day: 14, en: 'Ashizuri-Uwakai National Park', jp: '足摺宇和海国立公園' },
  { day: 14, en: 'Cape Ashizuri', jp: '足摺岬', waypoint: false },
  { day: 14, en: 'Cape Ashizuri Lighthouse', jp: '足摺岬灯台', waypoint: false },
  { day: 14, en: 'Tengunohana', jp: '天狗の鼻', waypoint: false },
  { day: 14, en: 'Hakusan Natural Arch', jp: '白山洞門', addr: 'Hakusan Natural Arch, Ashizuri-Uwakai National Park', waypoint: false },
  { day: 14, en: 'Kongōfuku-ji Temple (#38)', jp: '金剛福寺' },
  { day: 14, en: 'Ashizuri Skyline', jp: '足摺スカイライン' },
  { day: 14, en: 'Kaisendon @ Eating Facility Ashizuri', jp: '御食事処あしずり' },
  { day: 14, en: 'Minokoshi Coast', jp: '見残し海岸' },
  { day: 14, en: 'Odo Observatory', jp: '大堂山展望台' },
  { day: 14, en: 'Kannon Rock Observatory', jp: '観音岩展望台', addr: 'Kannon Rock Observatory 観音岩展望台, Kashiwajima' },
  { day: 14, en: 'Hotel Matsuya, Sukumo', hide: true },
  { day: 15, en: 'Sotodomari Ishigaki-no-sato', jp: '外泊・石垣の里' },
  { day: 15, en: 'Kaisendon @ 愛南市場食堂' },
  { day: 15, en: 'Tensha-en Garden', jp: '名勝 天赦園' },
  { day: 15, en: 'Uwajima Castle', jp: '宇和島城' },
  { day: 15, en: 'Municipal Bull sumo bullring of Uwajima', jp: '宇和島市営闘牛場' },
  { day: 15, en: 'Taga Shrine', jp: '多賀神社' },
  { day: 15, en: 'Ota Hotel', addr: 'Ota Hotel, Ozu', hide: true },
  { day: 16, en: 'Kaisendon @ Doya Shokudo', jp: 'どーや食堂', addr: 'Doya Shokudo どーや食堂 1581-23 Okishinden, Yawatahama, Ehime 796-0087, Japan' },
  { day: 16, en: 'Uchiko Yokaichi Gokoku Preservation District for Groups of Traditional Buildings', jp: '内子町八日市護国伝統的建造物群保存地区' },
  { day: 16, en: 'Kamihaga Residence', jp: '木蝋資料館 上芳我邸', addr: 'Kamihaga Residence, 2696 Uchiko, Kita District, Ehime 791-3301, Japan' },
  { day: 16, en: 'Akinai to Kurashi no Hakubutsukan', jp: '商いと暮らし博物館', addr: 'Akinai to Kurashi no Hakubutsukan, 1938 Uchiko, Kita District, Ehime 791-3301, Japan' },
  { day: 16, en: 'Ozu Castle', jp: '大洲城' },
  { day: 16, en: 'Garyu Sanso', jp: '臥龍山荘' },
  { day: 16, en: 'Ota Hotel', addr: 'Ota Hotel, Ozu', hide: true },
  { day: 17, en: 'Sadamisaki Lighthouse', jp: '佐田岬灯台' },
  { day: 17, en: 'Mikago Island Observation Deck', jp: '御籠島展望所' },
  { day: 17, en: 'Mt. Tsubaki Observation Deck', jp: '椿山展望台' },
  { day: 17, en: 'Kaisendon @ Whitebait Restaurant Hanahana', jp: 'しらす食堂はなはな' },
  { day: 17, en: 'Seto Wind Hill Park Observation Deck', jp: 'せと風の丘パーク展望デッキ' },
  { day: 17, en: 'The Shimonada Station Yard', jp: '下灘駅構内' },
  { day: 17, en: 'Toyoko Inn Matsuyama Ichibancho', hide: true },
  { day: 18, en: 'Yuzuki Castle Ruins', jp: '湯築城跡', waypoint: false },
  { day: 18, en: 'Botchan Karakuri Clock', jp: '坊っちゃんカラクリ時計', waypoint: false },
  { day: 18, en: 'Dogo Haikara Dori Street (Dogo Shopping Street)', jp: '道後ハイカラ通り (道後商店街)', addr: 'Dogoyunomachi, Matsuyama, Ehime 790-0842, Japan', waypoint: false },
  { day: 18, en: 'Dogo Onsen', jp: '道後温泉', addr: 'Dogo Onsen Main Building 道後温泉本館 5-6 Dogoyunomachi, Matsuyama, Ehime 790-0842, Japan', waypoint: false },
  { day: 18, jp: '道後温泉遊技場 ウラ道後', waypoint: false },
  { day: 18, en: 'Ishite-ji Temple (#51)', jp: '石手寺', waypoint: false },
  { day: 18, en: 'Matsuyama Castle', jp: '松山城', waypoint: false },
  { day: 19, en: 'Daihō-ji Temple (#44)', jp: '大寶寺' },
  { day: 19, en: 'Yusuhara Community Library', jp: '雲の上の図書館' },
  { day: 19, en: 'Yusuhara Wooden Bridge Museum', jp: '隈研吾の小さなミュージアム' },
  { day: 19, en: 'Kumo no Ueno Hotel Annex', jp: '雲の上のホテル 別館・マルシェユスハラ' },
  { day: 19, en: 'Yusuhara Town Office', jp: '梼原町役場' },
  { day: 19, en: 'Iwaya-ji Temple (#45)', jp: '岩屋寺', addr: 'Iwaya-ji Temple, 1468 Nanatori, Kumakogen, Kamiukena District, Ehime 791-1511, Japan' },
  { day: 19, en: 'Toyoko Inn Matsuyama Ichibancho', hide: true },
  { day: 20, en: 'Osumi Point', jp: '大角鼻', addr: '大角鼻, 893-1 Namikatacho Namikata, Imabari, Ehime 799-2101, Japan' },
  { day: 20, en: 'Hakata Island Viewpoint', jp: '伯方島 開山展望デッキ', addr: '伯方島 開山展望デッキ, Hakatacho Ikata, Imabari, Ehime 794-2303, Japan' },
  { day: 20, en: 'Kaisendon @ 能島水軍', jp: '能島水軍', addr: '能島水軍, Ehime 794-2203, Japan' },
  { day: 20, en: 'Kirosan Observatory Park', jp: '亀老山展望公園' },
  { day: 20, en: 'Imabari Castle', jp: '今治城' },
  { day: 20, en: 'Towel Museum', jp: 'タオル美術館' },
  { day: 20, en: 'Nishiyama Koryuji', jp: '興隆寺' },
  { day: 20, en: 'Toyoko Inn Niihama Ekimae', hide: true },
  { day: 21, en: 'Besshi Rhine', jp: '別子ライン', addr: '別子ライン, Daieiyama, Niihama, Ehime 792-0846, Japan' },
  { day: 21, en: 'Machu Picchu of the East "Tounaru"', jp: '旧別子銅山東平地区', addr: '旧別子銅山東平地区, 654 Tatsukawacho, Niihama, Ehime 792-0846, Japan' },
  { day: 21, en: 'Kaisendon @ Marutomo Seafood Market', jp: 'マルトモ水産', addr: 'Marutomo Seafood Market, 456-5 Hinokuchi, Saijo, Ehime 793-0043, Japan' },
  { day: 21, en: 'Unpenji Temple (#66)', jp: '雲辺寺', addr: 'Unpenji Temple, Norochi-763 Ikedacho Hakuchi, Miyoshi, Tokushima 778-5251, Japan' },
  { day: 21, en: 'Hotel Route Inn Shikoku Chuo', hide: true },
  { day: 22, en: 'Oboke Gorge Manaka Observatory', jp: '大歩危峡真中展望所' },
  { day: 22, en: 'Oboke Gorge Sightseeing Boat', jp: '大歩危峡観光遊覧船', addr: 'Oboke Gorge Sightseeing Boat, 1520 Yamashirocho Nishiu, Miyoshi, Tokushima 779-5451, Japan' },
  { day: 22, en: 'Sea of Clouds Observation Deck in Kamiahashi Community', jp: '吾橋 雲海展望台' },
  { day: 22, en: 'Hinoji Valley - Iya River Bend Observation Point', jp: 'ひの字渓谷展望所' },
  { day: 22, en: 'Statue of a Peeing Boy', jp: '祖谷渓の小便小僧' },
  { day: 22, en: 'Yokai (Hobgoblin) Village', jp: '妖怪街道', addr: 'Yokai (Hobgoblin) Village - East End, Yamashirocho Nishiu, Miyoshi, Tokushima 779-5451, Japan' },
  { day: 22, en: '獅子岩', addr: '獅子岩, Yamashirocho Nishiu, Miyoshi, Tokushima 779-5451, Japan' },
  { day: 22, en: 'Koboke Observation Deck', jp: '小歩危展望台' },
  { day: 22, en: 'Hotel Route Inn Shikoku Chuo', hide: true },
  { day: 23, en: 'Vine Bridge in the Iya Valley', jp: '祖谷のかずら橋' },
  { day: 23, en: 'Biwa Waterfall', jp: '琵琶の滝' },
  { day: 23, en: 'Ryugu Cliffs Park', jp: '龍宮崖公園' },
  { day: 23, en: 'Suspension bridge of Higashiiya', jp: '東祖谷の吊橋' },
  { day: 23, en: 'Ochiai Village', jp: '落合集落' },
  { day: 23, en: 'National Heritage Area Ochiai Village Observatory', jp: '落合集落展望所' },
  { day: 23, en: 'Minami-Shinmachi Shopping Street', jp: '高松南新町商店街', waypoint: false },
  { day: 23, en: 'Toyoko Inn Takamatsu Hyogomachi', hide: true },
  { day: 24, en: 'Takamatsu Port', jp: '高松港', hide: true },
  { day: 24, en: 'Kokusai Ryobi Ferry Shodoshima Ikeda Port', jp: '国際両備フェリー 池田港', hide: true },
  { day: 24, en: 'Kankakei National Park', jp: '寒霞渓' },
  { day: 24, en: 'Lunch @ Shimakatsu', jp: '日本料理 島活', addr: 'Shimakatsu, 267 Ko, Tonosho, Shozu District, Kagawa 761-4101, Japan' },
  { day: 24, en: 'Angel Road', jp: 'エンジェルロード', addr: 'Angel Road, 24-92 Ko, Tonosho, Shozu District, Kagawa 761-4101, Japan' },
  { day: 24, en: 'Olive Beef Yakiniku @ オリーブ牛焼肉 妃牛', addr: 'オリーブ牛焼肉 妃牛' },
  { day: 24, en: 'Kokuminshukusha Shodoshima', hide: true },
  { day: 25, en: 'Maze Town: 西光寺横の小路', addr: '西光寺横の小路, 170-2 Ko, Tonosho, Shozu District, Kagawa 761-4101, Japan' },
  { day: 25, en: 'Maze Town: 迷路のまち', addr: '迷路のまち, Ko, Tonosho, Shozu District, Kagawa 761-4100, Japan' },
  { day: 25, en: 'Dofuchi Strait 土渕海峡', addr: '土渕海峡, 559-2 Ko, Tonosho, Shozu District, Kagawa 761-4105, Japan' },
  { day: 25, en: 'Daikannon Bushiji Temple', jp: '小豆島大観音', addr: 'Daihonzan Shodoshima Daikannon Bushi Temple, Japan, 〒761-4153 Kagawa, Shozu District, Tonosho, Koumagoe, Otsu−１' },
  { day: 25, en: 'Sanuki Hyakkei 100 Sights of Fukuda Coast', jp: '福田海岸', addr: '吉田東展望台, Yoshida, Shodoshima, Shozu District, Kagawa 761-4401, Japan' },
  { day: 25, en: 'Kaisendon @ Umemoto', jp: '食事処うめもと', addr: 'Umemoto, 甲82 Tachibana, Shodoshima, Shozu District, Kagawa 761-4405, Japan' },
  { day: 25, en: 'Marukin Soy Sauce Museum', jp: 'マルキン醤油記念館' },
  { day: 25, en: 'Twenty-Four Eyes Movie Studio', jp: '二十四の瞳映画村', addr: 'Twenty-Four Eyes Movie Studio, 甲９３１ Tanoura, Shodoshima, Shozu District, Kagawa 761-4424, Japan' },
  { day: 25, en: 'Shodoshima Olive Park', jp: '道の駅小豆島オリーブ公園' },
  { day: 25, en: 'Kokusai Ryobi Ferry Shodoshima Ikeda Port', jp: '国際両備フェリー 池田港', hide: true },
  { day: 25, en: 'Takamatsu Port', jp: '高松港', hide: true },
  { day: 25, en: 'Toyoko Inn Takamatsu Hyogomachi', hide: true },
  { day: 26, en: 'Udon @ Suzaki Shokuryohinten (JP #2)', jp: '須崎食料品店', addr: 'Suzaki Shokuryohinten, 3778 Takasecho Kamiasa, Mitoyo, Kagawa 767-0014, Japan' },
  { day: 26, en: 'Kannonji Temple (#69)', jp: '観音寺', addr: 'Kannonji Temple, 1 Chome-2-7 Yahatacho, Kanonji, Kagawa 768-0061, Japan' },
  { day: 26, en: 'Takaya Shrine', jp: '高屋神社 本宮', addr: 'Takaya Shrine, 2800 Takayacho, Kanonji, Kagawa 768-0002, Japan' },
  { day: 26, en: 'Chichibugahama Beach', jp: '父母ヶ浜', addr: 'Chichibugahama Beach, Otsu-203-3 Niocho Nio, Mitoyo, Kagawa 769-1404, Japan' },
  { day: 26, en: 'Mt. Shiude Overlook', jp: '紫雲出山 山頂展望台', addr: 'Mt. Shiude Primary Parking Overlook, Takumacho Ohama, Mitoyo, Kagawa 769-1104, Japan' },
  { day: 26, en: 'Cape Osaki', jp: '大崎の鼻', addr: 'Cape Osaki, Kisawa Ogoshicho, Sakaide, Kagawa 762-0014, Japan' },
  { day: 26, en: 'Toyoko Inn Takamatsu Hyogomachi', hide: true },
  { day: 27, en: 'Takamatsu Castle Park', jp: '史跡高松城跡玉藻公園' },
  { day: 27, en: 'Ritsurin Garden', jp: '栗林公園', addr: 'Ritsurin Garden, 1-chome-20-16 Ritsurincho, Takamatsu, Kagawa 760-0073, Japan' },
  { day: 27, en: 'Udon @ Hinode Seimenjyo (JP #6)', jp: '日の出製麺所', addr: 'Hinode Seimenjyo, 1 Chome-8-5 Fujimicho, Sakaide, Kagawa 762-0046, Japan' },
  { day: 27, en: 'Yashima-ji Temple (#84)', jp: '屋島寺', addr: 'Yashima-ji Temple1808 Yashima Higashimachi, Takamatsu, Kagawa 761-0111, Japan' },
  { day: 27, en: 'Shikoku Village', jp: '四国村ミウゼアム', addr: 'Shikoku Village, Japan, 〒761-0112 Kagawa, Takamatsu, Yashima Nakamachi, ９１番地' },
  { day: 27, en: 'Toyoko Inn Takamatsu Hyogomachi', hide: true },
  { day: 28, en: 'Udon @ Gamō Udon (JP #3)', jp: '讃岐うどん', addr: 'Gamō Udon, 420-1 Kamocho, Sakaide, Kagawa 762-0023, Japan' },
  { day: 28, en: 'Kotohiragu', jp: '金刀比羅宮', addr: 'Kotohiragu, 892-1, Kotohira, Nakatado District, Kagawa 766-8501, Japan' },
  { day: 28, en: 'Konpira Omotesando', jp: 'こんぴら表参道', waypoint: false },
  { day: 28, en: 'Izutama Shrine', jp: '嚴魂神社', addr: 'Izutama Shrine, 892-1, Kotohira, Nakatado District, Kagawa 766-8501, Japan', waypoint: false },
  { day: 28, en: 'Zentsū-ji Temple', jp: '善通寺', addr: 'Zentsū-ji Temple, 3 Chome-3-1 Zentsujicho, Zentsuji, Kagawa 765-0003, Japan' },
  { day: 28, en: 'Marugame Castle', jp: '丸亀城', addr: 'Marugame Castle, Ichibancho, Marugame, Kagawa 763-0025, Japan' },
  { day: 28, en: 'Toyoko Inn Takamatsu Hyogomachi', hide: true },
  { day: 29, en: 'Nagasaki no Hana (The Nose of Nagasaki)', jp: '長崎ノ鼻', addr: 'Nagasaki no Hana, Yashima Nishimachi, Takamatsu, Kagawa 761-0113, Japan' },
  { day: 29, en: 'Takeikannon Cape', jp: '竹居観音岬', addr: 'Takeikannon Cape, Ajicho, 761-0130, Japan' },
  { day: 29, en: 'Yakuri-ji Temple (#85)', jp: '八栗寺', addr: 'Yakuri-ji Temple, 3416 Murecho Mure, Takamatsu, Kagawa 761-0121, Japan' },
  { day: 29, en: 'Kaisendon @ Jakoya', jp: '海鮮食堂 じゃこや', addr: 'Jakoya, Japan, 〒761-0123 Kagawa, Takamatsu, Murechohara, 631-5 道の駅源平の里むれ 内' },
  { day: 29, en: 'Ōkubo-ji Temple (#88)', jp: '大窪寺', addr: 'Ōkubo-ji Temple, 96 Tawakanewari, Sanuki, Kagawa 769-2306, Japan' },
  { day: 29, en: 'Toyoko Inn Tokushima-eki Bizan-guchi', hide: true },
  { day: 30, en: 'Bizan Park', jp: '眉山公園', addr: 'Bizan Park, Bizancho, Tokushima, 770-0908, Japan' },
  { day: 30, en: 'Tokushima Castle Ruins', jp: '徳島城跡' },
  { day: 30, en: 'Kaisendon @ Bimbi-ya', jp: '活魚料理 びんび家', addr: 'Bimbi-ya, Hashikadani-20-2 Kitanadacho Awata, Naruto, Tokushima 771-0372, Japan' },
  { day: 30, en: 'Izanagi Shrine', jp: '淡路國一宮 伊弉諾神宮', addr: 'Izanagi Shrine, 740 Taga, Awaji, Hyogo 656-1521, Japan' },
  { day: 30, en: 'The Gossa Kaito Iseki Ruins', jp: '五斗長垣内遺跡', addr: 'The Gossa Kaito Iseki Ruins, 1395-3 Kurodani, Awaji, Hyogo 656-1601, Japan' },
  { day: 30, en: 'Honpukuji Water Temple', jp: '本福寺 水御堂', addr: 'Honpukuji Water Temple, 1310 Ura, Awaji, Hyogo 656-2305, Japan' },
  { day: 30, en: 'Fairfield by Marriott Hyogo Awaji Higashiura', hide: true },
  { day: 31, en: 'Kaisendon @ Kotaya', jp: 'こたや', addr: 'Kotaya, 3 Niihamacho, Izumisano, Osaka 598-0064, Japan' },
  { day: 31, en: 'Kansai International Airport', hide: true },
  { day: 31, en: 'Odysis Suites Osaka Airport Hotel', jp: 'オディシススイーツ大阪エアポートホテル', hide: true },
];

// { day: , en: '', jp: '' },