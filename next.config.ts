import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Libera abrir o `next dev` pelo IP da rede local (ex.: no celular); sem isso o JS não carrega e nada fica interativo.
  allowedDevOrigins: ["192.168.1.*"],
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
