import { StatsCards } from './stats-cards';
import { PaymentsSection } from './payments-section';

export function DashboardContent() {
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 gap-6 md:gap-8">
      <div className="flex-none">
        <StatsCards />
      </div>
      <div className="flex-1 min-h-0">
        <PaymentsSection />
      </div>
    </div>
  );
}