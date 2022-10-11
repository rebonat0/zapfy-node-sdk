<h1 align="center">Welcome to zapfy-sdk 👋</h1>


> A package to handle all integrations with ZapFy ecosystem

### 📖 [Documentation](http://docs.zapfy.me/)

### 🏠 [Homepage](https://github.com/rebonat0/zapfy-node-sdk)

## Prerequisites

- node >= 16

## Install

npm i zapfy-sdk
# or

yarn add zapfy-sdk


## Example (how to use)
```js
import { ZapfySdk } from 'zapfy-sdk';

await ZapfySdk.Message.sendTextMessage({
    destination: '55 27 99999999',
    text: 'Uma mensagem de texto diretamente do sdk',
    instanceKey: 'INSTANCE_KEY_GOES_HERE',
    instanceToken: 'INSTANCE_TOKEN_GOES_HERE'
});
```


## Author

👤 *ZapFy & vektar.tech*
.