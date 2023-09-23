type LayoutProps = {
    children: React.ReactNode,
}

export default function Layout(props:LayoutProps){
    return (
        <>
            <div className="containter mx-auto px-5 place-content-center">
                <div>{props.children}</div>
            </div>
            
        </>
    )
}
