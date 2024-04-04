import {Tabs, TabsList, TabsTrigger} from "@/src/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select"
export const BestPrices = () => {
    return (
        <div className={`w-full rounded-xs border bg-white p-0`}>
            <Tabs defaultValue="account"  className="size-full">
                <TabsList className={`grid h-full grid-cols-1 items-center justify-center gap-4 border-none p-0 px-2 sm:grid-cols-2 md:grid-cols-4 lg:gap-2`}>
                    <TabsTrigger
                        className={`mx-auto h-full max-w-[200px] rounded-none p-0 py-4 text-base font-normal data-[state=active]:border-b data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none`}
                        value="bestVariant">
                        <div className={`flex w-full flex-col`}>
                            <p className={`text-sm font-normal`}>Лучший вариант</p>
                            <p className={`text-xs font-normal`}>70.000сом, 10ч.10м.</p>
                        </div>
                    </TabsTrigger>
                    <TabsTrigger
                        className={`mx-auto h-full max-w-[200px] rounded-none p-0 text-base font-normal data-[state=active]:border-b data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none`}
                        value="cheapestVariant">
                        <div className={`flex w-full flex-col`}>
                            <p className={`text-sm font-normal`}>Самый дешевый</p>
                            <p className={`text-xs font-normal`}>70.000сом, 10ч.10м.</p>
                        </div>
                    </TabsTrigger>
                    <TabsTrigger
                        className={`mx-auto h-full max-w-[200px] rounded-none p-0 text-base font-normal data-[state=active]:border-b data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none`}
                        value="fastestVariant">
                        <div className={`flex w-full flex-col`}>
                            <p className={`text-sm font-normal`}>Самые быстрый</p>
                            <p className={`text-xs font-normal`}>70.000сом, 10ч.10м.</p>
                        </div>
                    </TabsTrigger>
                    <TabsTrigger className={`mx-auto h-full max-w-[215px] rounded-none p-0 text-base font-normal data-[state=active]:border-b data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none`} value="otherVariant">
                        <div className={`flex w-full flex-col`}>
                            <Select>
                                <SelectTrigger className="size-full border-none bg-transparent p-0 px-2 text-foreground transition-all duration-500 hover:bg-slate-300">
                                    <SelectValue placeholder="Другие варианты" className={`bg-white text-foreground`}/>
                                </SelectTrigger>
                                <SelectContent className={`bg-white`}>
                                    <SelectItem value="sd">Самый надежный</SelectItem>
                                    <SelectItem value="dark">Самый маленький</SelectItem>
                                    <SelectItem value="system">Самый долгий</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className={`text-xs font-normal`}>Самое раннее отправление</p>
                        </div>
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}