import Logo from "../Logo/Logo1";
import Search from "../Search/Search1";
import Button from "../Button/Button1";
import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";
import styles from "./navbar2.module.css";

const Navbar = ({ data, page, songsData }) => {
  const [isFeedbackClicked, setIsFeedbackClicked] = useState(false);

  const handleClick = () => {
    setIsFeedbackClicked(!isFeedbackClicked);
  };

  useEffect(() => {
    let feedback = document.getElementById("feedback");
    let body = document.body;
    if (isFeedbackClicked) {
      body.style.overflowY = "hidden";
      feedback?.classList.add("feedbackClicked");
    } else {
      body.style.overflowY = "auto";
      feedback?.classList.remove("feedbackClicked");
    }
  }, [isFeedbackClicked]);

  return (
    <>
      {isFeedbackClicked && (
        <Feedback onClose={() => setIsFeedbackClicked(false)} />
      )}
      <nav className={styles.nav}>
        <Logo />
        <Search data={page === "home" ? data : songsData} page={page} />
        <Button
          text="GIVE FEEDBACK"
          eventHandler={{ event: "onClick", handler: handleClick }}
        />
      </nav>
    </>
  );
};

export default Navbar;
