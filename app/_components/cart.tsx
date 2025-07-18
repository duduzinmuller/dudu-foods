import { useContext } from "react";
import { CartContext } from "../_contexts/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { formatCurrency } from "../_helpers/price";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Cart = () => {
  const { products, subTotalPrice, totalDiscounts, totalPrice } =
    useContext(CartContext);
  return (
    <div className="flex h-full flex-col py-5">
      {products.length > 0 ? (
        <>
          <div className="flex-auto space-y-4">
            {products.map((product) => (
              <CartItem key={product.id} cartProduct={product} />
            ))}
          </div>

          <div className="mt-6">
            <Card>
              <CardContent className="space-y-2 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Subtotal
                  </span>
                  <span>{formatCurrency(subTotalPrice)}</span>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Descontos
                  </span>
                  <span> {formatCurrency(totalDiscounts)}</span>
                </div>

                <Separator className="h-[0.5px]" />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Entrega</span>
                  <span>
                    {Number(products[0].restaurant.deliveryFee) === 0 ? (
                      <span className="uppercase text-primary">Gratis</span>
                    ) : (
                      formatCurrency(Number(products[0].restaurant.deliveryFee))
                    )}
                  </span>
                </div>

                <Separator />

                <div className="flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(totalPrice)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Button className="w-full">Finalizar pedido</Button>
          </div>
        </>
      ) : (
        <h2 className="font-medium">A sacola està vazia.</h2>
      )}
    </div>
  );
};

export default Cart;
