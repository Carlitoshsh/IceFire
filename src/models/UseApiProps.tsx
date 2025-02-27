'use client';

export type UseApiProps<T> = {
    fn: () => Promise<T>;
};
