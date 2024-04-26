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
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectItem, SelectValue } from "@/src/components/ui/select"
import { Separator } from '@/src/components/ui/separator'
import {useQuery} from "@tanstack/react-query";
import userService from "@/src/services/api/user";
import {Skeleton} from "@/src/components/ui/skeleton";
export default function Profile() {
  const { data: userInfo, isLoading } = useQuery({
    queryKey: ['customer'],
    queryFn: () => userService.getUserInfo(),
  })


  if(isLoading) {
    return <Skeleton className='h-10 w-60'></Skeleton>
  }

  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
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
            <div className={`flex gap-10`}>
              <Card className={`w-full border-[3px]`}>
                <CardHeader className={`rounded-t-sm bg-light_sky p-3`}>
                  <CardTitle className={`text-lg font-medium text-background_hero`}>Personal details</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-12">
                  <div className="w-full space-y-3 pt-5">
                    <div>
                      <Label htmlFor="name">First name</Label>
                      <Input id="name" value={userInfo.firstName}  onChange={()=>null}/>
                    </div>

                    <div className={`flex gap-3`}>
                      <div className={`w-full`}>
                        <Label htmlFor="name">Nationality</Label>
                        <Select>
                          <SelectTrigger className="text-dark_blue">
                            <SelectValue placeholder={userInfo.nationality} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="canadian">canadian</SelectItem>
                              <SelectItem value="kyrgyz">kyrgyz</SelectItem>
                              <SelectItem value="russian">russian</SelectItem>
                              <SelectItem value="kazakh">kazakh</SelectItem>
                              <SelectItem value="mongol">mongol</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className={`w-full`}>
                        <Label htmlFor="name">Gender</Label>
                        <Select>
                          <SelectTrigger className="text-dark_blue">
                            <SelectValue placeholder={userInfo.gender} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                      </div>
                    </div>

                    <div className={`w-full`}>
                      <Label htmlFor="name">Passport or ID number</Label>
                      <Input id="name" value={userInfo.passportId}  onChange={()=>null}/>
                    </div>

                    <div>
                      <Label htmlFor="name">Phone</Label>
                      <Input id="name" value={userInfo.phone} onChange={()=>null} />
                    </div>
                  </div>

                  <div className={`w-full space-y-3 pt-5`}>
                    <div>
                      <Label htmlFor="name">Last name</Label>
                      <Input id="name" value={userInfo.lastName} onChange={()=>null}/>
                    </div>

                    <div>
                      <Label htmlFor="name">Date of Birth</Label>
                      <div className={`flex`}>
                        <Input className={`rounded-r-none border-r-0 focus:border-none`} id="name" value="1" onChange={()=>null}/>
                        <Separator orientation={'vertical'} className={`h-[40px]`}/>
                        <Input className={`rounded-none border-x-0 focus:border-none`} id="name" value="Jun" onChange={()=>null}/>
                        <Separator orientation={'vertical'} className={`h-[40px]`}/>
                        <Input className={`rounded-l-none border-l-0 focus:border-none`} id="name" value={'1990'} onChange={()=>null}/>
                      </div>
                    </div>

                    <div className={`w-full`}>
                      <Label htmlFor="name">Passport or ID expiration date</Label>
                      <div className={`flex`}>
                        <Input className={`rounded-r-none border-r-0 focus:border-none`} id="name" value="14" onChange={()=>null}/>
                        <Separator orientation={'vertical'} className={`h-[40px]`}/>
                        <Input className={`rounded-none border-x-0 focus:border-none`} id="name" value="Feb" onChange={()=>null}/>
                        <Separator orientation={'vertical'} className={`h-[40px]`}/>
                        <Input className={`rounded-l-none border-l-0 focus:border-none`} id="name" value={'2024'} onChange={()=>null}/>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="name">Email</Label>
                      <Input id="name" value={userInfo.email} onChange={()=>null}/>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className={`pt-0`}>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>

              <Card className={`max-h-[300px] w-full border-[3px]`}>
                <CardHeader className={`rounded-t-sm bg-light_sky p-3`}>
                  <CardTitle className={`text-lg font-medium text-background_hero`}>Profile</CardTitle>
                </CardHeader>
                <CardContent className="flex py-6">
                  <div className={`w-1/4`}>
                    <img src={`/assets/icons/favicon.png`} className={`max-h-[130px] max-w-[130px]`} alt="profile image"/>
                  </div>
                  <div className={`flex w-1/2 items-center justify-center`}>
                    <p className={`text-xl font-medium`}>{userInfo.firstName} {userInfo.lastName}</p>
                  </div>
                  <div className={`flex w-1/3 flex-col items-center justify-center gap-4`}>
                    <Button>Upload photo</Button>
                    <Button>Remove photo</Button>
                  </div>
                </CardContent>
                <CardFooter className={`w-full p-0 px-7`}>
                  <Button className={`w-full border bg-transparent text-dark_blue`}>Delete account</Button>
                </CardFooter>
              </Card>
            </div>

            <div className={`mt-10`}>
              <Card className={`w-1/2 border-[3px]`}>
                <CardHeader className={`rounded-t-sm bg-light_sky p-3`}>
                  <CardTitle className={`text-lg font-medium text-background_hero`}>Currency & Language</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-12 pt-5">
                  <div className={`w-full`}>
                    <Label htmlFor="name">Currency</Label>
                    <Select>
                      <SelectTrigger className="text-dark_blue">
                        <SelectValue placeholder="$ (USD)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="$ (USD)">$ (USD)</SelectItem>
                          <SelectItem value="(EUR)">(EUR)</SelectItem>
                          <SelectItem value="(RUB)">(RUB)</SelectItem>
                          <SelectItem value="(KGZ)">(KGZ)</SelectItem>
                          <SelectItem value="(TL)">(TL)</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className={`w-full`}>
                    <Label htmlFor="name">Language</Label>
                    <Select>
                      <SelectTrigger className="text-dark_blue">
                        <SelectValue placeholder="English (US)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Russian">Russian</SelectItem>
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Kyrgyz">Kyrgyz</SelectItem>
                          <SelectItem value="Turkish">Turkish</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className={`pt-0`}>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="booking">
            <div className={`my-60 flex flex-col items-center justify-center gap-10`}>
              <Plane className={`size-20`}/>
              <p className={`text-xl`}>У вас пока нет забронированных рейсов!</p>
            </div>
          </TabsContent>
          <TabsContent value="flights">
            <div className={`my-60 flex flex-col items-center justify-center gap-10`}>
              <Trash2 className={`size-20`}/>
              <p className={`text-xl`}>History is empty!</p>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  )
}
