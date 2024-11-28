import { PaymentTable } from './payment-table';
import { PaymentsHeader } from './payments-header';

export function PaymentsSection() {
  return (
    <div className="rounded-lg border bg-card h-full flex flex-col">
      <div className="p-4 md:p-6 flex-none">
        <PaymentsHeader />
      </div>
      <div className="flex-1 min-h-0 overflow-x-auto">
        <PaymentTable />
      </div>
    </div>
  );
}