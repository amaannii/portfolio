import React, { useState } from "react";
import img from "../assets/images/Home 2.jpg";
import img3 from "../assets/images/meee.png";
import Contact from "./Contact";
import Hearder from "./Hearder";


function Main() {
  const [contact, setcontact] = useState(false);
  return (
    <>
      <div className="h-auto w-[100%] ">
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // responsive
            backgroundPosition: "center", // keeps focus centered
          }}
          className="min-h-[144vh] w-full flex flex-col justify-between items-center  pb-[10%]"
        >
          <Hearder />

          <div className="h-[150px] w-[100%] justify-center flex items-center">
           
            <h1 className="text-[#E9E3DC]  font-extrabold text-6xl mt-30">
              AMANI A
            </h1>
             
          </div>
          {/* ABOUT ME CARD */}
          <div className="min-h-[125px]  flex flex-col items-center justify-center w-[80%]  ">
            <div className="max-sm:w-[115%] w-[90%] md:w-[70%] lg:w-[67%] bg-[#D9D9D9] rounded-2xl  md:p-7 flex max-md:flex-col h-[30%] items-center gap-2 ">
              
                <h3 className="my-text text-[#1E1E1E] md:w-[130px] text-3xl mb-4 tracking-[-1px] text-center max-sm:mt-4 max-sm:text-center">
                ABOUT ME
              </h3>
            
            

              <p className=" text-[#1E1E1E]  max-w-[550px] max-sm:p-3 ">
                I’m Amani A, a passionate MERN Stack Developer and Creative
                Designer who loves building powerful web applications and
                crafting visually engaging digital experiences. With a strong
                blend of technical expertise and design thinking, I bring ideas
                to life by combining modern technology, clean aesthetics, and
                intuitive user experiences.
              </p>
            </div>

            {/* LOGO SECTION */}
            <div className="w-[90%] md:w-[70%] lg:w-[67%] bg-[#282727] border border-white/10 rounded-2xl h-auto py-4 flex flex-wrap justify-center gap-4">
              {/* Icons */}
              <img
                className="h-[30px] w-[30px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADhUlEQVR4nO2aPWgUQRTH1y8MKBgFQW0ERdL4FcRC0TQWplAI6oEKphHOxqASYnLzf5vxo1BQEUnlV0CDKKkCKsYoChZG0SKiggqKqCEGRVMkEDUaeXGL5Ni82Zm73buAD15zd/N//9/M7Ozs7Hne/yjyUEptBfCDiIaLMfHP2xYjCIDGQpslM0xjFJA9hTZKhvR9P20EIaKqQhslc1ZFGZG1E2BE1kQBWVxoo2RIrfUiI4jWemahjZIha2trZxhBguukv9BmafzsjwQRgLwrAsPDYQngrQ1IpyDW2dDQMDvOBPBQqm8D0ib0yBsv5iCi1wJIm43QOUGoL1YKb6R+n9CRZ22EjkrzVGtdEheE1rrEcI0ciSzm+/5eg9jCEAOl+bg+MpnMUqk2e4sMAiBlEFsd0qY3oZVrmw1IhUFsU3YbInqe0PJbERmEiMoMYrtD4O8mNCJlkUF4rhpAVAjIlSRAtNalkUE8z5tERIOC4JmQUTydAMgge7MB4R7+KAhesxKzq3tVqPvBRfCpIHg/FgpvpO49oe4TF8GbguDLWCi8kbovhLo3rAWJqFkQ/BojyBehbrO1IBEdEwT/ENESflLLJVOp1JTRNbXWUwH8FlbL4y4gBxJYSsfs2ZRS86XfK6X2u4DsjBMCwPfsmkqplYY2O6xBfN/fEDPIq5CaG6U27MkaxLQLBTBARN+y8qcFyIPsmgB2GdotcwGZazByMLsNEbVajEprSPs6qQ17sgbRWk8G8EsAOZndBkCTxYg0hYCcENoMsSdrkMBYj2CkJcTICiI6TES3+F4TdoEDaOenPP5tSL1LAshnJ4hAuEsA6Yh4ark9mPtlpg0fgHYB5FkuIB0CSJezsEPHEdHtXIRbBJCevFI4TOXIwRe0YZvymIgQNt+jRiaTWc4PagAeBZrj1TvlWsO4HGblez5zUkptrqmpmT6eJu+vAKzjfRPfFC3063IBqbYoNHoaDAC4zm+WtNbztNZzgpOZy9LhG8lZ7QwCoNKx6Jj1P8icdABU5jIi5XkAyVeWO4NorRcUAcAwJ3txBkmn09OK5KVPP3vxcgnf99cDuAigO2kAAN1cmz14+Qx+PCWifUR0J6Z/Rwzx6Q2AQ77vr7I+w3IJfiHJ9wy+d/B5Uw693hts/6v5hNMrdFiMVvK97hr19fWz+M85RHSBiD5xAjjPn/F3zsL/w5s48Rdb/bGXYpGDGQAAAABJRU5ErkJggg=="
                alt="html-5--v1"
              />
              <img
                className="h-[30px] w-[30px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyklEQVR4nO2ZT4hNURzHr2KhIf9K2IgsjIU/K7JhIZLFrFgxauJlQZqu6b17vt/jFCWRzVhRCiuUKCNEzUZYYKNszCwUC3+ikDIzjE6Grts757177+++N033W6de9/3u93c+53fOu+fcFwSlSpUqNaVE8hvJ8XY2AF9zgwAYbjcIySGJijxuNwiARxIgNycByA0JkPOTAOScBMjxSQByLDcIgEPtBtFaH5SoyK52gwDYKVGRzZ4ELwMhkfzkqcgmiQSdHpB3IhRBMI3kmCtPFEUrc2eo1WoLPCCjthN5c1Sr1Tm+qWWMmS81WiOeJHPzJgCw1AMyIjFYfxO9FV68r+L+JNd44t+IQEyAPBcGeRL3t4vZE/9MEuSuMMjtuL9SqssTf0cS5JIkCMnLCf+9ntiLYiAkTxf5FCZ52FO9U2IgAI6kGO0og/9Rj18oBkKyO8X8P5HB/4zHb48YiNZ6WwqQs2n9AVzw+G0VAyG5Tnix706AXHfFKqXWioEYY5ZIgiildiRAHnhiF0uCTAfw05HsRTw2iqLVTUy/jQmQp47YX5VKZUYgKZIfHZ16nYBe0URVOhPeQw7vD4G07NnDkexznZ3sAIAfdWLttYHkRpPk+6LPO/9EctAxumP1dqe1Wm0eyR6S9yZaj73m8HbtrgcDaQG46poqxphZWX3DMOzwTMErshR/Rq3flVBrfSDLucTeY+/1gPSLgwBggwU8BuCh3TcZYxa6fCamXDeAW/XWEf9vKAJkf4pnRRxqkT2qpuj8eKztEwdpcGbwPTNGbctyr1KqqwiQDVk6k6dprdeLgxhjlrcaBMAycZAGP5OFtDAMO4IiZKuita6QvEbySwGd/07yPslqFEWrglaot7d3JoAtAE56Nn3NTJ9h+7eBfb/b19c3O2i3UlSr9aOep1pKqe32yWxfxtlmP9tr9rvMxqVKlSoVTBX9BmUu5RjfGoEmAAAAAElFTkSuQmCC"
                alt="css3"
              ></img>
              <img
                className="h-[30px] w-[30px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaUlEQVR4nO2Zu4oUQRSGx1tg4oI3vCHsAxiYaCL4At4CJzMRYcRAZKKeqf9rK1AQTIxEwUUTDdzVTBQE1wcQEVPBCyuCCuJlNlBXWSnskaaYmZ7Zmd4ttX44SXedU+fr03W6urtSiYqKGkjW2vWSpoBZYD4wm3W5uRwLQTKI+cBtshCkXQlJ45XAJGk8y61VOLhNXQlU9JtfBFkkEUECExEkMBFBAhMRJDARQQITESQwEUGGkP9m12XMIUl3gfeS5iS9Ae4YYw72itn35MMA+LE6xbTWLgeuFrzSTrhxQYMA9X7ezyU1QgZZBsx4CV8CjgAXgB/ZsdfAvmBBrLUbvXMP8n6STki6aK1ds+D8Fglki1eN6UFjVkY2cDiQlZI+e+fP1Ov11SPLbxEX+0SHxf1W0uleXxKDA2k2mxskPe/SqVrAuSRJxoIHyX1nnu7Rep8BO4IHybXiA8DjLjAfrLXb/waQP0rTdK+k+x2ALi8ZSLVaXTEoSFtA6lXlZekgrmW61inpeP64ux08kK/+Yne/B4DDfswkScY8kG+lghhj9gMvssnmgMQlaK1dK+maB/Kq7Sep6na7md9HYGc+rqQ9Hsi7UkEk3e7WcTrY9dwct/xqSboi6aSk826BeyBTpYIYYza3K9LLJP00xuxq+1lrN/mbxh72PV+x0taIMWYr8KQXBHDK97PWbgOeFkB88ddQqV2rVqutknQMeJjd8+4qzki6kabp7gK/o8A9tz3h9/b9E/BI0ll3kRac3yifI2WIAUD+mZ+hkwN0oiUxSTcLQRqNxjoHk+1AQwNoOQiX44iKHBX13+gXO3CYFtY6Y7gAAAAASUVORK5CYII="
                alt="javascript--v1"
              ></img>
              <img
                className="h-[30px] w-[30px]"
                src="data:image/png;base64,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"
                alt="external-react-social-media-tanah-basah-basic-outline-tanah-basah"
              />
              <img
                className="h-[30px] w-[30px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1UlEQVR4nO2dWYhcRRSGj/uKgruCW3yJgooIUVBxA7cHRXQeVBAXHF/sh3HAmVv/XxzRvIqK4PIg6oNBRBFEQX3ScXsQIVFxR3EhoolGQzRmjLlSYzfcNJPp2+npPnWr+oP/uU/9p6vq3rpVp0QaDIDLrGPIGgDPOudWWceRJVNTUweQ/AXAS9axZAnJB0iWJHd478+2jicrvPd3tc3v6G0R2cM6ruRR1b1JPtxl/oIA3GEdX9K0Wq39SL6wmPltbSmK4jTrOJNkenr6IABvLGF+pxd8B+BE63iTQlUPBvBeL/Mr+sI5d6x13EmgqvsCeK0P8zs94fOiKI62jr/RqOqePcb8XvpwZmbmUOt2NBYAqwcwv9MT5sLkbd2WxuGcuya8YA2agLaeG78j9AHJU0luXibzO4J1uxrB5OTkPmHsXmbzF5YrnHPXWrcvegDcOwTzO/PBJlU9wbqN0ULyLJLzw0pAW2+FpyvrtkbHxMTEXgDWDtn8Tk+427q90QHg9lGY39bfJE+3bnNUSw0k148wAUHvjh9NRzDxcmndLLmjqkeFZWSjBKwPq6ySM7D793dUSK6ENRoAP1kmoP1ucJjkCMnbjP/9HXnJkVE997N3L/g5bHGRnPDeX2BtPCvy3k9KTgB4wtp07twLPpKcPjOS/M3adHYpmy2Ozrkrrc3m4npccgDAIxGYXS4yDP2hqvtL6pD8xtps7lpXS8qo6ooITC6X6AXPSMqQvCXyBGwKDwmSKgCetDaZvZNwkaQKyXUNSMB9kvA2w23WBrPex5r0IHlmBOaWNXrAP6p6iKQGgAlrc1lT3vsLJTVIzlgby/q94FZJjfCqb20s6+t+SQ2Sr0RgbFlTayQ1SL4fgbFlTYVTl2lB8usIjC1r6mNJDZIbIzC2rKnvJTXCOksExpY1tVlSA8CvERhb1tS8pEaThiAAf0pqANhgbSzr63dJDQA/NKgHbJDUGNLZr3JICfhKUgPAqw1KwJykBslHrY1lfT0vqQGg1aAe8JCkhvf+UmtjmfNe0fCVieT2hiTgHEmRsAm2AcPPv+HgoKRIrNsSuXMC1kqqkLzK2mD21oOSeLFVq1ORZR2FUjmSMgCeinj42ZrklpQqAM6POAEvSg6Q/CzSBNwgOQDgnkh3Rh8oOaCqRwyhLFk5YALSW35YirD5iREY39aOoihWSk6Emp6I5DtxNpNvNwBobX7W9w/o/8WafjROQHpr//3gnLvOcOjZBuAUyR2SLxslYLV126MAwPEGE/K6cV3pCqGy7SiHnnBkqvr7Y2ShJzw2ogTMWrc15jJm7wzZ/LlQKNa6rdEyOzt7OIAvh2T+t+ObNWpQFMXK5a4pFKqhjCvm9gGAS5brYHc4+zu++HM3izsB2DpgArYDuMm6LY0FwBUDJCHsQ7rRug2Nx3t/Ocm/+jQ/3EVwvXXsyeCcW9VHpd2N3vuLrWNODlU9CcAnPcz/AMDJ1rGmvoS9Zhfmv550xauYAPBpl/lbVPUY67iygaTvSsDT1jFlhff+vK6XrfGFzgYXPM93EhAeVa1jyg5WCoBkt60kBlC5ZVtVj7OOJztYqcI1XmY2gKRWEnCkdTzZQXJ63AMMAXBnZQ5YYR1PdrBSDLwoijOs48n1+3ELwJvOuXOt49kd/gNLTDzKWNVBwgAAAABJRU5ErkJggg=="
                alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo"
              />
              <img
                className="h-[30px] w-[30px]"
                src="data:image/png;base64,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"
                alt="nodejs"
              />
              <img
                className="h-[30px] w-[30px]"
                src="data:image/png;base64,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"
                alt="mysql-logo"
              />
              <img
                className="h-[30px] w-[30px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO2Z607CQBCF+w5eXstI9F0o5ySrxccT8E2Ayl/BjLRKjNrL7Gwn2JP0F52lX3a3k6+bZWPOJCGEa5JzkiuSO5KH36665q97ZAwASwBFnudXSSBI3pEsGx6sK8jnBWBLcpICYt/2ofqA8AjzNpvNbi2XU+uZ0IDweG1CCJfRQao9cUgIciD5GB0EwEtqEABLC5DXAWakjA7SZ39EmJGtBchqgBlZRAeRZjXAjDxEB5GOWzWrJCAA1tPp9CI6SPUwE2lWiRriTWYZ6bjSrKxAAKzNIepIx5VmJZux6bXcEqQE8Cx7wmw5jTlXH/leD+DppP7DR2RM+S3z7CN1ANw31JfyH2595ASiTf3eDEbrI13rAWxNtFfrI9We6FQLoHDnI33q4dFHetaXHn2kPBcfWXlZWoUSZO7i40Ou9JEer++NyecgrY90bKh786+NfX3kFKZhZjfmEBof+WGZFnV9NcZCxjRbTmP+g4+4CJU+4iJU+oiLBKWPuAmVPuImUPqIm0DpI25CLz4xkI/EP98YwkdMzjdS+4jp+UYqH0lyvmHtI0nPNwx8ZDzfGJN95R1KhmNK3DnZlgAAAABJRU5ErkJggg=="
                alt="figma--v1"
              ></img>
            </div>
          </div>

          {/* <div className=' flex justify-center items-center h-[532px]'>
                        <img className='h-[450px] w-[350px]' src={img3} alt="" />
                    </div> */}
        </div>
      </div>
      {contact && <Contact contact={setcontact} />}
    </>
  );
}

export default Main;
