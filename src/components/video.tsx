import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
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
          <DialogContent className="min-w-fit border-none bg-transparent p-10">
            <DialogHeader>
              <iframe
                title="Vimeo video player"
                src="https://player.vimeo.com/video/289286804?h=dd3682f033"
                width="640"
                height="335"
                allow="autoplay; fullscreen; picture-in-picture"
              ></iframe>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Video;
