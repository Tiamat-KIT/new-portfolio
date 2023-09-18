import { getProfile } from "@/libs/microcms"
import { Suspense,lazy } from "react"

export default async function Left(){
    const {contents} = await getProfile()
    const ViTA = lazy(() => import("@/Component/util/ViTA.jsx"))
    return (
        <>
            <Suspense>
                <ViTA
                    ButtonText="泡沫君はどんな人？"
                    Default={<p>詳しく知る</p>}
                    After={contents[0]}
                />
            </Suspense>
        </>
    )
}