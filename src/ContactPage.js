import React, { useEffect, useState } from "react";
import RevealComponent from "./RevealComponent";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { toast } from "react-hot-toast";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [internetstate, setinternetstate] = useState("");
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      window.navigator.onLine
        ? setinternetstate("on")
        : setinternetstate("off");
    }
  }, [internetstate]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "UserData"), orderBy("timestamp")),
        (snapshot) => {
          setFormData(snapshot.docs);
        }
      ),
    [db]
  );

  const sendData = async (e) => {
    e.preventDefault();
    const nametosend = name;
    setname("");
    const emailtosend = email;
    setemail("");
    const subjecttosend = subject;
    setsubject("");
    const messagetosend = message;
    setmessage("");
    const notification = toast.loading("Your message has been uploading");

    if (nametosend != "" && email != "" && subject != "" && message != "") {
      await addDoc(collection(db, "UserData"), {
        name: nametosend,
        email: emailtosend,
        subject: subjecttosend,
        message: messagetosend,
        timestamp: serverTimestamp(),
      });

      toast.success("Successfully Uploaded ,Thankyou for connecting...", {
        id: notification,
      });
      setLoading(false);
    } else {
      toast.error("Must filled all fields...", {
        id: notification,
      });
    }
  };

  return (
    <div>
      <div className="  grid grid-cols-9 text-white px-2 sm:px-0">
        <div className=" col-span-9 sm:col-span-4 ">
          <RevealComponent>
            <form
              action=""
              className="flex flex-col space-y-4 "
              id="contactForm"
            >
              <div className="flex  space-x-2">
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Full Name"
                  className="input max-w-full placeholder:text-[#9ca3af] "
                />
                <input
                  type="text"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Email"
                  className="input "
                />
              </div>
              <input
                type="text"
                required
                placeholder="Subject"
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
                id="subject"
                className="input"
              />
              <textarea
                cols="10"
                rows="6"
                id="textarea"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                className="input"
                placeholder="Message"
              ></textarea>
              <div className=" py-2">
                <button
                  onClick={sendData}
                  type="submit"
                  className="w-44 border border-white/50 text-center flex items-center justify-center h-12 rounded-full text-white"
                >
                  Discuss the project
                </button>
              </div>
            </form>
          </RevealComponent>
        </div>
        <div className=" col-span-0 sm:col-span-1"></div>
        <div className=" col-span-9 sm:col-span-4 mt-14 ">
          <RevealComponent>
            <p className=" text-[#9ca3af] text-lg font-marlinGeoSQlight">
              Get in touch{" "}
            </p>
            <p className="text-[bfbfc6] text-3xl  sm:text-[40px] font-marlinGeoSQBold">
              yash2722003@gmail.com
            </p>
            <p className=" text-[#9ca3af] text-base mt-3 font-marlinGeoSQlight">
              +91-9310671906
            </p>
            <p className=" text-[#9ca3af] text-base mt-1 font-marlinGeoSQlight">
              Haryana , India
            </p>
          </RevealComponent>

          <div className=" mt-14 flex space-x-7 sm:space-x-16 text-[#b1bac6] text-xl">
            <RevealComponent>
              <p>Twitter</p>
            </RevealComponent>
            <RevealComponent>
              <a
                href="https://www.linkedin.com/in/yashsharma2723/"
                target="_blank"
              >
                <p>Linkedin</p>
              </a>
            </RevealComponent>
            <RevealComponent>
            <a
                    href="https://github.com/Yashsharma12345678"
                    target="_blank"
                  >
                    <p>Github</p>
                  </a>
            </RevealComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
