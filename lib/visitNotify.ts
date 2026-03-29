import emailjs from '@emailjs/browser';

const STORAGE_KEY = 'portfolio_visit_notify_sent';

export function hasVisitNotifyBeenSentThisSession(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return true;
  }
}

export function markVisitNotifySent(): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1');
  } catch {
    /* ignore */
  }
}

export function getVisitNotifyConfig(): {
  serviceId: string;
  templateId: string;
  publicKey: string;
} | null {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const templateId = import.meta.env.VITE_EMAILJS_VISIT_TEMPLATE_ID?.trim();
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
  if (!serviceId || !templateId || !publicKey) return null;
  return { serviceId, templateId, publicKey };
}

export async function sendVisitNotification(): Promise<void> {
  const config = getVisitNotifyConfig();
  if (!config) return;

  const { serviceId, templateId, publicKey } = config;

  await emailjs.send(
    serviceId,
    templateId,
    {
      to_name: 'Vo Quoc Dinh',
      visit_time: new Date().toISOString(),
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      path: typeof window !== 'undefined' ? window.location.pathname : '',
      referrer:
        typeof document !== 'undefined' && document.referrer ? document.referrer : '(direct)',
      locale: typeof navigator !== 'undefined' ? navigator.language : '',
      user_agent:
        typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 500) : '',
    },
    publicKey
  );
}
