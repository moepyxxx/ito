# 開発メモ

- 開発フローだいたいわかってきたので記載

  1. storybook にて atoms/molecules レベルのコンポネを作成

     - attention: async/await の server component はサポートしていないので注意
       - see: https://github.com/storybookjs/storybook/issues/10009

  2. モックサーバーである MSW の導入は諦めて実 MSW サーバーを立てる

  - why: MSW は現在のところ app router をサポートしておらず、MSW をサポートしている storybook 上は RSC と相性が悪い（というかサポートは storybook v8 になりそう）
    - see: https://github.com/mswjs/msw/issues/1644
  - attention: 一応 storybook に msw は入れておくが msw-storybook-addon のせいで typescript が最新まで上げられないので、普通に一掃しても良いかも

  3. テストは書く
