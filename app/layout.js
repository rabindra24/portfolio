import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Rabindra || Full Stack Developer || MERN STACK || NEXT JS || REACT JS",
  description: `Hi, I'm Rabindra, a top full-stack developer with expertise in digital marketing and SEO. I create high-performance, SEO-friendly software, making me the best choice for all your development needs.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>
        <Navbar />
        {children}

        {/* <script id="messenger-widget-b" src="https://cdn.botpenguin.com/website-bot.js" defer>653cbd803a66a377bb981206,653cbd6adde3d8070d76bb35</script> */}

        {/* <script type="text/javascript">
          {(function (d, t) {
            var v = d.createElement(t),
              s = d.getElementsByTagName(t)[0];
            v.onload = function () {
              window.voiceflow.chat.load({
                verify: { projectID: "655180a8d549fb0007080829" },
                url: "https://general-runtime.voiceflow.com",
                versionID: "production",
              });
            };
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
            v.type = "text/javascript";
            s.parentNode.insertBefore(v, s);
          })(document, "script")}
        </script> */}
      </body>
    </html>
  );
}
