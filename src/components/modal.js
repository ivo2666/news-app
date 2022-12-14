import { Box, Modal as MuiModal } from "@mui/material";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function Modal({ open, url, handleClose }) {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-around" width="100%">
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <PinterestShareButton url={url}>
            <PinterestIcon size={32} round={true} />
          </PinterestShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </Box>
      </Box>
    </MuiModal>
  );
}
