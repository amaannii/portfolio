import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

function Footer() {
  const [contact, setcontact] = useState(false);

  return (
    <>
      <div className="max-md:h-auto border-0 w-full bg-[#1E1E1E]">
        <div className="h-auto w-[100%] overflow-hidden">
          <h1 className="text-[#E9E3DC] border-0 opacity-5 w-[5000px]  h-full font-extrabold text- marquee-text ">
            AMANI AMANI AMANI AMANI AMANI AMANI AMANI AMANI AMANI AMANI AMANI
            AMANI AMANI AMANI
          </h1>
        </div>
        <div className="w-[100%] h-[180px] flex justify-center items-center">
          <h1
            class="my-text"
            className="text-[#E9E3DC] font-extrabold text-3xl text-center tracking-[-1px] w-[270px]"
          >
            WORKING ON MORE PROJECTS...
          </h1>
        </div>
        <div className="max-sm:h-[90%] h-[320px]  w-[100%] flex justify-center">
          <div className="h-[280px] bg-[#D9D9D9] max-md:flex-col max-md:h-[770px] w-[65%] rounded-2xl flex p-10 text-[#1E1E1E] justify-between mb-6">
            <div className="w-2/5 flex flex-col justify-between max-md:w-full">
              <div className="flex flex-col gap-4">
                <h2 className="font-extrabold text-4xl tracking-[-2px]">
                  AMANI A
                </h2>
                <p className="text-sm w-full leading-relaxed">
                  A developer and designer with a passion for interactive, and
                  functional digital experiences. From interfaces to efficient
                  code, I combine creativity with technical expertise to bring
                  ideas to life and deliver meaningful solutions.
                </p>
              </div>
              <p className=" font-bold text-sm pt-8">
                Amani A - Copyright © 2025
              </p>
            </div>

            <div className="w-1/5 flex flex-col pt-1 pl-4 max-md:w-full">
              <h3 className="text-base font-bold mb-2">SITEMAP</h3>
              <Link to="/">
                <h4
                  onClick={() => sethome(true)}
                  className="font-normal text-base mb-1 cursor-pointer hover:font-medium"
                >
                  Home
                </h4>
              </Link>
              <Link to="/project">
                <h4 className="font-normal text-base mb-1 cursor-pointer hover:font-medium">
                  Projects
                </h4>
              </Link>
              <Link to="/about">
                <h4 className="font-normal text-base mb-1 cursor-pointer hover:font-medium">
                  About
                </h4>
              </Link>
            </div>

            {/* Right Column: Follow Me and Contact Button */}
            <div className="w-1/5 flex flex-col items-start pt-1 max-md:w-full">
              {/* Follow Me On and Social Icons */}
              <h2 className="text-base font-bold mb-2">Follow me on</h2>

              {/* Social Icons (using placeholders for simple text icons or just simple text for alignment) */}
              <div className="flex items-center gap-2 text-xl mb-12">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-gray-700 h-[20px] w-[20px]"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAUlEQVR4nO2aP2gUQRTG16QIiKBBUuRuv++d6wmWYqWtpBYr/1UiNmIsRFCwsNBKxMZGsBEU7ESjgpWlIsYophEEFcEYFdTOv8STgRWuiHo7e3tzc/f94HHFwbz3fjc7zMxtkgghhBBCCCHEgDJiZnsB3ALwFsB390nyZpqme9z3oQuMHgDrATwm2fpbAJgjuS50rVFLJvnhX5LbZL+XbD9GATzpRHJbzGoZKYhbkwtKbuUze1fo2qMCwG0f0SRnQtceFQAWPUUvhK49KtwWznPp+Ba69qjI98k+M/pN6Nqjwh1GPEVfD117VKRputtz6dgZuvbYGMlPfEVEP9Q+2gN30stPfJ3M5HeNRsNC1xy1bJKP/jeTzawRutZBYCRfs2fcPjnf+i2QvJGfBLVcCCGEEH3KaK1WW0syy2O82WyOhS4qekiOkzxA8irJ5yR/LbMVXQLwGsBdAKdJTrkfJGTRLd9IKhofwLPlxqrX6xsAXHE3h75Xu066ma3pushBEN1sNscAnCH5s0y9bfERwL7KpMYoGkDN4z/NTvNc7Nly0s+isywjgFdVSG6LS5VL7mfRExMTq0g+rVjyn5geWtEAzvdIssv3tfLLsj4V/cNtz3olOs95eehEM0C4HzdN07pEsydxXKLZk1l9X6LZk1jKsmy1RJOzJI+labrDzLaa2SaS29wjT3K+Szmmhln0CzPb0sG/+Qd937xqi8PdMdtFEUnF4+cxX+RxNrP9JfOdKyW0ChFJxeOT/GJmGwu2tALAPd+cAK75maxQRFLx+PmlT2EAbC+Rcy4ZNtEkN/v0NDk5udI9DZ6iXyZDJvpTmfdISD7wFL3omzNW0XfK9OXuLjxFf06GTPSFMn0BONtXL9j3seiTZfoCcKrKvgZGtJkdLdMXgBMSzepPaACOSDQ7ikMl+5qWaEq0RFOiCyHRlGiJpkQXRqIp0RJNiS6MRFOiJZoSXRiJpkRLNCW6MBJNiZZoSnRhJJoSLdGU6PhFCyGEEEIIIYQQQgghRDJQ/AbOlERBVfNLKwAAAABJRU5ErkJggg=="
                    alt="linkedin"
                  />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-gray-700 h-[20px] w-[20px]"
                >
                  <img
                    src="data:image/png;base64,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"
                    alt="github"
                  />
                </a>

                {/* Another icon (example link) */}
                <a
                  href="https://leetcode.com/u/8mqlDEHANk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-gray-700 h-[20px] w-[20px]"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF40lEQVR4nO2daYiWVRTHfzOjttsqlS22Z5oRLWr7RhSFbUSWTozRjPUhjDItmcDMQrKNUgkhimkxWiiM0NKmIGi3PhS0aVRu02KWVqMt4xMHzsAwzDjz3HPf995n+cH5fM/9n5n3ufc855wH8stg4G7gK2ArsA54GhgZ2rEiMAz4Ekh6sL+B+tAO5pmDgW97Eb/T/gHGhnY0jxwErOpD/E5rDe1s3jgQWNlP8cX+0+dEiQcOAL5JIX6nDfexeNEZCnztIL7YkNDOZ5399ZjpIv6K0M5nnf22c9TsyzqAC0JvIMvsC3zhKL7Y1NAbyDJDgM8N4t8ZegNZF/8zg/h3hd5AkcV/IPQGssyeempxFf/h0BvIMnsYxX809AayLv7HBvEfB2pCbyLL4n9kEP8JoDb0JrLK7sCHBvFbSvHDif8iMCD0Jooq/jZgPnBuGYT0DAbeN4jf3TYAs8uMZ//Ff8+j+F3tLw3EDqE3GSu7Ae9WSPyuJsm7MaE3Gxu7AG9XQfxOKysiurAr8E4Vxe/6oL6dgrMz8FYA8btaMwUWvzWw+InaDArGTsCbEQifdLHpFEj85REInvTwTLiJAoi/zJNgW4E2LT/c6DEIN5BTdgTeMAr0qQo0oof0shxlz9e8/5/GIFxPDsVfahBlI3BpivX2ARYZ1pNylQZyglz9lxjEWAUc5rj2NP2LdllXakYnknEGAYsN4v8AHGr0oUn/ol2DMIGCir/G8JffnYkqpmsQrqZg4q8FjvDs07WGIEgjx1lkhIHAKwbx24CjK+TbeOBfw7NI9hY14uDLBvF/0iNmJblCs6Eu/p1N5OK/ZBD/F2BUlXwdpxe5tD7eSKTIe9cXDOL/ChxfZZ8vBNpT+tkQq/jPG8T/DTgpkO/npbw1H0Vk1AHPGcTfFMHrwTOBzf3wVS6T0bHQIP4fwGnEwSnA79vxdZ12X0bFHcYKhdjO1SN6Kf5dEqP4Yw3n6Xb97Y2RGuBEfdhKCuJwIj1uujbFbSmb4uzc7Ci+XH4u9rB+oZEcz3rHXEqafH5JL9Q7iC/PiitDO54XlhUhlRsrezucfG4L7XSeuDyl+K+GdjhvzE0hfofnzGYdMBn4QOv9N0Zu6zUtP9qjBryWIgCtnpN9ix2PvqFNnoGTfAmRZiiGz6rjWREIaTE5gh/nQ4gNKRaV3ixf9USbIxDRajIm08yWFAv6+v0/IwLxfJhkU82kqSjwVdFwWQTi+TB5/WlmU4oFfc3iPDkC8XyYFBCbWZNiwas8noDaIhDQavN8iJGmg/Ex/NEUgYCJ8Z23DJI181SKRVd7LmKam2Hxz/ElwpTAJRynA09qI/eKyE0aD+/RiY7eSPtAXK11+iWeqHV4GbM8C/WUWWK+w++glCuWE0s8caxjx0kZBI+4Nlcv0rRyiZHRhr4rqSEtg+CBFsPZWI6S5Rw3D5MMvzeOkYwxCKOAR/Rn9nX9+pKXW2wlGKM1nq5BWBjZLM/pvXRTtvt8q+WbSww1omILIgnCnD783BZzYdl4Q/dhoqMFagL5Lus+mKJnOdpL5QRjEB4KJP68PDXp1RuDcH8Vfa11bC6JtkmvkwbDWIBEf4srTZ0ehV38i7JJrzvXGYMwu4K+STrkWUe/5EF8JBmh0RiEmRXwaaCxlVbyWZlisiFlkXj+yM4g4/gE6QjaiwzSaAxCcwSDQ1bqV/oyS5MxCDOMozEtY9Ik3XIIOWCKMQhzHLKoQ42DwL/TbxLnhlsMYiQ6W/rUfv7kNBrriXxM6oqSqcYgJMAnemm7RvuNpQrvIhW9xbGJsPuwqCj7g31xq4cgJBWyH4FjKAA+/hMSz1aNYVFRMS0C0RO1n7XgoHDMjKR88AQKzKzA4ocaFhUVzcZ7gmvXipferbwwyWGGm6vJdymHhd5wjIzUCemV7Fi8Ty9rJb1Qp5eqNB05fVmHJuSGh95clhigL/yXGgatrtU6n1J4D9+WHAfcqzMo5JPm0rfcWZckA/ckBSHJt2d0qJScbmIs/uqR/wEUrA2ZZPKxxgAAAABJRU5ErkJggg=="
                    alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo"
                  />
                </a>
              </div>

              {/* CONTACT ME Button - styled to match the image's appearance */}
              <button
                onClick={() => setcontact(true)}
                className="text-[#E9E3DC] h-[30px] w-full bg-gradient-to-r from-[#1E1E1E] via-stone-700 to-stone-600 border border-black font-extrabold text-base tracking-[-0.5px] rounded-sm flex items-center justify-center"
              >
                CONTACT ME
              </button>
            </div>
          </div>
        </div>
      </div>
      {contact && <Contact contact={setcontact} />}
    </>
  );
}

export default Footer;
