<template>
  <amplify-authenticator>
    <div>
      <modal />
    </div>
  </amplify-authenticator>
</template>

// scriptをコメントアウトすると、Side と Modal のみ表示された
// -> その2つは自動でインポートされてるのかも
// -> confで componets: false を設定して、自動インポートの解除をすると、何も表示されなくなった。
// ということは、自動インポートは成功している（ただし、Side と Modal のみ）
// HeaderComponent も FooterComponent も自動インポートの対象にしたい。
// 対象の線引は？特にオプションつけてないし、パスもみんな components ディレクトリの直下だし。
// もしかすると、src の下にまとめたときに依存関係がおかしくなった可能性が。 だとしても、なぜ Header と Footer だけおかしくなったのか謎
// layouts ディレクトリに共通化したデフォルトレイアウトを追加しても、表示されない。
