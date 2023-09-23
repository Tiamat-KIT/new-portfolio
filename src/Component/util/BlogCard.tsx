import { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { MicroCMSImage } from "microcms-js-sdk";

/**
 * @param ブログ記事一覧のカード
 * @returns {JSX.Element}
 */

export default function BlogCard({
    title,
    link,
    img
}:{
    title:string,
    link:string,
    img: MicroCMSImage
}){
    return (
        <div className="card card-bordered image-full shadow-xl smph:(w-8 h-8)">
            <figure>
                <Image
                    alt={title}
                    src={img.url}
                    width={125}
                    height={125}
                 />
            </figure>
            <div className="card-body">
                <Link href={`Blog/${link}` as Route}>
                    <h2 className="card-title">{title}</h2>
                </Link>
            </div>
        </div>
    )
}