import { motion } from "framer-motion";
import { PillButtonProps } from "@/types/Types";

export const PillButton = (props: PillButtonProps) => {
  
  const redirectTo = (url : string) => {
    location.href = `/${url}`;
  };

  return (
    <motion.button
      onClick={() => redirectTo(props.redirectUrl)}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.95 }}
      className={`py-4 mr-2 text-xl font-bold text-center text-white rounded-full w-52 ${props.isInFooter ? "mt-2" : "mt-7"} bg-custom_highlight`}
    >
      {props.label}
    </motion.button>
  );
};

export default PillButton;
