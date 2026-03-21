import { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

const names = [
  "Maria S.", "João P.", "Ana L.", "Carlos M.", "Fernanda R.",
  "Ricardo B.", "Juliana T.", "Pedro H.", "Camila D.", "Bruno G.",
  "Larissa N.", "Thiago V.", "Patrícia A.", "Gustavo K.", "Marcos F.",
  "Amanda C.", "Felipe S.", "Beatriz O.", "Diego M.", "Isabela R.",
];

const cities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador",
  "Fortaleza", "Brasília", "Porto Alegre", "Recife", "Manaus",
];

const timeAgo = ["agora mesmo", "há 1 min", "há 2 min", "há 3 min", "há 5 min"];

const PurchaseNotification = () => {
  const [notification, setNotification] = useState<{ name: string; city: string; time: string } | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const time = timeAgo[Math.floor(Math.random() * timeAgo.length)];
      setNotification({ name, city, time });
      setVisible(true);

      setTimeout(() => setVisible(false), 5000);
    };

    // First notification after 8s
    const firstTimeout = setTimeout(show, 8000);

    // Then every 15-30s
    const interval = setInterval(show, 15000 + Math.random() * 15000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification || !visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[55] animate-in slide-in-from-left-full duration-500 max-w-sm">
      <div className="glass-card p-4 border-brand-accent/30 shadow-neon flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
          <CheckCircle className="w-5 h-5 text-brand-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">
            {notification.name} garantiu sua vaga
          </p>
          <p className="text-xs text-muted-foreground">
            {notification.city} · {notification.time}
          </p>
        </div>
        <button onClick={() => setVisible(false)} className="text-muted-foreground hover:text-foreground shrink-0">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PurchaseNotification;
