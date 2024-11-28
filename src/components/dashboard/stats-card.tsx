import { motion } from 'framer-motion';
import { ArrowUpIcon, DollarSignIcon, PercentIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  amount: string;
  increase: string;
  icon: 'dollar' | 'percent';
}

export function StatsCard({ title, amount, increase, icon }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {icon === 'dollar' ? (
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          ) : (
            <PercentIcon className="h-4 w-4 text-muted-foreground" />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{amount}</div>
          <div className="flex items-center text-sm text-green-500">
            <ArrowUpIcon className="mr-1 h-4 w-4" />
            {increase}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}