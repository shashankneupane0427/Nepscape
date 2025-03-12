"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiPhp,
  SiGooglecloud,
  SiDigitalocean,
} from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaDocker,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiPostgresql,
} from "react-icons/si";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const WebsiteDevelopment = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "100+", label: "Satisfied Clients" },
    { number: "10+", label: "Team Members" },
  ];

  const features = [
    {
      title: "Satisfaction Guarantee",
      description:
        "Elevate online presence with website development expertise.",
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM20 34L10 24L13.414 20.586L20 27.172L34.586 12.586L38 16L20 34Z"
            fill="#7d2fd0"
          />
        </svg>
      ),
    },
    {
      title: "Best Quality work",
      description:
        "Excellence and innovation define our development solutions.",
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4L30.31 16.76L44 19.48L34 29.24L36.52 43.02L24 36.56L11.48 43.02L14 29.24L4 19.48L17.69 16.76L24 4Z"
            fill="#7d2fd0"
          />
        </svg>
      ),
    },
    {
      title: "Interactive Interface",
      description:
        "Create an engaging interface for an optimal user experience.",
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="8" width="40" height="28" rx="2" fill="#7d2fd0" />
          <path
            d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V14H4V10Z"
            fill="#2E7D32"
          />
          <circle cx="8" cy="11" r="1.5" fill="white" />
          <circle cx="12" cy="11" r="1.5" fill="white" />
          <circle cx="16" cy="11" r="1.5" fill="white" />
          <rect x="8" y="18" width="32" height="2" rx="1" fill="white" />
          <rect x="8" y="22" width="20" height="2" rx="1" fill="white" />
          <rect x="8" y="26" width="24" height="2" rx="1" fill="white" />
          <rect x="8" y="30" width="16" height="2" rx="1" fill="white" />
        </svg>
      ),
    },
  ];

  const services = [
    {
      title: "E-Commerce",
      description:
        "We redefine the online shopping experience through innovative e-commerce website development solutions with over a decade of experience in website development.",
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55 20H25C22 20 20 22 20 25V55C20 58 22 60 25 60H55C58 60 60 58 60 55V25C60 22 58 20 55 20Z"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 20V16C35 14 37 12 39 12H41C43 12 45 14 45 16V20"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 32H60"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 44H45"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Travel And Trekking",
      description:
        "We highly value experience over anything else. Therefore, we provide you with the best travel and trekking website development services.",
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 12L16 32H22V52H36V40H44V52H58V32H64L40 12Z"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 32H50"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "E-Learning",
      description:
        "We specialize in empowering education through digital solutions. Here, we are dedicated to developing innovative e-learning websites to seamlessly merge technology and education.",
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 16L12 28L40 40L68 28L40 16Z"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 34V50L40 58L56 50V34"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 28V44"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Informative And Others",
      description:
        "We specialize in empowering content creation through our tailored digital solutions. We are not limited by the domain-restricted categories. We do your trusted partner for custom website design and development in Nepal.",
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="16"
            width="60"
            height="48"
            rx="3"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <path d="M10 26H70" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M20 40H60" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M20 50H50" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="15" cy="21" r="2" fill="#7d2fd0" />
          <circle cx="22" cy="21" r="2" fill="#7d2fd0" />
          <circle cx="29" cy="21" r="2" fill="#7d2fd0" />
        </svg>
      ),
    },
  ];

  const technologies = {
    frontend: [
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDRAPDxAQDw8PDw4NDQ8NDxAODxAPFhEWFxURFRUYHSggGBolGxUTITEhJiksLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0lICUuLS0tLS0tLi0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMMBAgMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQcEBQYDAv/EAEUQAAEDAgAHCwgHCAMAAAAAAAABAgMEEQUGEjFRUpETFiFTcYGSk6LB0QcUQVRhoaPSFSIjMkLC4SRDYmNksbLiM0Ry/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAUGAQMEAv/EADQRAQABAgIIBQQCAQQDAAAAAAABAgMEEQUUITFRUmGREhMVcaEiMkGBI/DRM2Kx4SRCwf/aAAwDAQACEQMRAD8AvEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYtfXMgajn3sq5PBbPZV9K6EU8V1xRGcvdu3VcnKlr2YyQKl0bKqeyO/eaoxNEumcDdjg+t8MOpN1a+I1il51O507m+GHUm6v9RrFPU1O507m+GHUm6v9TOsU9WdSudO5vgh1Jur/UxrFPU1K507m+CHUm6v9RrFJqdzjHc3wRak3VqNYp4Gp3OMdzfBFqTdWpnWKOEmp3OMdzfBFqTdWo1inhJqdzjHc3wQ6k3Vr4jWKepqdzjHc3wQ6k3Vr4jWKepqdzjHc3ww6k3Vr4jWKepqdzjHc3ww6k3Vr4jWKerGp3Onc3ww6k3Vr4mNZp4SzGCuTw7ppsYIJJEiblo9VRLOajeFeczTiKKqvDDFzB3aKfFMbG2Q3uVIAAAAAAAAAAAAAAAAAA5rH5P2BV1ZYl2qrfzHHj/9FJaJy1mP2rdkz0Tgc5ORyoQkVTxWmbdE7ck+cP139Jxnx1cZPLp4R2R5w/Xf03Dx1cZPLo4QnzmTXf03GfHVxljyqOWEecya7+m4x46uMnlUcsHnEmu/puHjq4yeXRwhPnEmu/puHjq4yz5dHCOx5zJrv6bh46uMnl0cI7HnMmu/puHjq4yeXRwjsjziTXf03Dx1c0nl0cI7J84k139Nw8dXGTy6OEdkLUv139N3iPHVxk8ujhHY84frv6TvEeOrjLPl0cI7G7v139Jw8dXFibdHCGyxUu7CVNdVX67lW6quaNym/B5zeiXHpLKnC1bFtIT6oJAAAAAAAAAAAAAAAAAAGhx3ZfB03sWJ2yRpy4yM7Mu7Rs5Ymn9qsQgFwl7UsCySMjRURZHsjRVzIrlREVdp7op8VUQ13bkW6Jqn8Ol3iz8bD2/lO/06viiPXLXLPwneJUcbB2/lHp1fE9btcs/BvEqONg7fyj06viet2uWfg3iVHGw9vwHp1fE9btcs/BvEqONh7fgPTq+J63a5Z+DeJUcbD2/AenV8T1u1yz8G8So42Ht+A9Or4nrdrln4N4lRxsPb+UenV8T1u1yz8G8Wo42Ht/KPTq+J63a5Z+HyuIs/Gw9v5TE6Or4s+t2+WfhqsN4DfR5GW9j90ykTIyuDJtnuntQ572GmzlnLtwmPpxMz4YnY1Rzu7JvMRmXwlF/C2V3YVPzHXgYzvI3TE5YX9wtRCdVJIAAAAAAAAAAAAAAAAAA1ONTL4PqfZE52zh7jRiv9Kr2dWBnLEUe6pLld/C7PahfkzRO1ZY3bHIp7tzlXHvDTiKc7VUdJW25eFSzfhRckAAAABcBcCLgLgDEjicf3/aU7dDZV2q3wIrSU/VELFoOPprn2/wDrlLkYn3TeTtl69y6tPIu17EJDR0fyTPRDabqys0x1WYhMqukAAAAAAAAAAAAAAAAAAYOG48qkqG6YJU7Cmq9GduYbsPPhu0z1hTRW/wAL2m9uHRwmYnKYeK4zpmFwXvw6UuWenbCh1bJmOoZeQBcBcAAAAAAHBY9v/aY00Qou17vAhtIT9cQs2hI/iqnq5oj0467yZsvUVDtELG9J/wDqSejo21SgdOz9FEdZWKhLK2kAAAAAAAAAAAAAAAAAAeVU3Kjemlrk2oea/tl6onKqFINzJyIVjcv0TnGaQStuiflQxO1oo3bWoWa3OdMKHejKuY6y9j21viX7q2zoiqhiZyhmnfEOF3+P9W+KvykdOPnbGSwRoOJjPxm/x/q3xV+Uxr/Rn0L/AH/Bv8f6t8VflGv9D0L/AH/Bv8f6snWr8o1/oehRz/AmPj/Vvi/6jX+h6FHP8G/x3q3xV+Ua/wBD0KOf4QuPb1/63xV+Ua/0PQo5/hpsKYTdVS7q5mR9VrMnKysyrw3smk4cRd8yrNK4PCxh7fgic2GaHW7fyYM4ap3sganxP0JXRsbJlXdPTtoj3d8SavgAAAAAAAAAAAAAAAAAAh2YxO4UjOzJe9uq9zdiqhWa4+qY6r7anO3TPR5oeWxamA3Xo6df5ESbGoncWPDznap9lHxkZX646s03OYVDFW5mN6nKpMmR7dV727HKhW64yrlfrM526Z6PO54bcgGQAuP2Az6sZJQxmZS+0zGWADv/ACYs+wqHaZmt2Rov5iX0d9k+6sadn+amOjtiRQgAAAAAAAAAAAAAAAAAAIUCmMLsyaqoTRPN/mpWrsZXKo6yvOEnOxRPSGIeHQs3Fd96CD2Nc3Y9ydxYMJOdmFL0hTliKvdtDocQBhuwNROVVdSwq5VVzlVjVVVXOpqmxbz3OiMXfiMormEfQlD6pD1bTGr2uVnXMRzyfQlD6rD1bRq9rlg1zEc8n0LReqQdW0ava5TXMRzyfQtD6pD1bRq9rlg1zEc8n0NQ+qw9W0ava5YNcxHPKHYHo/VYeraIw9vlg1zEc8q5w4xrauZrGoxjZFa1rUs1LIicCbSCxERFyYiFuwMzNimapzlgKaXUsfyaMtRPXWqHrsYxO4m8BH8Waq6anPE/qHXHciAAAAAAAAAAAAAAAAAAAQoFQYztthCpT+aq7URe8r2JjK9Uumjpzw1Hs1hodqxsTX3oI/4XSp21XvJ3Az/DCoaVjLEz+v8AhurnWjU3Ai4EgQqgLgQAAhxgVVhR+VUzrpnm/wA1K5e21z7r1hafDZpjpDEU1uhaHk8ZbBsa60k6/EcncTuBjKzCn6WqzxVX6dKdaNAAAAAAAAAAAAAAAAAABCgVPjoy2Ep/bubvht8CBxsZXpXDRM54Wn9tKcqRh3eI837I5q+iZ/va1e8mdHz/AB5dVU0xTPnxMcHR5SHeicpMpAzlJlAykyhmxlJlAykyhnAlFuAAhxidxG9Uc7sp7naz3O2qqlbrnOqfdfrUZW6Y6Q83Hhs4LZxJZk4Mp/a1z+k9y95YcLGVqlStIznia/dvDe4gAAAAAAAAAAAAAAAAAAQoFX4/tthBV1oYl/yTuITHx/L+lq0LP/j5cJc6cSWfD3PT7r3N/wDLlb/Y2U1zTshiaKattVL43abjZOm7xPXmz/ZY8m3yx2Ru83GydN3iPNn+yeTRyx2fbZZV/eydN3iY8yf7J5NHLHZO6S8bJ03eI8yf7J5VvljsbrLxsnTd4mPNn+yz5VvljsOll42Tpu8R5ssTat8sdlt0DMmCFq8KpExFVc98lLlit/ZCjXpzuTPV7npqedQ6zVXQirsQ81zlTL3bjOuI6qibmTkQrU75X6IyhDsxhn8rixXZk4PpU/p4VXlViKWOzGVuIUXGTnfrnrLaG1zgAAAAAAAAAAAAAAAAAAAVv5SGWrIna0CJse7xIfSMZV0z0WbQc/xVR1cqR6bdPiRRQyun3aJkuSkWTujUda6uvbYhIYG3TXn4oQemL1y34PBVMb3VLgSh9Ug6tpJata5Y7ITXsTzz3lC4CoPVIOraJw9rlNexPPPdxuOeCUila6GHIhWNMpYmLuaORVvdUzLaxG42z4ao8MbE9onGeOiYuVbc/wAuba7nI+U2lXAfdNTSTOyI2PkcvAqMarrctsyHu3bqqmMoaL96i1TM1TkuFUtZNCWLJTuhRapzmZQZeWHhd+TTTO0Qyr2FNd6crcy3YeM7tMdVV2K4vj4lX6qghduCo8mnhbqxRN2MQstH2woN2c66p6yyj01gAAAAAAAAAAAAAAAAAAAV/wCU1n2tM7SyVuxzV7yK0jG2lYtBVbK49nGkYn3U4gv+2mbpiaux1u8kdHT9UoLTdP0Uz1dqS6tgH016pyAa6uwDRz3WSFrXL+OP7N3OqZ+c0XMNbr3w67OOxFr7atnViUeKFDEt3NfOt7purrtTmSyLzmunBWqXRd0tibmzPL2buJGsajY2NY1MzWNRqJzIdMU007oR1VdVU51Tn7iqenlAGsxkdain9sTm9Lg7zRiZytVezrwFPixFEdVZqV5d3nK26W08B6pj6oeapypn2XpE2yImhEQssblAne+zLAAAAAAAAAAAAAAAAAAAAHD+U5n1KZ2h8jdqIvcRmkt0SndBT9dcdHCkUskt/iXUNZV2ctt0jcxt/S7KaqJ7lO3A1RFzaiNL0TVZ2fiXfI4m1VSMwAAAAABcGbRY4VDW0b2qvC9WNamlctFX3IpyY2qItTCS0VbmrE0zH4V6pBLe+6VmVPC3Wmibte1DZa++n3ar85Wq56Su9CyKGkAAAAAAAAAAAAAAAAAAAAHHeUpl6WJ2rOnvY4j9Ixnbj3TOhJyvzHRX5DrLmhzb/wB05TMbD8ZM+jxgrIc0m6N1Zfr8HL973nVbxVdP5cV7RuHu/jL2dBQY7xrZJo3Rr6XM+u3ltnT3nbRjqf8A2RV7Qtyn7JzdHQ4UgnS8UjH6URfrJypnQ7KLtFf2yiruGu2vuplmIpsaADzmnaxFVzkaiZ1cqIic55mqI3vVNM1TlTGbRV+N1LHwNVZXJ6I04OkvBsuc1eMop2RtSVnROIr2zshz1bjjUycETWxJptuj9q8HuOOvHVzshKWdDWafvnNpZZpJHZcr3Pd6Fc5XW9iaDirrqr3ylbdqi3GVEZQ+Tw2MrArMqupU/qIV2PRe424fbdp93Ljpyw1c9FzoWJSEgAAAAAAAAAAAAAAAAAAAA02NOCHVlK6Jio16ObJGrvu5SehfYqKqGjEWvNt+GHXgsTq92K5VxW4Hng/5opI7Z3om6RcuU3NzkRXhqqd8LPax1q79k/rcw9xVUu2z00sW5pm3MOnzI9nmqHjJ6h8qxFGeTOb43Ky3RbKmZUzoeonLcT9W9s6LGCrhtaRZGp+GX6/vz+86aMXXT+XDe0dYub4y9mVVY31ciWYjItKtRXL2uD3G2vHVzuaLWh7FE7c5aaokllXKlkc9f43K63JoOSq5VVvlJUWqLcZURk+UjQ1zVLZmmxgzekcTnfdRV9vo2mYoql5m5Eb3rDSq52Sl3v1IWrK7ntmNtNmZa68RTTGc7Pd1GK+K07aqOombuUcV3NY9zVke6yol0T7qcN9J34fCTTV4pQukNJ0V2ptUTnmsBCSQCQAAAAAAAAAAAAAAAAAAAAFA+ckDU1+LVJMqudEjXr+8ivE++lVba/Pc012KKt8Oqzjb9r7au+1oK7EyROGGVsqehlS2zuaRiflOWvB8Eha0tz05e3+P+3O12BJYr7rFLCifiRN2i6Tb257HJVhvDvhKWsdRc+2c/iWAtI6122kTTGqONM2pdUXqfzseCt0mvJtic9yLGMmc3rFTvf8Adaq+3Mm09xbqndDXN2mPyyIKBXOyUVXv4uBrpX89s3ObYw+bVXiYpjPdHGW9oMUqh9lWNkCa067rJy5DVt2kOmjBzwRt7StundMz7bIdDR4nU6WWZ0lQuh65EfQba6cqqddGEojftRtzSd6r7dntvb6mpI4m5MbGRtT8MbUYmxDoimI3OCuuquc6pzl7WPTykAAAAAAAAAAAAAAAAAAAAAAAAARYBkhjJq67F+lmVXOiRr+MivFJ0m2vzmqqzRVvh028Xet/bV32tFXYoP8A3UrZU9DKltnciSMzbDmrwue532tKc8dv8MGlxSnV3DHFDpfI9Z+i1O9UNdOFnhk33NKUZbJmfhvqXFOBP+Zz6hdD1yI+g2yLz3OmjC0Rv2uC5pG7V9uz/lvKeljjbkRsaxqZmsajU2IdEUxG5xVV1VTnVOfu9bGXlIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARYBYCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==",
      "CSS3",
      "React",
      "Next.js",
      "TypeScript",
    ],
    backend: ["Node.js", "Python", "PHP", "WordPress"],
    infrastructure: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
  };

  const roadmap = [
    {
      step: "1. Requirement Analysis",
      description:
        "We conduct a thorough analysis of your requirements to establish the foundation for your website.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="40"
            height="40"
            rx="4"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path d="M20 25H40" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M20 35H40" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M20 30H30" stroke="#7d2fd0" strokeWidth="2" />
        </svg>
      ),
    },
    {
      step: "2. Planning",
      description:
        "We make estimations and customized strategies to ensure a secure roadmap to success.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="20" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M30 20V30L38 34" stroke="#7d2fd0" strokeWidth="2" />
        </svg>
      ),
    },
    {
      step: "3. Design (UI/UX)",
      description:
        "Your vision will be aligned with the latest design using best technology ensuring the best user experience.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="15"
            width="40"
            height="30"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path d="M10 22H50" stroke="#7d2fd0" strokeWidth="2" />
          <circle cx="15" cy="19" r="1.5" fill="#7d2fd0" />
          <circle cx="20" cy="19" r="1.5" fill="#7d2fd0" />
          <circle cx="25" cy="19" r="1.5" fill="#7d2fd0" />
          <rect x="15" y="27" width="30" height="3" rx="1.5" fill="#7d2fd0" />
          <rect x="15" y="35" width="20" height="3" rx="1.5" fill="#7d2fd0" />
        </svg>
      ),
    },
    {
      step: "4. Development",
      description:
        "Our team of highly skilled developers work with cutting-edge programming languages and standards.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 35L25 25L15 15" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M45 35L35 25L45 15" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M25 45L35 15" stroke="#7d2fd0" strokeWidth="2" />
        </svg>
      ),
    },
    {
      step: "5. System Testing & QA",
      description:
        "We ensure reliability through rigorous system testing and QA for a seamless user experience and robust website.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 10C18.954 10 10 18.954 10 30C10 41.046 18.954 50 30 50C41.046 50 50 41.046 50 30C50 18.954 41.046 10 30 10Z"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path
            d="M25 30L28 33L35 26"
            stroke="#7d2fd0"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      step: "6. Deployment",
      description:
        "After ensuring website quality, we launch it from prototype to fully-fledged, live for your entire audience.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 40L30 20L50 40" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M20 40V50H40V40" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M30 20V10" stroke="#7d2fd0" strokeWidth="2" />
        </svg>
      ),
    },
    {
      step: "7. Maintenance & Monitoring",
      description:
        "We provide reliable hosting and ongoing monitoring and support to ensure your website runs smoothly.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 30H20L25 20L35 40L40 30H45"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path
            d="M10 30C10 18.954 18.954 10 30 10C41.046 10 50 18.954 50 30C50 41.046 41.046 50 30 50C18.954 50 10 41.046 10 30Z"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      step: "8. Knowledge Transfer",
      description:
        "We provide training on process operations, troubleshooting, implementation, and user data access post-launch.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 20L40 20" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M20 30L40 30" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M20 40L40 40" stroke="#7d2fd0" strokeWidth="2" />
          <path
            d="M15 10L45 10L45 50L15 50L15 10Z"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  const businessFeatures = [
    {
      title: "Robust Functionality",
      description:
        "Your website with optimized features and seamless performance for an exceptional user experience.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8Z"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 16V32L42.667 37.333"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Client-Centric Approach",
      description:
        "Our client-centric website solutions address unique needs, reflecting your business vision with precision.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="24" r="8" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="44" cy="24" r="8" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="32" cy="44" r="8" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M24 30L30 38" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M40 30L34 38" stroke="#7d2fd0" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Innovative Website Design",
      description:
        "Striking creativity, we transform concepts into reality with user-friendly modern designs.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="12"
            width="48"
            height="40"
            rx="4"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <path d="M8 20H56" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="14" cy="16" r="2" fill="#7d2fd0" />
          <circle cx="20" cy="16" r="2" fill="#7d2fd0" />
          <circle cx="26" cy="16" r="2" fill="#7d2fd0" />
        </svg>
      ),
    },
    {
      title: "Timely Website Delivery",
      description:
        "We value time, ensuring your website projects meet deadlines consistently with uncompromised quality.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="24" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M32 16V32L44 44" stroke="#7d2fd0" strokeWidth="3" />
        </svg>
      ),
    },
  ];

  const digitalServices = [
    {
      title: "UI/UX",
      description:
        "Design eye-catching UI/UX solutions for effortless user interfaces.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="16"
            width="48"
            height="32"
            rx="4"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <path d="M8 24H56" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="16" cy="20" r="2" fill="#7d2fd0" />
          <circle cx="24" cy="20" r="2" fill="#7d2fd0" />
          <circle cx="32" cy="20" r="2" fill="#7d2fd0" />
          <rect x="16" y="32" width="32" height="4" rx="2" fill="#7d2fd0" />
          <rect x="16" y="40" width="20" height="4" rx="2" fill="#7d2fd0" />
        </svg>
      ),
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Custom SEO solutions for enhanced organic visibility and growth.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="16" stroke="#7d2fd0" strokeWidth="3" />
          <path
            d="M40 40L52 52"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Social Media Marketing (SMM)",
      description:
        "Build a strong online presence and engage with your targeted audience.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="32" r="12" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="44" cy="20" r="12" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="44" cy="44" r="12" stroke="#7d2fd0" strokeWidth="3" />
          <line
            x1="30"
            y1="26"
            x2="34"
            y2="22"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <line
            x1="30"
            y1="38"
            x2="34"
            y2="42"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
        </svg>
      ),
    },
    {
      title: "Graphic Design",
      description:
        "Designs that speak your brand's essence and connect with your audience.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 8L8 56H56L32 8Z" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="32" cy="40" r="4" fill="#7d2fd0" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: "What types of website development services do you offer?",
      answer:
        "We offer a comprehensive range of website development services including e-commerce websites, corporate websites, landing pages, custom web applications, CMS development, and responsive design. We tailor our solutions to meet your specific business requirements.",
    },
    {
      question: "How much does it cost to develop my website?",
      answer:
        "The cost of website development varies depending on your specific requirements, complexity, features, and scope. We provide customized quotes based on your project needs. Contact us for a free consultation and estimate.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for website development depends on the complexity and scope of your project. Simple websites may take 2-4 weeks, while complex e-commerce or custom web applications can take 2-6 months. We'll provide you with a detailed timeline during our project planning phase.",
    },
    {
      question: "What is the process of website development?",
      answer:
        "Our website development process includes: 1) Requirement Analysis, 2) Planning, 3) Design (UI/UX), 4) Development, 5) Testing & QA, 6) Deployment, 7) Maintenance & Monitoring, and 8) Knowledge Transfer. We follow a systematic approach to ensure quality and timely delivery.",
    },
    {
      question: "Do you offer mobile website hosting services?",
      answer:
        "Yes, we provide reliable website hosting services with robust security measures, regular backups, and ongoing technical support to ensure your website runs smoothly and efficiently.",
    },
    {
      question: "Do you develop dynamic websites?",
      answer:
        "Yes, we specialize in developing dynamic websites that offer interactive features, personalized user experiences, and database integration. Our dynamic websites are designed to engage visitors and drive conversions.",
    },
    {
      question: "Do you develop SEO-friendly websites?",
      answer:
        "Absolutely! All our websites are built with SEO best practices in mind. We implement proper site structure, mobile responsiveness, fast loading speeds, semantic markup, and other SEO elements to help improve your search engine rankings.",
    },
    {
      question:
        "Do you offer support services and maintenance after development?",
      answer:
        "Yes, we provide comprehensive support and maintenance services after website launch. Our support packages include regular updates, security monitoring, performance optimization, content updates, and technical troubleshooting.",
    },
    {
      question: "How do you ensure the security of the websites you develop?",
      answer:
        "We implement multiple security measures including SSL certificates, secure coding practices, regular security updates, firewall protection, data encryption, and vulnerability scanning. We also provide security training and documentation to clients.",
    },
  ];

  const trustedCompanies = [
    { name: "Nepal Research", logo: "nepal-research.png" },
    { name: "Visit Nepal", logo: "visit-nepal.png" },
    { name: "E-Learning", logo: "elearning.png" },
    { name: "Chautari", logo: "chautari.png" },
    { name: "Astra Media", logo: "astra-media.png" },
    { name: "Harilo", logo: "harilo.png" },
  ];

  return (
    <div className="bg-gray-50 mt-15">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-r from-purple-500 to-indigo-600">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute w-40 h-40 bg-white rounded-full top-10 left-10 blur-3xl"></div>
          <div className="absolute bg-purple-300 rounded-full bottom-10 right-10 w-60 h-60 blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto md:px-12 lg:px-16">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            {/* Left Section - Text Content */}
            <div className="mb-12 md:w-1/2 md:mb-0 md:pr-8">
              <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                Website{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                  Development
                </span>
              </h1>
              <p className="mb-6 text-lg text-gray-100">
                <span className="font-semibold">
                  Highly functional and visually appealing websites tailored to
                  your needs.
                </span>
              </p>
              <p className="mb-6 text-gray-200">
                Elevate your online presence with seamless design, cutting-edge
                technology, and future-ready solutions.
              </p>
              <p className="mb-8 text-gray-300">
                Our websites not only look stunning but are built for high
                performance and user engagement.
              </p>
            </div>

            {/* Right Section - Image & Stats */}
            <div className="relative flex justify-center md:w-1/2">
              <div className="relative">
                <img
                  src="/website-development-hero.svg"
                  alt="Website Development"
                  className="max-w-full transition duration-500 transform drop-shadow-xl hover:scale-105"
                />

                {/* Stats Cards - Glassmorphism Effect */}
                <div className="absolute px-4 py-3 border shadow-xl bg-white/20 backdrop-blur-md rounded-xl -top-8 -right-8 border-white/30">
                  <div className="flex items-center">
                    <div className="p-1 mr-2 rounded-full bg-white/20">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="#22C55E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-bold">50+</span>
                  </div>
                  <p className="text-sm text-gray-200">Projects</p>
                </div>

                <div className="absolute px-4 py-3 border shadow-xl bg-white/20 backdrop-blur-md rounded-xl top-16 -right-12 border-white/30">
                  <div className="flex items-center">
                    <div className="p-1 mr-2 rounded-full bg-white/20">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L15.09 15.74L16.24 23.01L12 19.54L7.76 23.01L8.91 15.74L2 9.27L9.27 8.26L12 2Z"
                          stroke="#FACC15"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-bold">100+</span>
                  </div>
                  <p className="text-sm text-gray-200">Happy Clients</p>
                </div>

                <div className="absolute px-4 py-3 border shadow-xl bg-white/20 backdrop-blur-md rounded-xl -bottom-6 -left-8 border-white/30">
                  <div className="flex items-center">
                    <div className="p-1 mr-2 rounded-full bg-white/20">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
                          stroke="#3B82F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-bold">20+</span>
                  </div>
                  <p className="text-sm text-gray-200">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle decoration */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-purple-500/10 to-indigo-600/10 backdrop-blur-sm"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-6 mx-auto md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Powerful Features for Your Success
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the tools designed to elevate your experience and drive
              results.
            </p>
          </div>

          {/* Features Grid */}
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden flex flex-col items-center p-8 rounded-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                    index === 1
                      ? "bg-gradient-to-br from-purple-700 to-indigo-800 text-white shadow-xl"
                      : "bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 shadow-lg"
                  }`}
                  style={{
                    clipPath:
                      index % 2 === 0
                        ? "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)"
                        : "polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 92%)",
                  }}
                >
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6">
                    <div
                      className={`w-20 h-20 rounded-full ${
                        index === 1
                          ? "bg-purple-500 bg-opacity-30"
                          : "bg-purple-300 bg-opacity-40"
                      } blur-lg`}
                    ></div>
                  </div>

                  <div className="absolute -bottom-8 -left-8">
                    <div
                      className={`w-24 h-24 rounded-full ${
                        index === 1
                          ? "bg-indigo-400 bg-opacity-20"
                          : "bg-purple-200 bg-opacity-50"
                      } blur-lg`}
                    ></div>
                  </div>

                  {/* Feature Icon */}
                  <div
                    className={`mb-6 w-20 h-20 flex items-center justify-center rounded-full ${
                      index === 1
                        ? "bg-white bg-opacity-10 shadow-lg"
                        : "bg-white shadow-md"
                    }`}
                  >
                    {feature.svg}
                  </div>

                  {/* Feature Title */}
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      index === 1 ? "text-white" : "text-purple-800"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p
                    className={`text-center mb-6 ${
                      index === 1 ? "text-purple-100" : "text-purple-700"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute left-0 w-64 h-64 bg-purple-100 rounded-full top-1/4 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute right-0 bg-green-100 rounded-full top-1/3 w-80 h-80 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Add necessary CSS */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      {/* Technologies Section */}
      <section className="py-16 bg-purple-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block mb-3">
              <div className="flex items-center">
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
                <span className="mx-4 text-sm font-medium tracking-wider text-gray-500 uppercase">
                  Technology Stack
                </span>
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Technology We Work With In{" "}
              <span className="text-purple-600">Website Development</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="mb-8 md:w-3/5 md:mb-0 md:pr-8">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.frontend.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center px-6 py-3 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
                    >
                      <img src={tech} alt={tech} className="w-6 h-6 mr-2" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.backend.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center px-6 py-3 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
                    >
                      <img
                        src={`/icons/${tech.toLowerCase()}.svg`}
                        alt={tech}
                        className="w-6 h-6 mr-2"
                      />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Infrastructure
                </h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.infrastructure.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center px-6 py-3 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
                    >
                      <img
                        src={`/icons/${tech.toLowerCase()}.svg`}
                        alt={tech}
                        className="w-6 h-6 mr-2"
                      />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative flex justify-center md:w-2/5">
              <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 rounded-full top-1/2 left-1/2 -z-10"></div>
              <img
                src="/developer.png"
                alt="Developer"
                className="relative z-10 max-w-full"
              />
              <div className="absolute top-4 right-4 animate-pulse">
                <div className="px-2 py-1 text-xs bg-white rounded shadow-sm">
                  HTML
                </div>
              </div>
              <div className="absolute delay-300 bottom-8 left-4 animate-pulse">
                <div className="px-2 py-1 text-xs bg-white rounded shadow-sm">
                  React
                </div>
              </div>
              <div className="absolute delay-700 top-1/2 right-8 animate-pulse">
                <div className="px-2 py-1 text-xs bg-white rounded shadow-sm">
                  AWS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 bg-purple-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Roadmap</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our systematic approach ensures smooth development and successful
              project delivery.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line for desktop view */}
            <div className="hidden lg:block absolute left-1/2 top-8 w-3/4 h-0.5 bg-purple-300 transform -translate-x-1/2 -translate-y-4 z-0"></div>

            {roadmap.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="relative p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="absolute flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-purple-500 rounded-full -top-4 left-6">
                  {index + 1}
                </div>
                <div className="flex items-center mb-4">
                  <div className="p-3 mr-4 bg-purple-100 rounded-full">
                    {item.svg}
                  </div>
                  <h3 className="text-lg font-semibold">{item.step}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="relative grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line for desktop view */}
            <div className="hidden lg:block absolute left-1/2 top-8 w-3/4 h-0.5 bg-purple-300 transform -translate-x-1/2 -translate-y-4 z-0"></div>

            {roadmap.slice(4, 8).map((item, index) => (
              <div
                key={index + 4}
                className="relative p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="absolute flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-purple-500 rounded-full -top-4 left-6">
                  {index + 5}
                </div>
                <div className="flex items-center mb-4">
                  <div className="p-3 mr-4 bg-purple-100 rounded-full">
                    {item.svg}
                  </div>
                  <h3 className="text-lg font-semibold">{item.step}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block mb-3">
              <div className="flex items-center">
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">
                  Why Choose Us
                </span>
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              We Help You Expand{" "}
              <span className="text-purple-600">Your Business</span> Through
              Tech
            </h2>
            <p className="max-w-3xl text-gray-600">
              We have proven expertise in advancing businesses through
              innovative digital solutions. We understand the needs of your
              choice. As a leading website development company in Nepal, our
              other exceptional technical services include design and
              development services. Some of our additional perks are as follows:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="h-full p-6 rounded-lg bg-purple-50">
                <div className="mb-4">{businessFeatures[0].svg}</div>
                <h3 className="mb-2 text-xl font-semibold">
                  {businessFeatures[0].title}
                </h3>
                <p className="text-gray-600">
                  {businessFeatures[0].description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:col-span-3 md:grid-cols-3">
              {businessFeatures.slice(1).map((feature, index) => (
                <div key={index + 1} className="p-6 rounded-lg bg-purple-50">
                  <div className="mb-4">{feature.svg}</div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block mb-3">
              <div className="flex items-center">
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">Portfolio</span>
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold">
              Some Of Our Recent{" "}
              <span className="text-purple-600">Website Development</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <img
                  src={`/images/project-${item}.jpg`}
                  alt={`Project ${item}`}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold">
                    Project Title {item}
                  </h3>
                  <p className="mb-3 text-gray-600">Category</p>
                  <Link
                    href="#"
                    className="flex items-center font-medium text-purple-600 hover:text-purple-600"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 bg-green-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-purple-600">
              Time Is Running Out!
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Don't miss the chance to unleash the full potential of your
              business with Software Website Development!
            </p>
          </div>

          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-8 md:w-2/3 md:mb-0">
              <div className="flex flex-wrap justify-center gap-8 md:justify-start">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 mb-2 bg-white rounded-full shadow-md">
                      <span className="font-semibold text-purple-600">
                        {step}
                      </span>
                    </div>
                    <div className="text-center max-w-[120px]">
                      <p className="text-sm text-gray-700">
                        {step === 1 && "Is your website fast?"}
                        {step === 2 && "Is your website secure?"}
                        {step === 3 && "Is your website mobile-friendly?"}
                        {step === 4 && "Does your website look good?"}
                        {step === 5 && "Is your website optimized for SEO?"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-center">
                  Check Your Website Quality For Free
                </h3>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Enter your website..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white transition duration-300 bg-purple-600 rounded-md hover:bg-green-600"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Digital Services Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block mb-3">
              <div className="flex items-center">
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">
                  Other Services
                </span>
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              One Solution For All Your{" "}
              <span className="text-purple-600">Digital Needs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {digitalServices.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4">{service.svg}</div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Link
                  href="#"
                  className="flex items-center font-medium text-purple-600 hover:text-green-600"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="inline-block mb-3">
              <div className="flex items-center">
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">
                  Our Valued Clients
                </span>
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              Trusted By{" "}
              <span className="text-purple-600">Top-Rated Companies</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                <img
                  src={`/images/clients/${company.logo}`}
                  alt={company.name}
                  className="object-contain h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="mb-8 md:w-1/3 md:mb-0">
              <div className="inline-block mb-3">
                <div className="flex items-center">
                  <div className="flex-grow w-12 h-px bg-purple-300"></div>
                  <span className="mx-4 text-sm font-medium text-purple-500">
                    FAQs
                  </span>
                  <div className="flex-grow w-12 h-px bg-purple-300"></div>
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-purple-900 relative">
                Frequently Asked Questions
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full"></span>
              </h2>
              <p className="mb-6 text-purple-700">
                Welcome to our FAQ section! Here you'll find answers to the most
                common questions about website development.
              </p>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/faq.png"
                  alt="FAQ"
                  className="max-w-full transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-700 to-transparent opacity-30 rounded-xl"></div>
                <div className="absolute -bottom-2 -right-2">
                  <div className="w-20 h-20 bg-purple-200 rounded-full opacity-70 blur-lg"></div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 md:pl-12">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="overflow-hidden border border-purple-100 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    <button
                      className="flex items-center justify-between w-full p-5 text-left bg-white hover:bg-purple-50 transition-colors duration-300"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-medium text-purple-800 flex items-center">
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-purple-100 text-purple-600 font-bold">
                          {index + 1}
                        </span>
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 ml-4">
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full ${
                            openFaqIndex === index
                              ? "bg-purple-600 text-white"
                              : "bg-purple-100 text-purple-600"
                          } transition-all duration-300`}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${
                              openFaqIndex === index
                                ? "transform rotate-180"
                                : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openFaqIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-5 border-t border-purple-100 bg-gradient-to-br from-white to-purple-50">
                        <p className="text-purple-700">{faq.answer}</p>
                        {/* <div className="mt-4 pt-4 border-t border-purple-100">
                          <a
                            href="#"
                            className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
                          >
                            Learn more about this topic
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-8 p-6 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mt-10 -mr-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-300 opacity-20 rounded-full -mb-8 -ml-8"></div>

                <h3 className="text-xl font-bold mb-2">
                  Still have questions?
                </h3>
                <p className="mb-4 text-purple-100">
                  We're here to help with any other questions you might have.
                </p>
                <button className="px-6 py-2 bg-white text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors duration-300 transform hover:scale-105">
                  Contact Support
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      {/* <section className="py-16 text-white bg-purple-600">
        <div className="container px-4 mx-auto text-center md:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let's discuss your website needs and create a custom solution that
            drives results for your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-3 font-medium text-purple-600 transition duration-300 bg-white rounded-full hover:bg-gray-100">
              Contact Us
            </button>
            <button className="px-8 py-3 font-medium transition duration-300 border-2 border-white rounded-full hover:bg-white hover:text-purple-600">
              View Portfolio
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
