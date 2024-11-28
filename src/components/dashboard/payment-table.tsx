import { motion } from 'framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Download, Printer } from 'lucide-react';
import { payments } from '@/lib/data/payments';

export function PaymentTable() {
  return (
    <div className="h-full w-full overflow-auto">
      <Table>
        <TableHeader className="sticky top-0 bg-background">
          <TableRow>
            <TableHead className="w-[100px]">Bill ID</TableHead>
            <TableHead>Patient Name</TableHead>
            <TableHead className="hidden md:table-cell">Reservation Number</TableHead>
            <TableHead className="hidden sm:table-cell">Reservation Date</TableHead>
            <TableHead className="text-right">Total Amount</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment, index) => (
            <motion.tr
              key={payment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group"
            >
              <TableCell className="font-medium">
                {payment.id}
                {payment.isNew && (
                  <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
                    NEW
                  </span>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={payment.avatar} />
                    <AvatarFallback>
                      {payment.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="whitespace-nowrap">{payment.name}</span>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">{payment.reservation}</TableCell>
              <TableCell className="hidden sm:table-cell">{payment.date}</TableCell>
              <TableCell className="text-right">{payment.amount}</TableCell>
              <TableCell>
                <div className="flex justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <Download className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700" />
                  <Printer className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700" />
                </div>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}