import { StatsCard } from './stats-card';

export function StatsCards() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 max-w-full sm:max-w-[620px]">
      <div className="w-full max-w-[300px]">
        <StatsCard
          title="Revenue this month"
          amount="$10,398"
          increase="+$498"
          icon="dollar"
        />
      </div>
      <div className="w-full max-w-[300px]">
        <StatsCard
          title="Profit this month"
          amount="$3,982"
          increase="+$198"
          icon="percent"
        />
      </div>
    </div>
  );
}