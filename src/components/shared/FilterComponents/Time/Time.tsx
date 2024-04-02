import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import {GoThere} from "@/src/components/shared/FilterComponents/Time/GoThere/GoThere";
import {GoBack} from "@/src/components/shared/FilterComponents/Time/GoBack/GoBack";
import {
    AccordionContent,
    AccordionDefault,
    AccordionItem,
    AccordionTrigger
} from "@/src/components/ui/accordionDefault";
export const Time = () => {
    return(
        <AccordionDefault type="single" collapsible className='flex flex-col gap-6'>
            <AccordionItem value='item-1' className={`border-0`}>
                <AccordionTrigger
                    className={`border-0 text-black`}>
                    <p className={`text-base font-bold`}>Время</p>
                </AccordionTrigger>
                <AccordionContent className={`flex flex-col gap-2`}>
                    <Tabs defaultValue="account"  className="w-full gap-20">
                        <TabsList className={`flex border-none `}>
                            <TabsTrigger className={`w-1/2 text-base font-normal data-[state=active]:rounded-none data-[state=active]:border-b data-[state=active]:bg-transparent data-[state=active]:text-foreground`} value="account">Туда</TabsTrigger>
                            <TabsTrigger className={`w-1/2 text-base font-normal data-[state=active]:rounded-none data-[state=active]:border-b data-[state=active]:bg-transparent data-[state=active]:text-foreground`} value="password">Обратно</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <GoThere/>
                        </TabsContent>
                        <TabsContent value="password">
                            <GoBack/>
                        </TabsContent>
                    </Tabs>
                </AccordionContent>
            </AccordionItem>
        </AccordionDefault>
    )
}