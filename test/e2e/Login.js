import {Selector, ClientFunction} from 'testcafe';

fixture`Getting Started`.page`http://localhost:3000/login/`;
const getWindowLocation = ClientFunction(() => window.location);

test('Login', async (targetPage) => {
  // 現在のURLを取得
  let location;
  location = await getWindowLocation();
  location.pathname.match('/login/');
  await targetPage
      /**
       * ログイン画面(/login)
       */
      // ログイン情報を入力
      .typeText(Selector('[data-testid="login.email"]'), 'user@email.com')
      .typeText(Selector('[data-testid="login.password"]'), 'userpass')
      // ログインボタンをクリック
      .click(Selector('[data-testid="login.btn"]'))
      // Screenshot
      .takeScreenshot('e2e/login.png');

  location = await getWindowLocation();
  location.pathname.match('/');
});
