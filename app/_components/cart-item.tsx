import Image from "next/image";
import { CartContext, CartProduct } from "../_contexts/cart";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  cartProduct: CartProduct;
}

const CartItem = ({ cartProduct }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseQuantityClick = () =>
    decreaseProductQuantity(cartProduct.id);
  const handleIncreaseQuantityClick = () =>
    increaseProductQuantity(cartProduct.id);

  const handleRemoveProductClick = () => removeProductFromCart(cartProduct.id);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20">
          <Image
            src={cartProduct.imageUrl}
            alt={cartProduct.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-xs">{cartProduct.name}</h3>
          <div className="flex items-center gap-1">
            <h4 className="text-sm font-semibold">
              {formatCurrency(
                calculateProductTotalPrice(cartProduct) * cartProduct.quantity,
              )}
            </h4>
            {cartProduct.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(
                  Number(cartProduct.price) * cartProduct.quantity,
                )}
              </span>
            )}
          </div>
          <div className="flex items-center text-center">
            <Button
              variant="ghost"
              className="h-7 w-7 border border-solid border-muted-foreground"
              size="icon"
              onClick={handleDecreaseQuantityClick}
            >
              <ChevronLeftIcon size={18} />
            </Button>
            <span className="block w-8 text-sm">{cartProduct.quantity}</span>
            <Button
              size="icon"
              className="h-7 w-7"
              onClick={handleIncreaseQuantityClick}
            >
              <ChevronRightIcon size={18} />
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 border border-solid border-muted-foreground"
        onClick={handleRemoveProductClick}
      >
        <TrashIcon size={18} />
      </Button>
    </div>
  );
};

export default CartItem;
