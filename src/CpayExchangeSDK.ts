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

  convertPairs(options: ExchangeConvertPairsOptions) {
    const path = `/api/exchanges/convert`;
    if (!options.exchangeId) {
      options.exchangeId = 1;
    }
    return this.auth_get<ExchangeConvertPairsInfo>(`${path}`, options);
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
