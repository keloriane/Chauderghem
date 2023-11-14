import React from "react";
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import gsap from "gsap";
import ReactHtmlParser from 'react-html-parser';
import Container from "./container";
import Col from "./common/Col/col";
import Image from "next/image";


export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  index
})
{
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = React.useRef(null);

  const toggleAccordion = () => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: 0, duration: 0.5 });
    } else {
      gsap.set(contentRef.current, { height: 'auto' });
      const height = (contentRef.current as HTMLElement).offsetHeight;
      gsap.from(contentRef.current, { height: 0, duration: 0.5 });
      gsap.to(contentRef.current, { height, duration: 0.5 });
    }
    setIsOpen(!isOpen);
  };

  return (
        <Col colStart={2} colEnd={26}>
          <div className={"pt-[30px] pb-[30px] border border-b-wine border-t-wine"}>
            <div onClick={toggleAccordion} className={"text-wine text-3xl flex justify-between"}>
              {title}
              <Link href={`/posts/${slug}`}>
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.55491 21.3989L17.4247 6.52911L17.4247 20.1893L20.8825 20.1771V0.627625H1.33307L1.33307 4.07321L14.981 4.08543L0.111229 18.9552L2.55491 21.3989Z" fill="#AA3946"/>
              </svg>
            </Link>

            </div>
            <Link
                href={`/posts/${slug}`}
                className="hover:underline"
            >
            <div ref={contentRef} style={{ overflow: 'hidden', height: 0 }}>
              <div style={{ padding: '10px' }}>{ReactHtmlParser(excerpt)}</div>
              <div className={'w-full h-[400px] bg-[center_center] bg-cover'} style={{backgroundImage: `url(${coverImage?.node.sourceUrl})`}}>

              </div>
            </div>
                </Link>
          </div>
        </Col>
  )
}
