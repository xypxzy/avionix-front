'use client'
import {Slash} from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb"
import {Tabs, TabsContent, TabsTrigger, TabsList } from "@/src/components/ui/tabs"
import {useUserStore} from "@/src/stores/user.store";
import {GeneralInfo} from "@/src/components/shared/UserAccount/GeneralInfo/GeneralInfo";
import {Booking} from "@/src/components/shared/UserAccount/Booking/Booking";
import {FlightHistory} from "@/src/components/shared/UserAccount/FlightHistory/FlightHistory";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {useEffect} from "react";
import {useSession} from "next-auth/react";
import {ProfileSkeleton} from "@/src/components/shared/UserAccount/UserAccountSkeleton/Profile.skeleton";
export default function Profile() {
	const {isLoading, user, fetchUser} = useUserStore()
	const session = useSession()
	const t = useTranslations('userProfile')

	useEffect(() => {
		if (session.data?.user.accessToken){
			fetchUser(session.data?.user.accessToken)
		}
	}, []);

	if (isLoading) {
		return <ProfileSkeleton/>
	}

	if (!user) {
		return (
			<div className={`my-[30%] flex flex-col items-center justify-center gap-5`}>
				<div className={` text-center text-3xl`}>Отказано в доступе!</div>
				<div>
					<Link href={'/'} className={`rounded-xl bg-primary px-5 py-2 text-xl text-primary-foreground`}>На главную</Link>
				</div>
			</div>
		);
	}


	return (
		<>
			<div className={`my-4`}>
				<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink href="/">{t('breadCamp.home')}</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator>
									<Slash/>
								</BreadcrumbSeparator>
								<BreadcrumbItem>
									<BreadcrumbPage>{t('breadCamp.account')}</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
					<div className={`w-full`}>
						<Tabs defaultValue="g-info" className="w-full">
							<TabsList className="grid max-w-[500px] grid-cols-3">
								<TabsTrigger value="g-info">{t('nav.generalInfo')}</TabsTrigger>
								<TabsTrigger value="booking">{t('nav.booking')}</TabsTrigger>
								<TabsTrigger value="flights">{t('nav.flightHistory')}</TabsTrigger>
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
				</>
			)
		}


