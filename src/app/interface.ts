export interface TWData {
    name: string;
    img: string;
    category: string;
}

export type ListTDataItem = Omit<TWData, 'category'>;

export type ListTData = Record<string, Array<ListTDataItem>>;
