export interface TableData {
    channel_id: string;
    channel_name: string;
    type: string;
    country: string;
    url_variants: string;
    dt: string;
    sampled: string;
    hit_status: string;
    join: string;
    bf: string;
    spend: string;
    impressions: string;
    clicks: string;
    cpm: string | undefined;
    cpa_per_click: string | null;
    cpa_per_result: string | null;
    results: string | null;
}