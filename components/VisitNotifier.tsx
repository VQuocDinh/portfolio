import React, { useEffect } from 'react';
import {
  getVisitNotifyConfig,
  hasVisitNotifyBeenSentThisSession,
  markVisitNotifySent,
  sendVisitNotification,
} from '../lib/visitNotify';

const VisitNotifier: React.FC = () => {
  useEffect(() => {
    if (!import.meta.env.PROD) return;
    if (!getVisitNotifyConfig()) return;
    if (hasVisitNotifyBeenSentThisSession()) return;

    markVisitNotifySent();

    void sendVisitNotification().catch((err) => {
      console.error('Visit notification email failed:', err);
    });
  }, []);

  return null;
};

export default VisitNotifier;
