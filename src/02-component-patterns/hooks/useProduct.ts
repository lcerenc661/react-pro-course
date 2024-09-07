import { useEffect, useRef, useState } from "react";
import { onChangeProps, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeProps) => void;
  value?: number;
}

const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef( !!onChange )

  const increaseBy = (value: number) => {

    
    if (isControlled.current) {
      return onChange && onChange({ count: value, product });
    }
    
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);
  return { increaseBy, counter };
};

export default useProduct;
