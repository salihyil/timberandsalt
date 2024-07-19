import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Play from "../../public/video/play";

type Props = {};

const Video = (props: Props) => {
  return (
    <div className="relative min-h-[687px] max-2xl:min-h-[550px]">
      <Image
        src={"/video/bg-img.jpg"}
        className="object-cover"
        fill
        alt="bg-img"
      />
      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
        <Dialog>
          <DialogTrigger>
            <Play />
          </DialogTrigger>
          <DialogContent className="h-1/2 w-full border-none bg-transparent">
            <iframe
              className="h-full w-full"
              title="Vimeo video player"
              src="https://player.vimeo.com/video/289286804?h=dd3682f033"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Video;
