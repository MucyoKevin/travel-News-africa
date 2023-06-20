// @ts-nocheck

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from "next-share";

export default function SharingButton({href}){
  return(
    <div>
      <FacebookShareButton url={href}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton url={''} media="">
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton url={''}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton url={'https://travel-news-africa.vercel.app/'}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={''}>
        <LinkedinIcon size={32} round/>
      </LinkedinShareButton>
      <TwitterShareButton url={''}>
        <TwitterIcon size={32} round/>
      </TwitterShareButton>
    </div>
  )
}