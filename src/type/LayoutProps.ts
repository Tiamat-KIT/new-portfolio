type LayoutDirectories = "Left" | "Right" | "Modal" | "children" 
export type LayoutType = {
    [key in LayoutDirectories]: React.ReactNode
}