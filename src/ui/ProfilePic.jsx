import { motion } from "framer-motion";
import ProfilImage from "../asserts/profile-image.svg";

export default function ProfilePic() {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      src={ProfilImage}
      alt="Profile Image"
      className="animate-lower-bounce"
    />
  );
}
