type LayoutDirectories = "Left" | "Right" | "Modal" | "children" 
type LayoutType = {
    [key in LayoutDirectories]: React.ReactNode
}

export default LayoutType