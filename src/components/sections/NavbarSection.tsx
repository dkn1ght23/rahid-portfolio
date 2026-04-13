import nav_log from "@/public/assets/nav_log.png"
import { SectionShell } from "@/src/components/ui/section-shell";
import Image from "next/image";

export function NavbarSection() {
  return (
    <SectionShell
      pt={{ base: 16, md: 40 }}
      pb={0}
    >
      <Image src={nav_log} alt="Logo"  />
    </SectionShell>
  );
}
