import Link from "next/link"
import { getListData } from "@/libs/microcms"
import { Route } from "next"
import BlogCard from "@/Component/util/BlogCard";

export const fetchCache = 'default-no-store';

export default async function Right(){
    const {contents} = await getListData()
    
    return (
        <>
            <article className="grid grid-cols-2 gap-4">
                {contents.map((item) => {
                    return (
                        <div key={item.id}>
                            <BlogCard title={item.title} link={item.id} img={item.img}/>
                        </div>
                    )
                })}
            </article>
        </>
    )
}