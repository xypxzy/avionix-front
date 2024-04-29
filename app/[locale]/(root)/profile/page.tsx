'use client'
import {Plane, Slash, Trash2} from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb"
import {Tabs, TabsContent, TabsTrigger, TabsList } from "@/src/components/ui/tabs"
import {Skeleton} from "@/src/components/ui/skeleton";
import {useUserStore} from "@/src/stores/user.store";
import {useEffect} from "react";
import {GeneralInfo} from "@/src/components/shared/UserAccount/GeneralInfo/GeneralInfo";
import {Booking} from "@/src/components/shared/UserAccount/Booking/Booking";
import {FlightHistory} from "@/src/components/shared/UserAccount/FlightHistory/FlightHistory";
export default function Profile() {
  const { fetchUser, isLoading, user} = useUserStore()

  useEffect(() => {
    fetchUser()
  }, []);

  if(isLoading) {
    return <Skeleton className='h-10 w-60'></Skeleton>
  }

  if(user) {
    return (
        <div>
          <div className={`my-4`}>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash/>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Account</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className={`w-full`}>
            <Tabs defaultValue="g-info" className="w-full">
              <TabsList className="grid w-[450px] grid-cols-3">
                <TabsTrigger value="g-info">General info</TabsTrigger>
                <TabsTrigger value="booking">Booking</TabsTrigger>
                <TabsTrigger value="flights">Flight history</TabsTrigger>
              </TabsList>
              <TabsContent value="g-info" className={`w-full`}>
                <GeneralInfo/>
              </TabsContent>
              <TabsContent value="booking">
                <Booking/>
              </TabsContent>
              <TabsContent value="flights">
                <FlightHistory/>
              </TabsContent>
            </Tabs>
          </div>
        </div>
    )
  }
}
