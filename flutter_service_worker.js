'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "firebase-debug.log": "00ff5b60e463f2cf439de805b1d2914c",
"version.json": "ae56372b22a2b4c0bf915692893749b6",
"index.html": "a26a25e889bc5bd75405a63bf7a4d75f",
"/": "a26a25e889bc5bd75405a63bf7a4d75f",
"CNAME": "be1efa8c544a5bfbbcde1085904b25b0",
"loader.css": "3ed0540af717cd56f01a37a08f714759",
"main.dart.js": "8c851cda9ec9a67129e1a9d72a362f0e",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"README.md": "a7f801b4c2190dfe4ec4b0a55e45cb1e",
"favicon.png": "6c3a2a8bab9155811014ca68143566a7",
"_config.yml": "932865e374757d33e321eeb2d5e88b6b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/firebase-hosting-pull-request.yml": "8ca73b72569a7db027074be9e1e8ee47",
".github/workflows/firebase-hosting-merge.yml": "abf736dc96927e1ebe23c82ec3ec826d",
"manifest.json": "f72b1fb8e2ea7901f25ad4e33e0f71f2",
".git/ORIG_HEAD": "63d1e64c33ce8eeb159aad41af8e3ec0",
".git/config": "642d2d80a77e462707f6dcf4dc64d2eb",
".git/objects/0d/deab209e48c3235833fd132c537cb4a824e089": "4b290356ea7fbb3fa5aad21500479365",
".git/objects/59/0fe43e4c729707ecac6959b8440dc050dd32cc": "df7080cb52d97db8734047ff809422ef",
".git/objects/50/ef380e89c18faa5f9ea87aacdb9ddc11c9bc21": "fcc972dd16c440f6afa7464bf0d4a682",
".git/objects/6f/7a88ba9784ee7c2b437d5db50ac8165fb56c9a": "3c19c081c0bdec201aea18042ee3a6ce",
".git/objects/9e/99123ea2555962c4e9b43f430d06a4b21a7353": "ec7ba2bb08a6c5da42e52f516afae4b3",
".git/objects/9e/c4521c17ed5cfc60e68feaad38e149f0d913ad": "16ae7231773dca116aae6d8ed4b6f116",
".git/objects/32/f2b0963922a7aac8de6ab67c68abb156197957": "eaed151c074a52d29fe3919c9fe311e5",
".git/objects/35/7caaba7e8f81f603563d3459f4393816af609c": "55cf4497a99befeb2409febe28dcd32b",
".git/objects/3c/7335f93a331252ff74ed3db59458c9bb4f3f0a": "994cfb31dded5af7eb0dbf249a69bc38",
".git/objects/56/61236fe4369475d94600f165235dfaf1239e17": "da8549ad85b0b639ca8401fb0a01fbfc",
".git/objects/67/e9f0cf810cd488dec3ae903d0b292b0c1f9c61": "66eca2992d1c436ff0772cb970b47470",
".git/objects/67/479ff9b856d43c14f75b921782cac3dfae46f5": "3ecb3d1a4cbc733ef6ef98a07c0f37a4",
".git/objects/0b/cc49409e4560fe647ecc4b94204eeb7c68e8a7": "dd7722d35daa8164c5b9471b1431fa36",
".git/objects/94/c1308a5b5d51b4cbe2ba45d5e327212f0ed5ac": "57500e3d6e64e9bc3e66d53d81909291",
".git/objects/94/4605ab00a53341dc7d38d3c63ddfad418c0058": "5e849b80bf5c26744aa76fdf6055f1c6",
".git/objects/5f/46c229cd6f43098bcedaed8fd8288899c116a9": "44fcfebe68827a25a30f18e13f1b011a",
".git/objects/05/9ceb47022a2782b0dc1d0618c863246500fe5f": "a923540b3b6ace2482bb10340437d5e3",
".git/objects/9d/840cfc5fededb15fca56424e8a76b4283f484d": "424cfbd946829623ab240a31ff77caa2",
".git/objects/02/132743584d85fbd4874757aa95fa8dcce2196f": "a3a48d54d1a6fb783744476509807fcf",
".git/objects/a3/6a05d50e5d534c54915f87a4c53dc5b6b64b17": "37f4787840a3b237cc2dc7072af5784b",
".git/objects/ad/c6914889f48ca9fbcb4bf3aa9e23c1c7280b5b": "5a43f18f4d274f3b52c278c1477fa17d",
".git/objects/be/93021d70a115354f5f015d064c4663acca305e": "96a6dd7afa27429fb862f178afd00e0d",
".git/objects/a2/cefa522151c2b0b4e2efc848dd3620f7a42c07": "9d87ba395931ea1d2f26b83f265f8e08",
".git/objects/a5/e05ac9c9131f2a9e27fc58cb973987f7661c45": "0d03e4d97d6b77d7b8e2e43d2465a941",
".git/objects/d1/8da418844d4181bad4b1fb2ab7bde55356fa75": "ddd287aa99e9db9d0eaf03e1fa8c079d",
".git/objects/bc/520ec281854bd4518b2d5e8c9fcaa27631d92a": "5131574f5d656da99e594c3720f1ff4d",
".git/objects/bc/6075fe98ecee193c9790d4c50041157b971ce2": "7ae79019eb2f8c70af31fa65dab529ab",
".git/objects/e5/ab31cf394c70af7fd0f1198686647b836dedb2": "6f830f0e2f80989c0c2343f4c5ad7385",
".git/objects/eb/2a2fe796cb6f5106a5f29ce8bf141691ddabd5": "2f312a8d4133c4ec72b9e85e5e6cfb1a",
".git/objects/c7/6c775d05144347d355a57782d42a35e2123336": "57ed8f20bfdecf50a12a6e234840baf1",
".git/objects/c9/22f748e4329d4198130e18d02a920a8e2ac920": "78a6ec6e393b378406e5b40bcd9a39fd",
".git/objects/fc/7ff7415437411fa4e87e219705f337209510cf": "259e49bd3f27f2f8381719c61f7efa88",
".git/objects/c8/2813cab1ae2252ae4991b83299fed9ef818f99": "1344a663b8d2e40389e303336fbe8e96",
".git/objects/ec/2db64794cb7b6ccae102c9e3663ff04a7f6c8f": "264c919ec8be4f4a84f762028aba65c8",
".git/objects/20/a4637218027ef1246aff08e502ab7ded8b8bdc": "5b430c740a2347ab14010ae797cf3cba",
".git/objects/27/3f46815a1adb2cfc3eac2489390665e6858d2a": "cef05963dfd79cafbda3b2decb740b25",
".git/objects/pack/pack-d2c16ce853ae494e0f371f89bdad5ec13083b7af.pack": "42ac5a29d714612fc7b95762f806cdc3",
".git/objects/pack/pack-d2c16ce853ae494e0f371f89bdad5ec13083b7af.idx": "f9e647c725ebe13ef61627ff3f21cbd5",
".git/objects/29/46764eb055d9040755f5ce2185829f33fcb087": "3fff7832d8ea37dc4a4472aaa0cf05db",
".git/objects/7c/933d645ae04e414767449adee9060999fd9def": "9de33ba932792a0f2b119c49d3162915",
".git/objects/42/3ad5234f52fd15b9c92926bc1cdba8c93dd7ca": "24e617e9944691b71894eeb6940edb05",
".git/objects/45/2e449ddbfdd1fd51def4785d1e76b922ed7f29": "f05168995af835824faca9eae5ab3b3a",
".git/objects/80/2b0919042abd63843af318f7a84611d3c2c415": "ab849f21fb07ea70a77e6510c2f1c614",
".git/objects/74/13e3d4a08d7583a1b5846b8ac1168ea15c0321": "ef6b337cec0e0cb3cefbbc87249aa9cf",
".git/objects/28/a840f68cd9aaa43da6dc68e91a08fec7fdf43c": "d382e647936045bf47dfbd754e6dd01d",
".git/objects/17/963d4990ec401932591574c7dc429a54559161": "1f52143f48fc09802e0066cfad61545e",
".git/objects/17/f60f6ac0dc188c21e0627bcfccd26f65a9a006": "14986b856e320f7ab573f7e6c9cab661",
".git/objects/7b/6806d705bf26d6b97bda73fca253b818d1b980": "da26c3f749051da3119cfe841269aa4a",
".git/objects/10/6248f18140362cba487b6053e1aa12f55b1c11": "f1990d8e4343eecd3dd8a33ac68b196f",
".git/objects/4c/55740b762a562ab2dab8c84f84fa6954f537b7": "fcf762fc77f2cccdd3e89dc2c6d12fdd",
".git/objects/26/a6874c823a765dbcfe2c486602190ee5b09d88": "54ff9ab8330c43c1558554d7622c0471",
".git/objects/21/c4572ed6874d5d0e48878cea32b9f6344f5506": "cfb3050ea5647e4db248f8c3555848c9",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4d/49a8a1eb40c976a1d65977282d3685e444e2bd": "ec532229dc72092cd97f18cc1d8b0d12",
".git/objects/72/b5cd47a89fc1a3368fa0988ab5a795b645492e": "a27c74b8a33ae82994f37f6ae461efd5",
".git/objects/2a/9ce6d636a6997778edcd81fe1eb8e16e4eec26": "6f8e907db05fa6398a67d6bfc557b3ee",
".git/objects/2f/4134dec954d60eff46b04858ff5889c36f9fe8": "04e5e7e5dd0f52f7747ab0ea15d3f265",
".git/objects/43/6053b9da2c77fc503ccee0a072b2c427fd6486": "558638b24ed38727e560dd16ec47fc24",
".git/objects/9f/920c3a269db487e3977c4b7538da178921379f": "7f758a5d1af4e748245053361aaf6f69",
".git/objects/6b/f1f2cc7ceffa2fe61945eb76c1b07e8616ac78": "408d0a7712c73de7886e851ebf084871",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/07/9ba3e50d113f75505148f9c86676c23df174b5": "004b5ea06a5188d69268c341bc920ea2",
".git/objects/00/e0f77d826054c8046eea0930199052db9aa859": "9f0c2be3ee6e2270dc670d19ce57f78e",
".git/objects/31/bc98a9ff1e5bc34fbe9af797169260b600f405": "d33865e8ede9db9a80adf8a9b0ff3eb0",
".git/objects/3a/5d7f091635dc889713fc7174f4ade4bf0c55c2": "08cdc9f2c7259c53aaabe139b0bd5eae",
".git/objects/54/0b50674b13b10b933ab04ed26217e42a4c618c": "059da42f594bf6aba8f858c64a11a0ca",
".git/objects/53/6e96603f9ac6670e049db7754224eee3b38938": "7bf9830f17f3a181be5ab57253d752a5",
".git/objects/5e/99d7bf985b38d99acda86031eb4a95ef272cf7": "933d5fbb4381314b3d5e6b1e8499feeb",
".git/objects/5e/a883b9c8334f807083fdc4edf0185720b1110e": "b0b0f9b7e5fb0c26111c8698ba63acb0",
".git/objects/5b/26f0e1149f62d36701fe4cf6e7c4c991b150fc": "ae8e5570951bfeaddfdbc660bcd44598",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/99/cf25c8a9c72cae783d251d791f9665698805fb": "f3165d13d21e7f981b427cb252998c45",
".git/objects/52/87fbd65f50f0c0213c4882f8313a9f074c15e7": "b71071f24b3a3661211e34e24a801839",
".git/objects/52/999575e87d06b832fe0424ee457852cc406564": "64cc9d8616edf562dc7e053d6d3248d9",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/bf/475d49d04c413dfc195003157fc23e3b3aa5e3": "922ad4fdc935ceaf93d9517cc4b2a5f7",
".git/objects/d4/68a30a302cf02023af6aaefae75d1a8e1374f8": "9aa34746c1bb99de974bb10f584d7c84",
".git/objects/a7/fa3a9b55ee9dac9c6524738b41616cd290e28d": "7dee9b1a2ca32b035c7775f403d6f51a",
".git/objects/b8/25c6fd6100bee59881ab52c50a63abd017a32c": "d6cf469c136058c7c48e0e8547443945",
".git/objects/b1/8fde994cbbf0d80afe8293e65cb46df5a7f2e0": "40ec74c0ea9cd8084737f8b55b091174",
".git/objects/dc/ecfc2929aa7cdcf72a8dcdf3975aca8bcd24d9": "42dfa5c70f45c5284c91584b203e72ab",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/af/e1138a60fb68ea19382ce483ea59acfa553d86": "904de6fa11122571ccd0e3831adb5d2c",
".git/objects/b7/2867b37681284deba4158f6d439cbff829c34f": "5462e7f9e4f270f6bf882d6c396cdf3a",
".git/objects/db/c05129bb77c58f290a9c0d75969b622215ebb4": "4109a560a1eb2a24414049a9f9a81d7c",
".git/objects/a6/5554313c7697cbb39edf6a8a43398fbc5e0139": "bdffbfb23d40d8c9748f63ee22a79769",
".git/objects/ef/89f6b9c42908a33b54a545bac384064ad8b211": "cc23795c4a2a247e917c2f9d8f2fa0f0",
".git/objects/c4/e6f9df87fc20fac5e603071afa6a65e67db50a": "49652762dd1c32b2ec9f83d197008114",
".git/objects/cd/5c7da19ebdf09b2f91d1c3ec4f561d54e58aa1": "5dc05a7919c6085e78b5370c04dbd931",
".git/objects/cd/5665054c78ea12acc7188455da1ebb00be7643": "9b7d791695945fc34bf1e3b96f3fa330",
".git/objects/f9/7f335f00b6fbe93392c527850192c04eb9a0d3": "eb5db2cc37f94267926541558436db07",
".git/objects/f0/8e217f8a1803245c74cbf7c8185ed933bbce26": "c6041ffdedd3b4c14b9c48e728077ce8",
".git/objects/ff/5f11a549a11cb59dbcbaff72979d2dcaf65e45": "ae34aede2befa9c66941213f23b17863",
".git/objects/c2/f182346ed83cc9d709891efefeb583bbe14dd4": "d879c10e0f5b08e552716e342ef8927b",
".git/objects/f6/e324b79a07d6a192e15846d2246b4b0943d7ca": "1f7e42eacb4da7668f2d4deea64ed273",
".git/objects/f6/d09d19784e658e824e00bab0c1224d65af3d46": "92c42e0f9b5dc9930480a657f19601ab",
".git/objects/cb/1ebae0ed2e8afc136ab448ed2f4459f04c5985": "252f7e1af24de4c100edbc3a8b8a7a80",
".git/objects/f8/e50915db1c34f1485b1865d5076753a23a9940": "85d105a19d41788b278067445ca24497",
".git/objects/79/42047e3a32d6027dde9b0faca7a7157c232375": "af88adf75260f7437d1b663f248e0e01",
".git/objects/77/8144c7f8261a2495656a3c9857c5481856cc4d": "2edefbe93cf23abf4858ea8a0dadce93",
".git/objects/84/f61bd7fb2840302a8f9d073128aa78f57f6f8d": "4b9591f694fe2206193af27e52391a1c",
".git/objects/84/515c3904d043dc7dbbc2b1fb277e37c559922d": "aa44f9c5eb4f185ba53c2383a01ae493",
".git/objects/4a/a5773c1f6152c42fc6dabfbe5c6ddd5fb765dd": "1f40372dad0883f3070d4fa3eb466254",
".git/objects/24/7e01c76d21b722688595b828cfa2750c57aeed": "9a3fe13e20d8c6b2c476d4b6aec813d5",
".git/objects/71/a3b3e2e56b6969e51318c71f4fefe41e008dcc": "4c059ff18eb01c26a4921e105922a64b",
".git/objects/71/6c50832cbe656c0f458a25c195767648d650cc": "f9b0c18604ba1d8da037302b024d605e",
".git/objects/82/0aff7765a6fcf34a2ec926506e481fcf403ad9": "b60d08ae1252ba450e864ba0941c7fd9",
".git/objects/82/8270df05ef1f38f27392c39beda80a3f026532": "740d69011eb454733256812c3824be20",
".git/objects/82/f4d904ead7340db17d2bab73dd1e7d00a9ec3f": "483e373cc895434dea63d0740134e10b",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/78/255f51a7c0dbfaa8ba851f37a517364a74dec2": "5e163c3e5c3fdc65609384ed73d26e57",
".git/objects/8b/40bf51c3d159e38cf715bd47b820a30e72a125": "45258b86d49c7540ee0769524f9dd873",
".git/objects/22/43cd8aee018839a5fd176e6f0bbd5f0a85c60c": "1f52dcfc9e267f52e856ac0fc44ffbc1",
".git/objects/22/2a15a36aaa3bc369b34ca5b102536c442285a2": "423cf305d13a5ced0cd1b7c7f34e1e51",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e1c4fc8ea5b615b621795c450d11b93a",
".git/logs/refs/heads/main": "e1c4fc8ea5b615b621795c450d11b93a",
".git/logs/refs/remotes/origin/HEAD": "0a7967f842e7cc2af1ebe522997adf89",
".git/logs/refs/remotes/origin/main": "d92222f5e60227d635507685d99605fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6b6ed4de03becd7ebc552915f44b9c6f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6b6ed4de03becd7ebc552915f44b9c6f",
".git/index": "62865ebebb043bb42384260fb6b3cf99",
".git/packed-refs": "e322c4cc250dbe23663a03c300303795",
".git/COMMIT_EDITMSG": "b5f05a8d6b27ada0aaac0eb6d204efcb",
".git/FETCH_HEAD": "69709edcbcdcaeaea76395ae9b90be91",
"assets/AssetManifest.json": "b8ceda5be2eca0b9541f7085de215cee",
"assets/NOTICES": "20aadce474ba2efe2efdf23bf26f7c2b",
"assets/FontManifest.json": "f912066375868f387015b88c7f915e6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/neon/lib/fonts/LasEnter/LasEnter.ttf": "c161024b53fd9d99a60fa0ebc0a587fb",
"assets/packages/neon/lib/fonts/Samarin/Samarin.ttf": "e86112fa7734f71b0292102dfb322181",
"assets/packages/neon/lib/fonts/Beon/Beon.otf": "725bc066722fdfc327f582568e8ce97e",
"assets/packages/neon/lib/fonts/Night-Club-70s/Night-Club-70s-Regular.ttf": "2f52ea89848cc22583a19a3517387465",
"assets/packages/neon/lib/fonts/Night-Club-70s/Night-Club-70s-Bold.ttf": "c06f06e0a1b9e7bdb9ece19e455ae9cb",
"assets/packages/neon/lib/fonts/Automania/Automania.ttf": "3baf3e2ca3c97dc06fcd1332b7fa0d73",
"assets/packages/neon/lib/fonts/TextMeOne/TextMeOne-Regular.ttf": "475b539094d914ff68e420b4571c96c3",
"assets/packages/neon/lib/fonts/Cyberpunk/Cyberpunk.ttf": "9deb7d5fae2c035eb8b7d35f62169309",
"assets/packages/neon/lib/fonts/Monoton/Monoton-Regular.ttf": "f6aa15866bffca161454d7554a004259",
"assets/packages/neon/lib/fonts/Membra/Membra.ttf": "e378d80f5875e9095843e141e283897e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/anim/splash_anim.json": "497c27dfd7bae0375decc1aee9428735",
"assets/assets/anim/skill.json": "a100d5ace6590a8681e99b5148e42cb6",
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/images/rashid.png": "da298c3627d34607f7403ef53e1b2e62",
"assets/assets/images/rashid2.png": "e2d9199fa9dc67d30ec8bc6c822f367f",
"assets/assets/keyless/4.png": "02338493e361faf8de9130f457a6ed3c",
"assets/assets/keyless/2.png": "531b03d09ab463426839eae897fd44a1",
"assets/assets/keyless/3.png": "63e5af39a94a0b8ee9df8574f2f1e5ee",
"assets/assets/keyless/1.png": "1e9a5209c2d4842511f9bf84fb3f4241",
"assets/assets/keyless/0.png": "7b4375ab3ed31460957d975c64c718f7",
"assets/assets/lgn/4.png": "99a1393b9d189836cbf42d288043a4f9",
"assets/assets/lgn/2.png": "2853167b68c45f5c5f84157bcef9169c",
"assets/assets/lgn/3.png": "4643232572a9e6278d481ed802ccd14b",
"assets/assets/lgn/1.png": "b6f9f39a18ba5304425b5a1b96092b31",
"assets/assets/lgn/0.png": "84ce46717a94bc837f2c58695c6138c4",
"assets/assets/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/icons/beared.png": "7436d11465ac245681a738960abc293d",
"assets/assets/icons/girl_glasses.png": "0d1f417a1b265f613108183f68956d80",
"assets/assets/icons/girl.png": "e451dcc8be564ee50b69a0a7816ea384",
"assets/assets/icons/pk.jpeg": "e810db6cec572f6de10b5654ffc7a8fe",
"assets/assets/icons/adult.png": "05b5de864e2c67c41ca9e5f56fe0e5f6",
"assets/assets/icons/boy.png": "468febea2a014e126641eb05c0e15739",
"assets/assets/reapet/4.png": "7b068d58730b6524e47325ea01f33cfe",
"assets/assets/reapet/2.png": "f11d1c20f6bfb8d22b165df830515fc5",
"assets/assets/reapet/3.png": "68c0c1f4b292e277732eb4daa2b976a9",
"assets/assets/reapet/1.png": "0aae0cef2e2a06bd33b7ff0a35cf4011",
"assets/assets/reapet/0.png": "37a153bfa1b0ef473565873c5025522f",
"assets/assets/labouronline/4.png": "08371a2c95f6ed7a46a9f7d4c497fa07",
"assets/assets/labouronline/2.png": "59826a8b9b5e1bf82cb67a57751d0240",
"assets/assets/labouronline/3.png": "189da8ea1404496a1b5ad7c44811d5a8",
"assets/assets/labouronline/1.png": "3b024ea8055e615da7e3d2e0be311175",
"assets/assets/labouronline/0.png": "8b8945e82b368e6c7bc607b8075a093b",
"assets/assets/camera_lens.png": "f23224ee9f0b3f8b602dda9fdb98db99",
"assets/assets/chatapp/4.png": "49bf3380c54eaf649448e0c8c082f54f",
"assets/assets/chatapp/2.png": "af38bb3513701d1da9886b674a41cffc",
"assets/assets/chatapp/3.png": "9708113b4abf15c3838c4a4f17919295",
"assets/assets/chatapp/1.png": "12ee484488947a963575c4ed58083e7c",
"assets/assets/chatapp/0.png": "c238711e3b11d3a4b8a247dc18f7a879",
"assets/assets/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/assets/fonts/Gilroy-Light.otf": "c62aded729bf7146d491275e5019d7fc",
"assets/assets/fonts/Gilroy-ExtraBold.otf": "0f6e082f42f5247d82c3ade9c2a8f928",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
