export interface Page<T> {
    data: Array<T>;
    index: number;
    size: number;
    total: number;
}