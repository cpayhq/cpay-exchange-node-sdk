# cpay-exchange-node-sdk

```
npm i cpay-exchange-node-api-sdk
```

```
import CpayExchangeSDK from 'cpay-exchange-node-api-sdk';


const ex = new CpayExchangeSDK({ apiKey: 'apiKey', redisUri?: 'string' })
```

Available Methods:

1. Get list of exchanges

```
let options = {
  search?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}
const exList = await ex.getExchangesList(options);
```

2. Get pairs by exchange

```
let options = {
  search?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}
const pairList = await ex.getExchangePairs(options);
```

3. Convert currencies

```
let options = {
  from: string;
  to: string;
}

const convert = await ex.convertPairs(options);
```

4. Get pair history by exchange

```
let options = {
  symbol: string;
  from: string;
  to: string;
  interval: string;
}
interval - Available values : hourly, daily, weekly, monthly;
from, to - Example : 2021-03-01 14:12:10

const history = await ex.getExhangePairHistory(options);
```
