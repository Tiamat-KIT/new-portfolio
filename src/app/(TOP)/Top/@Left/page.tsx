import { getProfile } from "@/libs/microcms"

import { Suspense,lazy } from "react"
export default async function Left(){

    const {contents} = await getProfile()
    const VisionTransitonComponent = lazy(() => import("../../../../Component/ViTA.js"))
    return (
        <>
            <Suspense>
                <VisionTransitonComponent
                    ButtonText="泡沫君はどんな人？"
                    Default={<p>詳しく知る</p>}
                    After={contents[0]}
                />
            </Suspense>
        </>
    )
}