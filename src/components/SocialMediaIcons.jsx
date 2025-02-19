const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-3  p-5 rounded-full">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/srinivas-therapati-783a04205/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png"  title="LinkedIn"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/srinivastherapati"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png"  title="Github"/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
