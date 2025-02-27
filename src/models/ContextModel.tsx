import { IceAndFireHouse } from "@/models/IceAndFireHouse";

export type ContextModel = {
    data?: IceAndFireHouse[];
    loading: boolean;
    page: number;
    updatePage: (page: number) => void;
};
