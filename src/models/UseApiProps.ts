export type UseApiProps<T> = {
    fn: (page: number) => Promise<T>;
};
