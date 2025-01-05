import { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import Understandesg from "@/components/understandesg"

export const metadata: Metadata = {
  title: "ESG and Sustainability Goals",
  description: "Learn about Environmental, Social, and Governance (ESG) and sustainability goals",
}

export default function Page() {
  return (
    <>
      <div className="border-b">
                <div className="flex h-16 items-center px-4">
                  <MainNav className="mx-6" />
                  <div className="ml-auto flex items-center space-x-4">
                    <UserNav />
                  </div>
                </div>
              </div>
      <Understandesg />
    </>
  )
}

