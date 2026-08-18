const stackColorMap: Record<string, string> = {
  Laravel: "bg-accent-angola/10 text-accent-angola border-accent-angola/30",
  React: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30",
  "Next.js 15": "bg-text-primary/10 text-text-primary border-text-primary/30",
  Angular: "bg-accent-angola/10 text-red-400 border-red-400/30",
  MySQL: "bg-gold/10 text-gold border-gold/30",
  TypeScript: "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
  JavaScript: "bg-gold/10 text-gold border-gold/30",
  AdonisJS: "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
  Bootstrap: "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
  Livewire: "bg-accent-angola/10 text-accent-angola border-accent-angola/30",
  Filament: "bg-gold/10 text-gold border-gold/30",
  "Tailwind CSS": "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30",
  "Framer Motion": "bg-green-ok/10 text-green-ok border-green-ok/30",
  "REST API": "bg-green-ok/10 text-green-ok border-green-ok/30",
  JWT: "bg-green-ok/10 text-green-ok border-green-ok/30",
};

export function getStackColor(tech: string): string {
  return stackColorMap[tech] ?? "bg-bg-muted text-text-muted border-bg-muted";
}
