import { useRef, useState } from "react";
import { uploadFiles } from "../../../http/api";

interface IProps {
  profile: string | null;
  setProfile: any;
  name: string;
}

export default function ImageField({ profile, setProfile, name }: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState<string>(
    profile
      ? profile
      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[175px] h-[175px] border-1 border-secondary rounded-full overflow-hidden cursor-pointer">
        <img
          src={show}
          alt="image"
          className="w-full h-full object-cover"
          onClick={() => inputRef?.current?.click()}
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={inputRef}
          onChange={async (e) => {
            const file = e?.target?.files && e?.target?.files[0];
            if (!file) return;
            setShow("/spinner.gif");
            const formData = new FormData();
            formData.append("file", file);
            const res = await uploadFiles(formData);
            setShow(res.data.url);
            setProfile(name, res.data.url);
          }}
        />
      </div>
    </div>
  );
}
