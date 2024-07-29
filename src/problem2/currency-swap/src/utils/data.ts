export interface CurrencyOption {
  readonly value: string;
  readonly label: string;
  readonly price: number;
  readonly date: string;
  readonly img: string;
}

export const fetchCurrencyOption = async (): Promise<CurrencyOption[]> => {
  try {
    const api = "https://interview.switcheo.com/prices.json";

    const response = await fetch(api);

    if (!response.ok) {
      throw new Error("API does not work");
    }
    const data = await response.json();
    
    return data.map((item: any) => ({
      value: item.currency,
      label: item.currency,
      price: item.price,
      date: item.date,
      img: `./../src/assets/tokens/${item.currency}.svg`,
    }));

  } catch (error) {
    console.error("Failed to fetch currency", error);
    return [];
  }
};
