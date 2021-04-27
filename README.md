# cpay-exchange-node-sdk

```
npm i cpay-exchange-node-api-sdk
```

```
import CpayExchangeSDK from '@cpayhq/exchange-node-sdk';


const ex = new CpayExchangeSDK({ apiKey: 'apiKey' })
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
interval - Available values : hourly, daily, weekly, monthly, 5m, 10m, 15m, 30m, 45m, 1h, 5h, 12h, 24h, 1d, 2d, 3d, 7d, 14d, 15d, 30d;
from, to - Example : 2021-03-01 14:12:10

const history = await ex.getExhangePairHistory(options);
```
