export interface ExchangeInfo {
  id: number;
  name: string;
  slug: string;
  isActive: boolean;
  firstHistoricalData: string;
  lastHistoricalData: string;
}

export interface ExchangeConvertPairsInfo {
  price: number;
}

export interface ExchangePairInfo {
  id: number;
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  price: number;
  volumeBaseAsset: number;
  volumeQuoteAsset: number;
  firstHistoricalData: string;
  lastHistoricalData: string;
}

export class IPaginated<TModel> {
  page: number;
  pages: number;
  countItems: number;
  entities: TModel[];
}

export interface BasePaginationOptions {
  search?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}

export interface ExchangeListOptions extends BasePaginationOptions {}

export interface ExchangePairsOptions extends BasePaginationOptions {
  exchangeId?: number;
}

export interface ExchangeConvertPairsOptions {
  from: string;
  to: string;
  exchangeId?: number;
}

export enum IntervalAvailable {
  hourly = "hourly",
  daily = "daily",
  weekly = "weekly",
  monthly = "monthly",
  "5m" = "5m",
  "10m" = "10m",
  "15m" = "15m",
  "30m" = "30m",
  "45m" = "45m",
  "1h" = "1h",
  "5h" = "5h",
  "12h" = "12h",
  "24h" = "24h",
  "1d" = "1d",
  "2d" = "2d",
  "3d" = "3d",
  "7d" = "7d",
  "14d" = "14d",
  "15d" = "15d",
  "30d" = "30d",
}

export interface ExchangePairHistoryOptions {
  symbol: string;
  from: string;
  to: string;
  interval: IntervalAvailable;
  exchangeId?: number;
}

export interface ExchangePairHistoryInfo {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  timestamp: string;
  price: number;
  volumeBaseAsset: number;
  volumeQuoteAsset: number;
}
