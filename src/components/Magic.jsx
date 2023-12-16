import { useState, useEffect, useRef } from "react";
import axios from "../API/axios";
import "./Magic.scss";

const Magic = () => {
  const [link, setLink] = useState("");
  const [articleLink, setArticleLink] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [summery, setSummery] = useState("");
  const [err, setErr] = useState({});
  const [loading,setLoading] = useState(false)

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        return;
      } else {
        handleMagic(link);
      }
    }
  };

  const handleMagic = (url) => {
    if (link.trim() !== "") {
      //Saving history to the local storage

      let history = localStorage.getItem("history");
      let updatedHistory = [];

      if (history) {
        updatedHistory = JSON.parse(history);
        updatedHistory.push(link);

        if (updatedHistory.length > 5) {
          updatedHistory = updatedHistory.slice(updatedHistory.length - 5);
        }
      } else {
        updatedHistory = [link];
      }

      //Retrieving the history from the local storage

      localStorage.setItem("history", JSON.stringify(updatedHistory));
      setArticleLink(updatedHistory);
      inputRef.current.value = "";
      setLink("");
    }
    setSummery("")
    setLoading(true)

    //API Call

    const options = {
      method: "GET",
      url: "/summarize",
      params: {
        url: `${url}`,
        length: "3",
      },
    };

    axios
      .request(options)
      .then((response) => {
        let res = response.data.summary;
        setSummery(res);
        // console.log(res);
        setLoading(false)
      })
      .catch((error) => {
        // console.error("Error:", error);
        // console.log("Message:", error.message);
        setErr(error);
        setLoading(false)
      });
  };

  const handleCopy = (copyLink, index) => {
    setClickedIndex(index);
    navigator.clipboard.writeText(copyLink);
    setTimeout(() => {
      setClickedIndex(null);
    }, 1000);
  };

  useEffect(() => {
    const storedHistory = localStorage.getItem("history");
    if (storedHistory !== null) setArticleLink(JSON.parse(storedHistory));
  }, []);

  return (
    <>
      <section>
        <div className="magic_container">
          <div className="magic_input">
            <div className="link_img">
              <i className="fa-solid fa-link"></i>
            </div>
            <input
              ref={inputRef}
              type="text"
              placeholder="Paste the article link."
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={() => handleMagic(link)}
              disabled={link.trim() === ""}
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>

          {articleLink.map((item, index) => (
            <div key={index} className="magic_history">
              <button
                onClick={() => {
                  handleCopy(item, index);
                }}
              >
                {clickedIndex === index ? (
                  <i className="fa-solid fa-check"></i>
                ) : (
                  <i className="fa-regular fa-copy"></i>
                )}
              </button>
              <input type="text" value={item} readOnly />
            </div>
          ))}

          {
            loading ? (
              <span className="magic_loader"></span>
            ) : (
              summery ? (
                <div className="magic_summery">
                  <div className="magic_sum_title">
                    <h4>
                      Article <span>Summary</span>
                    </h4>
                  </div>
                  <div className="magic_sum_article">
                    <p>{summery}</p>
                  </div>
                </div>
              ) : (
                err.message ? (
                  <div className="magic_summary_error">
                    <h4>Oops that was not supposed to be happend!</h4>
                    <p>
                      Error : <span>{err.message}</span>
                    </p>
                  </div>
                ) : (
                  ""
                )
              )
            )
          }
        </div>
      </section>
    </>
  );
};

export default Magic;
