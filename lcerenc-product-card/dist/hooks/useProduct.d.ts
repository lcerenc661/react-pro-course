import { InitialValues, onChangeProps, Product } from "../interfaces/interfaces";
interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeProps) => void;
    value?: number;
    initialValues?: InitialValues;
}
declare const useProduct: ({ product, onChange, value, initialValues, }: useProductArgs) => {
    increaseBy: (value: number) => void;
    counter: number;
    isMaxCountReached: boolean;
    reset: () => void;
};
export default useProduct;
