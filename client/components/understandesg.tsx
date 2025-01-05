import { Leaf, Users, Building2, Target, Recycle, Droplet, Sun, Wind } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Understandesg() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">ESG and Sustainability Goals</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is ESG?</h2>
        <p className="text-lg mb-6">
          ESG stands for Environmental, Social, and Governance. It's a framework used to assess an organization's impact on the world and its stakeholders, beyond traditional financial metrics.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ESGCard
            title="Environmental"
            description="Focuses on a company's impact on the planet"
            icon={<Leaf className="h-6 w-6" />}
          />
          <ESGCard
            title="Social"
            description="Examines how a company manages relationships with its stakeholders"
            icon={<Users className="h-6 w-6" />}
          />
          <ESGCard
            title="Governance"
            description="Deals with a company's leadership, internal controls, and shareholder rights"
            icon={<Building2 className="h-6 w-6" />}
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sustainability Goals</h2>
        <p className="text-lg mb-6">
          Sustainability goals are targets set by organizations to improve their environmental and social impact. These goals often align with the United Nations Sustainable Development Goals (SDGs).
        </p>
        <SustainabilityGoalsTabs />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Why ESG and Sustainability Matter</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Mitigate risks and identify opportunities</li>
          <li>Attract and retain talent</li>
          <li>Enhance brand reputation and customer loyalty</li>
          <li>Drive innovation and efficiency</li>
          <li>Contribute to a more sustainable and equitable world</li>
        </ul>
      </section>
    </div>
  )
}

function ESGCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function SustainabilityGoalsTabs() {
  return (
    <Tabs defaultValue="environmental">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="environmental">Environmental</TabsTrigger>
        <TabsTrigger value="social">Social</TabsTrigger>
        <TabsTrigger value="economic">Economic</TabsTrigger>
      </TabsList>
      <TabsContent value="environmental">
        <Card>
          <CardHeader>
            <CardTitle>Environmental Goals</CardTitle>
            <CardDescription>Targets aimed at reducing environmental impact and promoting sustainability.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Recycle className="h-5 w-5 text-green-600" />
                <span>Reduce waste and increase recycling</span>
              </li>
              <li className="flex items-center gap-2">
                <Droplet className="h-5 w-5 text-blue-600" />
                <span>Improve water management and conservation</span>
              </li>
              <li className="flex items-center gap-2">
                <Sun className="h-5 w-5 text-yellow-600" />
                <span>Increase use of renewable energy sources</span>
              </li>
              <li className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-teal-600" />
                <span>Reduce carbon emissions and combat climate change</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="social">
        <Card>
          <CardHeader>
            <CardTitle>Social Goals</CardTitle>
            <CardDescription>Objectives focused on improving social conditions and equity.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Promote diversity and inclusion in the workplace</li>
              <li>Ensure fair labor practices and human rights</li>
              <li>Invest in employee development and well-being</li>
              <li>Support local communities and engage in philanthropy</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="economic">
        <Card>
          <CardHeader>
            <CardTitle>Economic Goals</CardTitle>
            <CardDescription>Targets aimed at sustainable economic growth and responsible business practices.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Implement ethical business practices and transparency</li>
              <li>Develop sustainable supply chains</li>
              <li>Invest in innovation and sustainable technologies</li>
              <li>Promote long-term value creation for all stakeholders</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

