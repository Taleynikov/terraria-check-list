export interface TWData {
    NAME: string;
    IMG: string;
    CATEGORY: string;
}

export type ListTDataItem = Omit<TWData, 'CATEGORY'>;

export type ListTData = Record<string, Array<ListTDataItem>>;
