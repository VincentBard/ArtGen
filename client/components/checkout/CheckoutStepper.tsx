import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CheckoutStep = {
  id: string;
  title: string;
  description: string;
};

interface CheckoutStepperProps {
  steps: CheckoutStep[];
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
  className?: string;
}

export function CheckoutStepper({
  steps,
  currentStep,
  onStepClick,
  className,
}: CheckoutStepperProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isClickable = index < currentStep;

          return (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "w-10 h-10 rounded-full border-2 transition-all duration-200",
                    isCompleted
                      ? "bg-primary border-primary text-primary-foreground hover:bg-primary/90"
                      : isActive
                        ? "border-primary text-primary bg-primary/10 hover:bg-primary/20"
                        : "border-muted-foreground/30 text-muted-foreground hover:border-muted-foreground/50",
                    isClickable && "cursor-pointer",
                  )}
                  onClick={() => isClickable && onStepClick(index)}
                  disabled={!isClickable}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </Button>

                {/* Step Info */}
                <div className="mt-2 text-center">
                  <div
                    className={cn(
                      "text-sm font-medium",
                      isActive
                        ? "text-primary"
                        : isCompleted
                          ? "text-foreground"
                          : "text-muted-foreground",
                    )}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 max-w-24">
                    {step.description}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 flex items-center px-4">
                  <div
                    className={cn(
                      "h-0.5 w-full transition-colors duration-200",
                      index < currentStep
                        ? "bg-primary"
                        : "bg-muted-foreground/30",
                    )}
                  />
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 ml-2 transition-colors duration-200",
                      index < currentStep
                        ? "text-primary"
                        : "text-muted-foreground/30",
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
