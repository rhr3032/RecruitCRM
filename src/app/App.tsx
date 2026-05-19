import { useState } from 'react';
import { CompanyHeader } from './components/CompanyHeader';
import { ActionBar } from './components/ActionBar';
import { TabNavigation } from './components/TabNavigation';
import { LeftPanel } from './components/LeftPanel';
import { CenterPanel } from './components/CenterPanel';
import { RightPanel } from './components/RightPanel';
import { AddJobModal } from './components/AddJobModal';
import { LogActivityModal } from './components/LogActivityModal';
import { AddContactModal } from './components/AddContactModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddJob, setShowAddJob] = useState(false);
  const [showLogActivity, setShowLogActivity] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <CompanyHeader />
      <ActionBar 
        onAddJob={() => setShowAddJob(true)}
        onLogActivity={() => setShowLogActivity(true)}
        onAddContact={() => setShowAddContact(true)}
      />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex gap-6 px-6 pb-6">
        <LeftPanel />
        <CenterPanel activeTab={activeTab} />
        <RightPanel onLogActivity={() => setShowLogActivity(true)} />
      </div>

      {/* Modals */}
      <AddJobModal open={showAddJob} onOpenChange={setShowAddJob} />
      <LogActivityModal open={showLogActivity} onOpenChange={setShowLogActivity} />
      <AddContactModal open={showAddContact} onOpenChange={setShowAddContact} />
    </div>
  );
}