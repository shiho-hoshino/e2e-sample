import {Selector, ClientFunction} from 'testcafe';

fixture`Getting Started`.page`${process.env.TEST_URL}/login/`;
const getWindowLocation = ClientFunction(() => window.location);

test('Login', async (targetPage) => {
  let location;
  // 現在のURLを取得
  location = await getWindowLocation();
  // パスが想定通りか確認
  location.pathname.match('/login/');
  await targetPage
      // Emailを入力
      .typeText(Selector('[data-testid="login.email"]'), 'user@email.com')
      // パスワードを入力
      .typeText(Selector('[data-testid="login.password"]'), 'userpass')
      // Screenshotを保存
      // .takeScreenshot('e2e/login.png')
      // ログインボタンをクリック
      .click(Selector('[data-testid="login.btn"]'));
  // 現在のURLを取得
  location = await getWindowLocation();
  // パスが想定通りか確認
  location.pathname.match('/');
});
