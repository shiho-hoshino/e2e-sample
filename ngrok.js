require('dotenv').config();
const ngrok = require('ngrok');

(async () => {
  // Ngrokを起動
  const url = await ngrok.connect({
    // .envファイルに設定した ngrokのauthtoken
    authtoken: process.env.NGROK_AUTHTOKEN,
    // .envファイルに設定した basic認証の設定
    auth: process.env.NGROK_AUTH,
    // ローカルで起動する際のポート番号
    addr: '3000',
    region: 'jp',
  });

  // URLにBasic認証Passを設定
  const domain = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
  const urltmp = 'https://' + process.env.NGROK_AUTH + '@' + domain;

  // console.log(urltmp);

  // 環境変数に必要な情報を書き込み
  process.env.TEST_URL = urltmp;
  process.env.BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME;
  process.env.BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY;
  console.log('ngrok url:', process.env.TEST_URL);

  // const browser = 'chrome';
  const browser = '"browserstack:chrome@79.0:Windows 10"';

  // Testcafeの実行
  const {exec} = require('child_process');
  exec('yarn testcafe '+ browser +' test/e2e/**.js',
      (err, stdout, stderr) => {
        if (err) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
})();
