import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link as ChakraLink } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: chabashvilinodar@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/nchabashvili",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/nodar-chabashvili/",
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollPos = useRef(window.scrollY);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const scrollingDown = currentScrollPos > prevScrollPos.current;

    setIsVisible(!scrollingDown);
    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${isVisible ? "0" : "-200px"})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <ChakraLink
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </ChakraLink>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <ChakraLink href="/#projects" onClick={handleClick("projects")}>
                Projects
              </ChakraLink>
              <ChakraLink
                href="/#contact-me"
                onClick={handleClick("contactme")}
              >
                Contact Me
              </ChakraLink>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;