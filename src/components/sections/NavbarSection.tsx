import Image from "next/image";
import navLogo from "@/public/assets/nav-logo.png";
import { SectionShell } from "@/src/components/ui/SectionShell";

export function NavbarSection() {
  return (
    <SectionShell pt={{ base: 16, md: 40 }} pb={0}>
      <Image src={navLogo} alt="Shofik Hasan" priority />
    </SectionShell>
  );
}
