/* eslint-disable no-unused-vars */
"use client";

import { useContext, useState } from "react";
import { CartContext } from "../_contexts/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { formatCurrency } from "../_helpers/price";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { createdOrder } from "../_actions/order";
import { OrderStatus } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface CartProps {
  setIsOpen: (isOpen: boolean) => void;
}

const Cart = ({ setIsOpen }: CartProps) => {
  const router = useRouter();
  const [isSubmitingLoading, setIsSubmitingLoading] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const { data } = useSession();

  const { products, subTotalPrice, totalDiscounts, totalPrice, clearCart } =
    useContext(CartContext);

  const handleFinishOrderClick = async () => {
    if (!data?.user) return;

    const restaurant = products[0].restaurant;

    try {
      setIsSubmitingLoading(true);
      await createdOrder({
        subTotalPrice,
        totalPrice,
        totalDiscounts,
        deliveryFee: restaurant.deliveryFee,
        deliveryTimeMinutes: restaurant.deliveryTimeMinutes,
        restaurant: {
          connect: { id: restaurant.id },
        },
        status: OrderStatus.CONFIRMED,
        user: {
          connect: { id: data.user.id },
        },
        products: {
          createMany: {
            data: products.map((product) => ({
              productId: product.id,
              quantity: product.quantity,
            })),
          },
        },
      });

      clearCart();
      setIsOpen(false);

      toast("Pedido finalizado com sucesso", {
        description: "Você pode acompanhá-lo na tela dos seus pedidos",
        action: {
          label: "Meus Pedidos",
          onClick: () => router.push("/my-orders"),
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitingLoading(false);
    }
  };
  return (
    <>
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
                    <span className="text-xs text-muted-foreground">
                      Entrega
                    </span>
                    <span>
                      {Number(products[0].restaurant.deliveryFee) === 0 ? (
                        <span className="uppercase text-primary">Gratis</span>
                      ) : (
                        formatCurrency(
                          Number(products[0].restaurant.deliveryFee),
                        )
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
              <Button
                className="w-full"
                onClick={() => setIsConfirmDialogOpen(true)}
                disabled={isSubmitingLoading}
              >
                {isSubmitingLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Finalizar pedido
              </Button>
            </div>
          </>
        ) : (
          <h2 className="font-medium">A sacola està vazia.</h2>
        )}
      </div>

      <AlertDialog
        open={isConfirmDialogOpen}
        onOpenChange={setIsConfirmDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja finalizar seu pedido?</AlertDialogTitle>
            <AlertDialogDescription>
              Ao finalizar seu pedido, você concorda com os termos e condições
              da nossa plataforma
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleFinishOrderClick}
              disabled={isSubmitingLoading}
            >
              {isSubmitingLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Finalizar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Cart;
