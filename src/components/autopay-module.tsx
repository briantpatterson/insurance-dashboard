"use client"

import { useState } from "react"
import { AutopaySettings } from "@/data/billing"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { CreditCard, Calendar, AlertCircle, CheckCircle2, RefreshCw } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface AutopayModuleProps {
  settings: AutopaySettings
}

export function AutopayModule({ settings }: AutopayModuleProps) {
  const [autopayEnabled, setAutopayEnabled] = useState(settings.enabled)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  
  const handleAutopayToggle = () => {
    if (autopayEnabled) {
      // If turning off autopay, show confirmation dialog
      setShowConfirmDialog(true)
    } else {
      // If turning on autopay, just enable it
      setAutopayEnabled(true)
    }
  }
  
  const confirmDisableAutopay = () => {
    setAutopayEnabled(false)
    setShowConfirmDialog(false)
  }
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }
  
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Autopay Settings</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {autopayEnabled ? 'Enabled' : 'Disabled'}
            </span>
            <Switch 
              checked={autopayEnabled} 
              onCheckedChange={handleAutopayToggle}
              aria-label="Toggle autopay"
            />
          </div>
        </div>
        <CardDescription>
          Automatically pay your bills on the due date
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {autopayEnabled ? (
          <>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
              <RefreshCw className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h3 className="font-medium text-blue-800 dark:text-blue-300">Next Automatic Payment</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  {formatCurrency(settings.nextPaymentAmount)} will be charged on {settings.nextPaymentDate}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Payment Method</h3>
                <p className="text-sm text-muted-foreground">
                  {settings.paymentMethod.name} ending in {settings.paymentMethod.last4}
                  {settings.paymentMethod.expiryDate && ` (Expires ${settings.paymentMethod.expiryDate})`}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-start gap-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-950">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
            <div>
              <h3 className="font-medium text-amber-800 dark:text-amber-300">Autopay is disabled</h3>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                You'll need to manually pay your bills before the due date to avoid late fees.
              </p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Update Payment Method
        </Button>
        <Button variant="outline" size="sm">
          View Billing FAQs
        </Button>
      </CardFooter>
      
      {/* Confirmation Dialog for disabling autopay */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Disable Autopay?</DialogTitle>
            <DialogDescription>
              If you disable autopay, you'll need to manually pay your bills before the due date to avoid late fees.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-start gap-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-950">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
            <div className="text-sm text-amber-700 dark:text-amber-400">
              Your next bill of {formatCurrency(settings.nextPaymentAmount)} is due on {settings.nextPaymentDate}.
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDisableAutopay}>
              Disable Autopay
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
} 