import { motion } from 'framer-motion';
import { DashboardLayout } from './components/dashboard/dashboard-layout';
import { DashboardContent } from './components/dashboard/dashboard-content';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </motion.div>
  );
}

export default App;