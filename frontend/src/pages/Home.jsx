import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "@config/motion";
import state from "@store";
import CustomButton from "@components/Buttons/CustomButton";

function Home() {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET&apos;S <br className="xl:block hidden" />
                DO IT.
              </h1>
            </motion.div>

            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p className="max-w-md text-gray-600 font-normal text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatem, quidem.
              </p>
              <CustomButton
                type="filled"
                title="Custumize It"
                handleClick={() => {
                  state.intro = false;
                }}
                customStyles="w-fit px-4 py-1.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Home;
