type LayoutDirectories = "Left" | "Right" | "children" 
type LayoutType = {
    [key in LayoutDirectories]: React.ReactNode
}

export default LayoutType