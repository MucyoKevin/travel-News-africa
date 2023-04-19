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

export default function SharingButton(){
  return(
    <div>
      <FacebookShareButton url={''}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton url={''} media="">
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton url={''}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton url={''}>
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