"use client"
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { MyProfile } from "@/libs/microcms"
import parse from "html-react-parser"
import "../css/profile.css"

type Props = {
    ButtonText: string
    Default: JSX.Element,
    After: MyProfile
}
export default function ViTA(Props: Props){
    let TransitionBool: boolean = true
    const ClickEvent = () => {
    (document as any).startViewTransition(() => {
        TransitionBool = !TransitionBool
        document.getElementById("after")!.hidden = TransitionBool
        document.getElementById("default")!.hidden = !TransitionBool
        })
    }

    return (
        <>
            <button className="btn glass border-base-content text-base-content" onClick={ClickEvent}>{Props.ButtonText}</button>
            <div id="default">{Props.Default}</div>
            <article id="after" className="prose" hidden>
                {parse(Props.After.text)}
                <p>View Transition APIを使用しています</p>
            </article>
        </>
    )
}