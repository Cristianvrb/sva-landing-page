const platforms = [
  { name: "Hotmart", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Hotmart_logo.svg" },
  { name: "Kiwify", url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Kiwify_logo_horizontal.svg" },
  { name: "Monetizze", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Monetizze_Logo.svg/512px-Monetizze_Logo.svg.png" },
  { name: "Eduzz", url: "https://s3.amazonaws.com/gupy5/production/companies/41814/emails/1654631627050/76ea2880-e696-11ec-b236-03fbd2dce1cf/eduzz_logo.png" },
  { name: "Braip", url: "https://ev.braip.com/assets/images/logo.svg" },
];

const SocialProof = () => {
  // Array duplicado para criar o efeito infinito sem quebras
  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms, ...platforms];

  return (
    <section className="py-12 relative overflow-hidden z-20">
      <div className="section-container">
        <div className="text-center mb-6">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium">Nosso sistema funciona com as maiores plataformas</p>
        </div>

        {/* Glass Container */}
        <div className="relative mx-auto max-w-5xl glass-card rounded-2xl py-6 px-4 overflow-hidden shadow-[0_0_40px_hsl(var(--brand-accent)/0.1)]">
          
          {/* Fades nas laterais para suavizar entrada e saída */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-brand-surface/90 to-transparent z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-brand-surface/90 to-transparent z-10" />

          {/* Marquee Trick */}
          <div className="flex items-center gap-16 w-max animate-scrolling-logos">
            {duplicatedPlatforms.map((platform, i) => (
              <div key={`${platform.name}-${i}`} className="flex items-center justify-center shrink-0 w-32 h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110 drop-shadow-lg">
                <img 
                  src={platform.url} 
                  alt={`Logo ${platform.name}`} 
                  className="max-h-10 max-w-full object-contain filter brightness-200 contrast-100 hover:brightness-100"
                  onError={(e) => {
                    // Fallback to stylized text if image link breaks
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden font-tech text-xl font-bold tracking-tight text-white">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
