import "./App.css"
import profileImg from "./assets/manishprofile.png"
import project1 from "./assets/recipe.png"
import project2 from "./assets/link shortner.png"
import project3 from "./assets/generegames.png"
import project4 from "./assets/blogProject.png"
import linkedin from "./assets/10464412.png"
import github from "./assets/github.png"
import { FaArrowCircleDown } from "react-icons/fa";
import aboutImage from "./assets/animatebanner.gif"
import { PiStudentFill } from "react-icons/pi";
import { GiAchievement } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";


function App() {


  return (
    <>
      <header >


        <div className=" container m-auto px-4 py-6 ">
          <div className=" flex justify-between items-center ">

            <div>
              <h1 className=" font-bold text-xl  ">Manish <span className=" text-red-600">Portfolio</span></h1>
            </div>


            <div>
              <ul className=" flex gap-3">

                <li>
                  <a href="#project" className=" text-gray-400 hover:text-white cursor-pointer sm:border sm:px-6 sm:py-3 hover:bg-slate-600">Projects</a>
                </li>
                <li>
                  <a href="#technologies" className=" text-gray-400 hover:text-white cursor-pointer sm:border sm:px-6 sm:py-3 hover:bg-slate-600">Technologies</a>
                </li>
                <li>
                  <a href="#aboutus" className=" text-gray-400 hover:text-white cursor-pointer sm:border sm:px-6 sm:py-3 hover:bg-slate-600">About Me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* intro / banner */}
      <main>
        <section>
          <div className=" container m-auto px-4 py-10 flex flex-col sm:flex-row gap-6">

            <div >
              <h1 className=" font-bold text-4xl">Hello,I'm Manish Kumar,</h1>
              <h2 className=" font-bold text-4xl mt-1 gradient-text running-text">full-stack developer,</h2>
              <p className="mt-4 text-gray-400 text-wrap overflow-hidden">
                Full Stack Developer: Crafting Seamless Solutions from Frontend to Backend, Seeking to Apply Competent Development Skills with Focus on Collaboration, Communication, and Passion. Dedicated to Building Innovative and User-Centric Applications Through Agile Development Practices
              </p>
              <div className=" flex gap-6">
                <a className=" text-black text-xl font-bold" href="https://drive.google.com/file/d/1b0FkL08GE3rRG1vPyYcU9IMQ7gioyx23/view" download>
                  <div className=" cursor-pointer flex justify-center gap-2 text-center  bg-gradient-to-tr from-purple-500 to-yellow-500 py-3 w-[150px] sm:w-[200px] h-[50px] mt-5 rounded-full ">
                    <h2>Resume</h2>
                    <FaArrowCircleDown className=" animate-drop slide mt-2" />
                  </div>
                </a>
                <a className=" text-black text-xl font-bold" href="https://github.com/manish91023" target="_blank">
                  <div className=" cursor-pointer flex justify-center gap-2 text-center  bg-gradient-to-tr from-green-500 to-yellow-500 py-3 w-[150px] sm:w-[200px] h-[50px] mt-5 rounded-full ">
                    <h2>Github</h2>
                    <img className=" ml-2 mt-2 animate-bounce" src={github} alt="" width={25} />
                  </div>
                </a>
              </div>

            </div>


            <div>

              <div className=" w-[300px] relative mt-4">

                <img className="  rounded-full w-[200px] sm:w-[520px] m-auto" src={profileImg} alt="Profile Image" />

                <div className=" hidden md:block w-[200px] h-[200px] sm:w-[340px] sm:h-[320px]  bg-gradient-to-r from-purple-900 to-emerald-500 rounded-full absolute -top-7 -left-5 -z-10">

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* project section  */}
        <section className=" overflow-y-scroll h-[100vh]">
          <div className=" container m-auto px-4">
            <h2 id="project" className=" text-2xl font-semibold ">Project</h2>
            <div className=" flex  sm:flex-row flex-col gap-10 mt-11 w-full ">
              <div className=" border border-gray-500 p-3 rounded-md flex-grow">
                <img src={project1} alt="" width={700} />
                <h3 className=" text-lg font-bold mt-5">Recipe Book app demo</h3>
                <p className=" text-gray-400 mt-4">this recipe book are fully build in react vite technology and backend use Nodejs express  framework.</p>

                <div className=" flex  mt-2 gap-2 justify-evenly">
                  <a href="https://manishrecipe.netlify.app" target="_blank"> <button className=" px-10 py-2 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-cyan-500 hover:to-blue-700">Live Preview</button></a>
                  <a href="https://github.com/manish91023/CodeClauseInternship_Recipe-Book" target="_blank"> <button className=" px-6 py-2 border rounded-full hover:bg-blue-600">Checkout github</button></a>
                </div>

              </div>

              <div className=" border border-gray-500 p-5 rounded-md flex-grow">
                <img src={project2} alt="" width={700} />
                <h3 className=" text-lg font-bold mt-5">Recipe Book app demo</h3>
                <p className=" text-gray-400 mt-4">this recipe book are fully build in react vite technology and backend use Nodejs express  framework.</p>

                <div className=" flex  mt-2 gap-2 justify-evenly">
                  <a href="https://manishlinkshortner.netlify.app" target="_blank"> <button className=" px-10 py-2 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-cyan-500 hover:to-blue-700">Live Preview</button></a>
                  <a href="https://github.com/manish91023/CodeClauseInternship_Project_Linkshortner" target="_blank"> <button className=" px-6 py-2 border rounded-full hover:bg-blue-600">Checkout github</button></a>
                </div>

              </div>

            </div>
            <div className=" flex  sm:flex-row flex-col gap-10 mt-11 w-full ">
              <div className=" border border-gray-500 p-3 rounded-md flex-grow">
                <img src={project3} alt="" width={700} />
                <h3 className=" text-lg font-bold mt-5">Recipe Book app demo</h3>
                <p className=" text-gray-400 mt-4">this recipe book are fully build in react vite technology and backend use Nodejs express  framework.</p>

                <div className=" flex  mt-2 gap-2 justify-evenly">
                  <a href="https://generegames.netlify.app" target="_blank"> <button className=" px-10 py-2 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-cyan-500 hover:to-blue-700">Live Preview</button></a>
                  <a href="https://github.com/manish91023/Generes-Game" target="_blank"> <button className=" px-6 py-2 border rounded-full hover:bg-blue-600">Checkout github</button></a>
                </div>

              </div>

              <div className=" border border-gray-500 p-5 rounded-md flex-grow">
                <img src={project4} alt="" width={700} />
                <h3 className=" text-lg font-bold mt-5">Recipe Book app demo</h3>
                <p className=" text-gray-400 mt-4">this recipe book are fully build in react vite technology and backend use Nodejs express  framework.</p>

                <div className=" flex  mt-2 gap-2 justify-evenly">
                  <a href="https://manishblog.netlify.app/article-list" target="_blank"> <button className=" px-10 py-2 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-cyan-500 hover:to-blue-700">Live Preview</button></a>
                  <a href="https://github.com/manish91023/CodeClauseInternship_Project_Linkshortner" target="_blank"> <button className=" px-6 py-2 border rounded-full hover:bg-blue-600">Checkout github</button></a>
                </div>

              </div>

            </div>

          </div>
        </section>
        <section>
          {/* technology section */}
          <section className=" mt-12">
            <div className=" container m-auto px-4">
              <h2 id="technologies" className=" text-2xl font-semibold">Technologies</h2>

              <div className="mt-8">
                <div className=" flex justify-between items-center">
                  <h2 className=" text-lg font-semibold ">HTML</h2>
                  <p className=" text-gray-500 ">Advanced</p>
                </div>
                <span className=" w-full mt-2 h-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className=" flex justify-between items-center">
                  <h2 className=" text-lg font-semibold ">CSS, Boootstrap & Tailwind</h2>
                  <p className=" text-gray-500 ">Advanced</p>
                </div>
                <span className=" w-[100%] mt-2 h-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div><div className="mt-8">
                <div className=" flex justify-between items-center">
                  <h2 className=" text-lg font-semibold ">JavaScript, NodeJs,Express</h2>
                  <p className=" text-gray-500 ">Advanced</p>
                </div>
                <span className=" w-full mt-2 h-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div><div className="mt-8">
                <div className=" flex justify-between items-center">
                  <h2 className=" text-lg font-semibold ">React(Vite)</h2>
                  <p className=" text-gray-500 ">Advanced</p>
                </div>
                <span className=" w-[85%] mt-2 h-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div><div className="mt-8">
                <div className=" flex justify-between items-center">
                  <h2 className=" text-lg font-semibold ">MongoDB,MySql</h2>
                  <p className=" text-gray-500 ">Advanced</p>
                </div>
                <span className=" w-[80%] mt-2 h-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div><div className="mt-8">
                <div className=" flex justify-between items-center">
                  <h2 className=" text-lg font-semibold ">Git,github,Postman,Netlify</h2>
                  <p className=" text-gray-500 ">Advanced</p>
                </div>
                <span className=" w-[90%] mt-2 h-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>


            </div>

          </section>

          {/* additional skills and technology */}
          <section>
            <div className=" container px-4 m-auto py-14">
              <h1 className=" text-2xl font-semibold">Additional Skills & Technologies</h1>

              <div className=" flex flex-col sm:flex-row  justify-between">
                <div>
                  <p className=" font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:rounded-full before:block before:align-middle mt-2 before:-left-5 before:absolute before:mt-1 relative left-3">Python,C++</p>
                </div>

                <div>
                  <p className=" font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:rounded-full before:block before:align-middle mt-2 before:-left-5 before:absolute before:mt-1 relative left-3">Java(DSA)</p>
                </div>

                <div>
                  <p className=" font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:rounded-full before:block before:align-middle mt-2 before:-left-5 before:absolute before:mt-1 relative left-3">Quicklearning</p>
                </div>

                <div>
                  <p className=" font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:rounded-full before:block before:align-middle mt-2 before:-left-5 before:absolute before:mt-1 relative left-3">Teamwork</p>
                </div>


              </div>
            </div>
          </section>

          {/* about section  */}

          <section className="py-8">

            <div id="aboutus">
              < p className=" text-center text-3xl font-bold my-8">About Us</p>
            </div>

            <div className=" container m-auto px-4">
              <div className=" flex flex-col sm:flex-row">

                <div className=" w-[100%] h-[400px] mx-[20px] sm:mx-0">
                  <img className="w-[310px] h-[310px] sm:w-[400px] sm:h-[400px] rounded-lg" src={aboutImage} alt="" />
                </div>
                <div className=" w-[100%] ">
                <div className=" flex flex-wrap gap-2 justify-center ">
                  <div className=" bg-[#1f3057] w-[150px] h-[220px] py-2  rounded-lg hover:bg-transparent border transition-all ">
                    <GiAchievement className=" mx-auto" />
                    <h2 className=" text-center font-bold">Student</h2>
                    <p className=" text-center">VINAYAKA MISSION RESEARCH FOUNDATION (2022-26)</p>
                  </div>

                  <div className=" bg-[#1f3057] w-[150px] h-[220px] py-2  rounded-lg hover:bg-transparent border transition-all ">
                    <PiStudentFill className=" mx-auto" />
                    <h2 className=" text-center font-bold">Course</h2>
                    <p className=" text-center"> B.E(Computer Science & Engineering)</p>
                  </div>

                  <div className=" bg-[#1f3057] w-[150px] h-[220px] py-2  rounded-lg hover:bg-transparent border transition-all ">
                    <FaProjectDiagram className=" mx-auto" />
                    <h2 className=" text-center font-bold">Projects</h2>
                    <p className=" text-center">3+ Completed</p>
                  </div>
                </div>
                <div className=" my-4">
                   <p className=" font-serif">
                   I am looking for an Entry-level position in the field of Mern stack Development or Software Development. Currently pursuing Distance MCA from Chandigarh University, And I have a good knowledge of Java, Reactjs, NodeJs, Express Js, MongoDB, C, C++, Data Structures and Algorithms, HTML, CSS and JavaScript. Looking for an Internship opportunity or a Full-time opportunity as a Software Developer to follow my passion and that is Solving Problems.
                   </p>
                </div>
                </div>
              </div>
            </div>
            <div className=" container m-auto px-4 ">
              <h1 className=" text-3xl font-bold text-green-500">EDUCATION</h1>
              <div className=" relative before:absolute before:top-0 before:left-0 before:bottom-0 before:w-2 before:bg-white before:rounded-lg ">
                <div className=" mx-8">
                  <div className=" text-white   inset-0   h-[192px] mt-4 px-2 sm:px-12 sm:py-6 rounded-lg bg-gradient-to-tr from-[#000] to-[#3533cd] before:w-6 before:h-6 before:bg-green-500 before:rounded-full before:border before:absolute before:-left-2 before:top-0 before:block">
                    <h2 className=" font-bold text-2xl text-green-500">2018 - 2019</h2>
                    <h1 className=" text-2xl  font-bold text-yellow-200">High School Degree/10th</h1>
                    <p className="font-serif sm:font-bold">UTKARMIT MADHYA VIDYAKAY,GANGAKARHARRIYA <span>Bihar,India</span></p>
                    <p>Percentage : 82%</p>
                  </div>
                  <div className=" text-white h-[170px] mt-4 px-2 sm:px-12 sm:py-6 rounded-lg bg-gradient-to-tr from-[#000] to-[#3533cd] before:w-6 before:h-6 before:bg-green-500 before:rounded-full before:border before:absolute before:-left-2 before:top-[185px] before:block">
                    <h2 className="font-bold text-2xl text-green-500">2019 - 2021</h2>
                    <h1 className=" text-2xl  font-bold text-yellow-200">INTERMEDIATE/12th</h1>
                    <p className=" font-serif sm:font-bold">SABOUR COLLEGE SABOUR <span>Bihar,India</span></p>
                    <p className=" font-sans">Percentage : 81%</p>
                  </div>
                  <div className=" text-white h-[170px] mt-4 px-2 sm:px-12 sm:py-6 rounded-lg  bg-gradient-to-tr from-[#000] to-[#3533cd] before:w-6 before:h-6 before:bg-green-500 before:border before:rounded-full before:block before:absolute before:-left-2 before:top-[370px]">
                    <h2 className="font-bold text-2xl text-green-500">2022 - 2026</h2>
                    <h1 className=" text-2xl  sm:font-bold text-yellow-200">BACHELOR'S DEGREE</h1>
                    <p className="font-serif sm:font-bold ">VINAYAKA MISSION RESEARCH FOUNDATION SALEM <span>Tamilnadu,India</span></p>
                    <p>CGPA : 8.9/10</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* footer  goes here*/}
          <section className=" py-8  text-[#fff] relative border-t-2 border-gray-300  ">
            <div className="  absolute  inset-0 md:bg-gradient-to-b from-transparent via-transparent to-slate-600 h-[200px] opacity-80  ">
              <div className=" container m-auto px-4 py-2 ">
                <div className=" flex flex-col px-4 font-normal  md:flex-row justify-between">
                  <div className="about-footer ">
                    <h1 className=" text-2xl font-bold ">Manish <span className=" text-red-400">Portfolio</span></h1>
                    <div className=" flex flex-wrap pt-3">
                      <p className="w-[350px]">Hello! I'm Manish Kumar, a passionate and dedicated web developer with a keen interest in creating seamless, user-friendly digital experiences. With a solid foundation in front-end technologies and a deep understanding of back-end systems</p>
                    </div>
                  </div>
                  <div className="pages">
                    <h1 className=" font-bold text-2xl">Pages </h1>
                    <div className=" pt-3">
                      <ul>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#technologies">Technologies</a></li>
                        <li><a href="#aboutus">About</a></li>
                      </ul>

                    </div>
                  </div>
                  <div className="contacts">
                    <h1 className=" font-bold text-2xl">Contact</h1>
                    <div className=" pt-3">
                      <p>Location : OMR Mahaballipuram Chennai,603104</p>
                      <p>Whatsapp : +919102336770</p>
                      <p>Email : <a href="mailto:manishgga09@gmail.com">manishgga09@gmail.com</a></p>
                    </div>

                  </div>
                  <div className="social-links">
                    <h2 className=" text-center font-bold  text-blue-600">Follow Me</h2>
                    <div className="flex flex-col gap-3 justify-center pt-2">
                      <div className=" w-[40px] h-[40px] rounded-full bg-orange-500 cursor-pointer ">
                        <a className="flex gap-3" target=" _blank" href="https://www.linkedin.com/in/manish-kumar-319125291/"><img src={linkedin} alt="" /><span className=" mt-2 font-bold">LinkedIn</span></a>
                      </div>
                      <div className=" w-[40px] h-[40px] rounded-full bg-orange-500 cursor-pointer">
                        <a className=" flex gap-4" target="_blank" href="https://github.com/manish91023">
                          <img className=" ml-2 mt-2" src={github} alt="" width={25} /><span className=" mt-2 font-bold">GitHub</span>
                        </a>

                      </div>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
