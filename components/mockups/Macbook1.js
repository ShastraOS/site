import { WindowMockup } from "react-mockup";
import "react-mockup/dist/index.css";
import "html5-device-mockups/dist/device-mockups.min.css";
import { Macbook } from "react-device-mockups";
import { MdCode, MdOutlineDownload } from "react-icons/md";

export default function Macbook1() {
    return (
        <>
        <Macbook
              width="100%"
              orientation="landscape"
              color="black"
              buttonProps={{
                onClick: () => alert("Home Button Clicked!"),
              }}
            >
              <iframe
                title="showcase"
                src="/screen02.png"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "fixed",
                }}
              />
            </Macbook>
        </>
    )
}
