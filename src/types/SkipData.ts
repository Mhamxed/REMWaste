export interface SkipData {
    id: number;
    size: number;
    hire_period_days: number;
    transport_cost: number | null;
    per_tonne_cost: number | null;
    price_before_vat: number | null;
    vat: number;
    area: string;
    forbidden: boolean;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
    popular?: boolean;
  } 