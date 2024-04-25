import { Button } from "@/src/components/ui/button";
import { StarRating } from "@/src/components/shared/StarRatingClick/StarRating";
import { useLocale, useTranslations } from "next-intl";
import React, {useState} from "react";
import clientService from "@/src/services/api/client-host";
import {Skeleton} from "@/src/components/ui/skeleton";

export const SendComment = () => {
    const t = useTranslations('Footer')
    const locale:string = useLocale()
    const [grade, setGrade] = useState<number>(0);
    const [commentText, setCommentText] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)
    const lan:string = locale.toUpperCase()
    const accessToken: string = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBdmlvbml4Iiwic3ViIjoiQUNDRVNTX1RPS0VOIiwidXNlcm5hbWUiOiIyMDA0LjAxMDM1QG1hbmFzLmVkdS5rZyIsImF1dGhvcml0aWVzIjoiUk9MRV9DTElFTlQiLCJpYXQiOjE3MTQwNDU4MTEsImV4cCI6MTcxNDA0OTQxMX0.oUCSUDhj8IAyO2LP1o_AECthZuFM0ddiUV68bwPcni0';
    const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            description: commentText, grade, lan
        }
        if (accessToken) {
            setIsLoading(true)
            const res = await clientService.createComment(data, accessToken)
            console.log(res)
            setIsLoading(false)
            setCommentText('')
        }
    }

    return (
        <form onSubmit={handleSend} className={`flex flex-col gap-2 border-b border-b-background_hero pb-2`}>
            <textarea cols={30} rows={4} className={`rounded-xl p-2 text-dark_blue`} value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder={t('comment.input_placeholder')} />
            {
                isLoading ? <Skeleton className={`h-10 w-full`}/>
                    :
                    <Button type={`submit`} disabled={!commentText.trim() || !grade} className={`bg-light_blue`}>
                    {t('comment.button')}
                    </Button>
            }
            <StarRating setRating={setGrade} rating={grade} />
        </form>
    )
}
