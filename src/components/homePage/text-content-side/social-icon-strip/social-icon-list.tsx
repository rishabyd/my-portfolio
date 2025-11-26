import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import SocialIconButton from "./social-icon-button";

export default function SocialIconList() {
  return (
    <div className=" w-full flex my-6 lg:my-14 justify-center md:justify-normal lg:gap-2 gap-3 h-full">
      <SocialIconButton
        href="https://github.com/rishabyd"
        icon={<BsGithub />}
        text="Github"
      />
      <SocialIconButton
        href="https://www.linkedin.com/in/rishabyd"
        icon={<BsLinkedin />}
        text="Linkedin"
      />
      <SocialIconButton
        href="https://x.com/rishabyd"
        icon={<BsTwitterX />}
        text="Twitter"
      />
      <SocialIconButton
        href="mailto:hello@rishabyd.com?subject=New%20Website%20/ %20Web%20App%20Project%20Inquiry&body=Hello,%0D%0A%0D%0AI'm%20reaching%20out%20from%20your%20website%20to%20discuss%20a%20potential%20project.%0D%0A%0D%0AHere%20are%20some%20initial%20details%20about%20what%20I'm%20looking%20for:%0D%0A%0D%0A1.%20Type%20of%20project:%0D%0A2.%20Brief%20description:%0D%0A3.%20Any%20specific%20features%20or%20technologies%20in%20mind:%0D%0A%0D%0AThank%20you!"
        icon={<FiMail />}
        text="Mail"
      />
    </div>
  );
}
