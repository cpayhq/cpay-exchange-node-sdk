import {
  CpayExchangeSDKBase,
  CpayExchangeSDKBaseOptions,
} from "./CpayExchangeSDKBase";

import {
  IPaginated,
  ExchangeInfo,
  ExchangePairInfo,
  ExchangeListOptions,
  ExchangePairsOptions,
  ExchangeConvertPairsOptions,
  ExchangeConvertPairsInfo,
  ExchangePairHistoryOptions,
  ExchangePairHistoryInfo,
} from "./interfaces/cpay.exchange.interface";

export interface CpayExchangeSDKOptions extends CpayExchangeSDKBaseOptions {}

export class CpayExchangeSDK extends CpayExchangeSDKBase {
  /**
   * @param parameters
   */
  constructor(parameters: CpayExchangeSDKOptions) {
    super(parameters);
  }

  setOptions = (options: CpayExchangeSDKOptions) => {
    super.setOptions(options);
  };

  getExchangesList(options: ExchangeListOptions) {
    const path = `/api/exchanges/list`;
    return this.auth_get<IPaginated<ExchangeInfo>>(`${path}`, options);
  }

  getExchangePairs(options: ExchangePairsOptions) {
    const path = `/api/exchanges/pairs`;
    if (!options.exchangeId) {
      options.exchangeId = 1;
    }
    return this.auth_get<IPaginated<ExchangePairInfo>>(`${path}`, options);
  }

  convertPairs(
    options: ExchangeConvertPairsOptions
  ): Promise<ExchangeConvertPairsInfo> {
    const path = `/api/exchanges/convert`;
    if (!options.exchangeId) {
      options.exchangeId = 1;
    }
    const redisClient = this.redisClient();
    const keyPrefix = `rates.pairs.${options.exchangeId}.${options.from}.${options.to}`;
    return new Promise((resolve, reject) => {
      this.auth_get<ExchangeConvertPairsInfo>(`${path}`, options)
        .then((convertData) => {
          if (redisClient) {
            redisClient.set(keyPrefix, JSON.stringify(convertData));
          }
          return resolve(convertData);
        })
        .catch((err) => {
          if (redisClient) {
            redisClient.exists(keyPrefix).then((exist) => {
              if (exist == 1) {
                redisClient
                  .get(keyPrefix)
                  .then((result) => resolve(JSON.parse(result)));
              } else {
                return reject(err);
              }
            });
          } else {
            return reject(err);
          }
        });
    });
  }

  getExhangePairHistory(options: ExchangePairHistoryOptions) {
    const path = `/api/exchanges/history`;
    if (!options.exchangeId) {
      options.exchangeId = 1;
    }
    return this.auth_get<ExchangePairHistoryInfo[]>(`${path}`, options);
  }
}

export default CpayExchangeSDK;
