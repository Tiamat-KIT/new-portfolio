import Link from "next/link"
import Image from "next/image"
import { getListData } from "@/libs/microcms"

export default async function Right(){
    const {contents} = await getListData()
    
    return (
        <>
            <article>
                {contents.map((item) => {
                    return (
                        <>
                            <div className="card w-50 bg-base-100 shadow-xl glass" key={item.id}>
                                <figure>
                                    <Image 
                                        src={item.img.url} 
                                        height={item.img.height as number / 2 }
                                        width={item.img.width as number / 2 }
                                        alt={item.title}
                                    />
                                </figure>
                                <div className="card-body">
                                    <Link className="card-title" href={`Blog/${item.id}`}>{item.title}</Link>
                                </div>
                            </div>
                        </>
                    )
                })}
            </article>
        </>
    )
}