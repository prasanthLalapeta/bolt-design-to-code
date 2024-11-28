import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DateRangePicker } from './date-range-picker';

export function PaymentsHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:w-auto">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search name or reservation ID..."
          className="w-full pl-10 sm:w-[300px]"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <DateRangePicker />
        <Button className="w-full sm:w-auto">Export</Button>
      </div>
    </div>
  );
}