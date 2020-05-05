# elaws-easyjump
[e-Gov法令検索](https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0100/)で条文を簡単に引くための Chrome 拡張機能です。

Chrome Web Store に公開していないため、使用するためには以下の手順を踏んでください。
1. このレポジトリをクローンする (`git clone https://github.com/ryoshid/elaws-easyjump`)
2. `yarn install && npx webpack`
3. `chrome://extensions/`から`dist`を読み込む

# 使い方
法令のページで数字を入力するとその条文にジャンプします。枝番号、たとえば`第三条の二`に飛びたい場合は`3-2`または`3n2`と入力します。

現時点では、検索後に表示されるページでは正常に動作せず、「別画面で表示」のページでの使用を想定しています（※）。

※民法の場合：
[検索後に表示されるページ](https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/detail?lawId=129AC0000000089)／
[「別画面で表示」のページ](https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/viewContents?lawId=129AC0000000089_20200401_501AC0000000034)
