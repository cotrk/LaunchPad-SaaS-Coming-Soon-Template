import type { Metadata } from "next"
import ComingSoon from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Coming Soon | Your SaaS Product",
  description: "Sign up to be notified when we launch our SaaS product.",
}

export default function Home() {
  return <ComingSoon />
}

