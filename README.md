# e2e-sample

## Build Setup

Get token and create .env file  
https://dashboard.ngrok.com/auth/your-authtoken

.env
```bash
NGROK_AUTHTOKEN=token
NGROK_AUTH=username:password
```

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
# and create Public URL (ngrok)
$ yarn run dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
