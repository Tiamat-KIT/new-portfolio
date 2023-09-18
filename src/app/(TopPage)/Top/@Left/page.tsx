import { getProfile } from "@/libs/microcms"
import ViTA from "@/Component/ViTA"
import { Suspense,lazy } from "react"

export default async function Left(){

    const {contents} = await getProfile()
    return (
        <>
            <ViTA
                ButtonText="泡沫君はどんな人？"
                Default={<p>詳しく知る</p>}
                After={contents[0]}
            />
        </>
    )
}