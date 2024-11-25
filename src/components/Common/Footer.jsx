import React from "react"
// Icons
import {
  FaCopyright,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"
import {  FaLinkedinIn } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png"
import { FooterLink2 } from "../../data/footer-links"

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"]
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
]
const Plans = ["Paid memberships", "For students", "Business solutions"]
const Community = ["Forums", "Chapters", "Events"]

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="relative mx-auto flex w-11/12 max-w-maxContent items-center justify-between gap-8 py-14 leading-6 text-richblack-400 lg:flex-row">
        <div className="flex w-[100%] flex-col border-b border-richblack-700 pb-5 lg:flex-row">
          {/* Section 1 */}
          <div className="flex flex-row flex-wrap justify-between gap-3 pl-3 lg:w-[50%] lg:border-r lg:border-richblack-700 lg:pr-5">
            <div className="mb-7 flex w-[30%] flex-col gap-3 lg:w-[30%] lg:pl-0">
              <img src={Logo} alt="" className="object-contain" />
              <h1 className="text-[16px] font-semibold text-richblack-50">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="cursor-pointer text-[14px] transition-all duration-200 hover:text-richblack-50"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  )
                })}
              </div>
              <div className="flex gap-3 text-lg">
                <Link to='https://www.instagram.com/gyan_dangi/'><FaInstagram className="hover:scale-125 transition-all duration-75 hover:text-pink-300" /></Link>
                <Link to='https://x.com/Gyan8356'><FaTwitter className="hover:scale-125 transition-all duration-75 hover:text-blue-100" /></Link>
                <Link to='https://github.com/GyanDangi'><FaGithub className="hover:scale-125 transition-all duration-75 hover:text-white" /></Link>
                <Link to='https://www.linkedin.com/in/gyandangi/'><FaLinkedinIn className="hover:scale-125 transition-all duration-75 hover:text-white
                 hover:bg-blue-200 rounded-sm px-[2px]" /></Link>
              </div>
              <div></div>
            </div>

            <div className="mb-7 w-[48%] lg:w-[30%] lg:pl-0">
              <h1 className="text-[16px] font-semibold text-richblack-50">
                Resources
              </h1>

              <div className="mt-2 flex flex-col gap-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer text-[14px] transition-all duration-200 hover:text-richblack-50"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  )
                })}
              </div>

              <h1 className="mt-7 text-[16px] font-semibold text-richblack-50">
                Support
              </h1>
              <div className="mt-2 cursor-pointer text-[14px] transition-all duration-200 hover:text-richblack-50">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="mb-7 w-[48%] lg:w-[30%] lg:pl-0">
              <h1 className="text-[16px] font-semibold text-richblack-50">
                Plans
              </h1>

              <div className="mt-2 flex flex-col gap-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer text-[14px] transition-all duration-200 hover:text-richblack-50"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  )
                })}
              </div>
              <h1 className="mt-7 text-[16px] font-semibold text-richblack-50">
                Community
              </h1>

              <div className="mt-2 flex flex-col gap-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer text-[14px] transition-all duration-200 hover:text-richblack-50"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-row flex-wrap justify-between gap-3 pl-3 lg:w-[50%] lg:pl-5">
            {FooterLink2.map((ele, i) => {
              return (
                <div key={i} className="mb-7 w-[48%] lg:w-[30%] lg:pl-0">
                  <h1 className="text-[16px] font-semibold text-richblack-50">
                    {ele.title}
                  </h1>
                  <div className="mt-2 flex flex-col gap-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="cursor-pointer text-[14px] transition-all duration-200 hover:text-richblack-50"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto flex  w-full flex-row justify-between pb-14 text-sm text-richblack-400">
        <div className=" mx-auto mt-4 flex w-11/12 max-w-maxContent  flex-col items-center gap-5 text-richblack-400 lg:flex-row lg:justify-between">
          <div className="flex flex-row gap-2">
            <p className=" border-r-2 border-richblack-700 px-4">
              Privacy Policy
            </p>
            <p className=" border-r-2 border-richblack-700 px-4">
              Cookies Policy
            </p>
            <p className=" px-4">Terms</p>
          </div>

          <div className=" flex flex-row items-center gap-2">
            Made With
            <FaHeart color="#e6005c" />
            GyanPrakash
            <FaCopyright />
            2024 StudyNotion
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
