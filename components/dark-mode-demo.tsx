import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BellIcon, CheckIcon, HomeIcon, MessageSquareIcon, SearchIcon, SettingsIcon, UserIcon } from "lucide-react"

export function DarkModeDemo() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-zinc-50">Dashboard Overview</CardTitle>
          <CardDescription className="text-zinc-400">View your account statistics and recent activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700">
                <div className="text-zinc-400 text-sm mb-1">Total Users</div>
                <div className="text-zinc-50 text-2xl font-bold">1,234</div>
                <div className="text-emerald-400 text-xs mt-2 flex items-center">
                  <CheckIcon className="h-3 w-3 mr-1" />
                  <span>+12% from last month</span>
                </div>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700">
                <div className="text-zinc-400 text-sm mb-1">Revenue</div>
                <div className="text-zinc-50 text-2xl font-bold">$12,345</div>
                <div className="text-emerald-400 text-xs mt-2 flex items-center">
                  <CheckIcon className="h-3 w-3 mr-1" />
                  <span>+8% from last month</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700">
              <div className="text-zinc-300 font-medium mb-2">Recent Activity</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <div className="text-zinc-300">New user registered</div>
                  <div className="text-zinc-500 ml-auto">2m ago</div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="text-zinc-300">Payment processed</div>
                  <div className="text-zinc-500 ml-auto">15m ago</div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="text-zinc-300">Server error detected</div>
                  <div className="text-zinc-500 ml-auto">1h ago</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-zinc-800 flex justify-between">
          <Button variant="ghost" className="text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800">
            View All
          </Button>
          <Button className="bg-emerald-900 text-emerald-300 hover:bg-emerald-800">Export Data</Button>
        </CardFooter>
      </Card>

      <div className="space-y-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-zinc-50">Account Settings</CardTitle>
            <CardDescription className="text-zinc-400">Manage your profile and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="bg-zinc-800 text-zinc-400">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-50"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-50"
                >
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-50"
                >
                  Security
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Display Name</label>
                  <Input className="bg-zinc-800 border-zinc-700 text-zinc-50" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Email Address</label>
                  <Input className="bg-zinc-800 border-zinc-700 text-zinc-50" placeholder="email@example.com" />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-zinc-50 font-medium">Navigation</h3>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800">
              <SettingsIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-zinc-50 bg-zinc-800">
              <HomeIcon className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800">
              <UserIcon className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800">
              <MessageSquareIcon className="h-4 w-4 mr-2" />
              Messages
            </Button>
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800">
              <BellIcon className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input className="bg-zinc-800 border-zinc-700 text-zinc-50 pl-9" placeholder="Search..." />
          </div>
        </div>
      </div>
    </div>
  )
}
