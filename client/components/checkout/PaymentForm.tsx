import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CreditCard, Lock, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PaymentMethod } from "@shared/types";

const paymentSchema = z.object({
  type: z.enum(["card", "paypal", "bank"]),
  cardNumber: z.string().optional(),
  expiryMonth: z.number().optional(),
  expiryYear: z.number().optional(),
  cvv: z.string().optional(),
  cardholderName: z.string().optional(),
});

type PaymentFormData = z.infer<typeof paymentSchema>;

interface PaymentFormProps {
  onNext: (data: PaymentMethod) => void;
  onBack: () => void;
  initialData?: Partial<PaymentFormData>;
}

export function PaymentForm({ onNext, onBack, initialData }: PaymentFormProps) {
  const [paymentType, setPaymentType] = useState<"card" | "paypal" | "bank">(
    "card",
  );

  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      type: "card",
      cardNumber: "",
      cardholderName: "",
      cvv: "",
      ...initialData,
    },
  });

  const onSubmit = (data: PaymentFormData) => {
    const paymentMethod: PaymentMethod = {
      type: data.type,
      ...(data.type === "card" && {
        cardNumber: data.cardNumber,
        expiryMonth: data.expiryMonth,
        expiryYear: data.expiryYear,
        cvv: data.cvv,
        cardholderName: data.cardholderName,
      }),
    };

    onNext(paymentMethod);
  };

  const securityFeatures = [
    "256-bit SSL encryption",
    "PCI DSS compliant",
    "Fraud protection",
    "Secure payment processing",
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Method
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Payment Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => {
                          field.onChange(value);
                          setPaymentType(value as any);
                        }}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                          <RadioGroupItem value="card" id="card" />
                          <Label
                            htmlFor="card"
                            className="flex-1 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <span>Credit/Debit Card</span>
                              <div className="flex gap-1">
                                <Badge variant="outline" className="text-xs">
                                  Visa
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  MC
                                </Badge>
                              </div>
                            </div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label
                            htmlFor="paypal"
                            className="flex-1 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <span>PayPal</span>
                              <Badge variant="outline" className="text-xs">
                                PayPal
                              </Badge>
                            </div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label
                            htmlFor="bank"
                            className="flex-1 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <span>Bank Transfer</span>
                              <Badge variant="outline" className="text-xs">
                                ACH
                              </Badge>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {paymentType === "card" && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="cardholderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cardholder Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Name as it appears on card"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value
                                .replace(/\s/g, "")
                                .replace(/(.{4})/g, "$1 ")
                                .trim();
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid grid-cols-2 gap-2">
                      <FormField
                        control={form.control}
                        name="expiryMonth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Month</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="MM"
                                maxLength={2}
                                value={
                                  field.value ? field.value.toString() : ""
                                }
                                onChange={(e) => {
                                  const value =
                                    parseInt(e.target.value) || undefined;
                                  field.onChange(value);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="expiryYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Year</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="YY"
                                maxLength={2}
                                value={
                                  field.value ? field.value.toString() : ""
                                }
                                onChange={(e) => {
                                  const value =
                                    parseInt(e.target.value) || undefined;
                                  field.onChange(value);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVV</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="123"
                              maxLength={4}
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {paymentType === "paypal" && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    You will be redirected to PayPal to complete your payment
                    securely.
                  </p>
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">PP</span>
                  </div>
                </div>
              )}

              {paymentType === "bank" && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Bank transfer details will be provided after order
                    confirmation.
                  </p>
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">
                      BANK
                    </span>
                  </div>
                </div>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Security Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-green-600" />
            Security & Trust
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack}>
          Back to Shipping
        </Button>
        <Button onClick={form.handleSubmit(onSubmit)}>Review Order</Button>
      </div>
    </div>
  );
}
