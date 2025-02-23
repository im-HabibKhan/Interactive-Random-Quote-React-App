import { useState, useEffect } from "react";

const QuotesApp = () => {

    const [quote, setQuote] = useState({
        text: "Click on the New Quote Button to read the latest Anime Quote",
        animeName: "Anime",
        charName: "Character"
    });

    const [favorites, setFavorites] = useState([]);
    const [history, setHistory] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    // Load quotes from localStorage on component mount
    useEffect(() => {
        const storedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
        setHistory(storedQuotes);
    }, []);

    // Function to fetch a new anime quote
    const fetchNewQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/quote"); // Fetch from your backend
            console.log(response);
            if (!response.ok) {
            throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            const jsonData = data.data;
            const newQuote = {
                text: jsonData.content,
                animeName: jsonData.anime.name,
                charName: jsonData.character.name,
            };
            setQuote(newQuote);
            setError(null);
            setLoading(false);

            // Update history with the new quote
            const updatedHistory = [newQuote, ...history].slice(0, 10); // Keep only last 10
            setHistory(updatedHistory);
            localStorage.setItem("quotes", JSON.stringify(updatedHistory));
        } 
        catch (err) {
            setError("Failed to load quote");
        }
    };
    
    const toggleFavorites =() =>{
        setShowFavorites(!showFavorites)
    }
    
    const toggleHistory =() =>{
        setShowHistory(!showHistory)
    }

    const addToFavorites = () => {
        const isAlreadyInFavorites = favorites.some((fav) => 
            fav.text === quote.text &&
            fav.charName === quote.charName &&
            fav.animeName === quote.animeName)

        if (!isAlreadyInFavorites) {
            setFavorites([...favorites, quote])
        }
    }

    return (
        <div className="container">
            <div className="quotes-app">
                <h1 className="app-heading">...Quotes</h1>
                <i className="bx bxs-heart fav-icon" onClick={toggleFavorites}></i>
                <i className="bx bx-history hist-icon" onClick={toggleHistory}></i>
                
                {loading && <p className="loading">. . . . .L O A D I N G</p>}
                {error && <p className="error">{error}</p>}

                {quote && (
                <div className="quote">
                    <i className="bx bxs-quote-alt-left left-quote"></i>
                    <p className="quote-text">{quote.text}</p>
                    <p className="quote-author">
                    — {quote.charName}, <span className="animeNameStyle">{quote.animeName}</span>
                    </p>
                    <i className="bx bxs-quote-alt-right right-quote"></i>
                </div>
                )}

                <div className="buttons">
                    <button className="btn btn-new" onClick={fetchNewQuote}>New Quote</button>
                    <button className="btn btn-fav" onClick={addToFavorites}>Add to Favorites</button>
                </div>
                {showFavorites && (
                    <div className="favorites">
                        <button className="btn-close cross-icon" onClick={toggleFavorites}>
                            <i className="bx bx-x"></i>
                        </button>
                        {favorites.map((favQuote, index) =>
                            <div className="fav-quote" key={index}>
                                <div className="fav-quote-delete">
                                    <i className="bx bx-x-circle" onClick={() => {
                                        const updatedFavorites = favorites.filter((item, i) => i!==index)
                                        setFavorites(updatedFavorites)
                                    }}></i>
                                </div>
                                <div className="fav-quote-content">
                                    {/*<div className="fav-quote-text">
                                        fav random quote
                                    </div>
                                    <div className="fav-quote-author">
                                        fav random author
                                    </div>*/}
                                    <p className="fav-quote-text">{favQuote.text}</p>
                                    <p className="fav-quote-author">{favQuote.charName}, <span>{favQuote.animeName}</span></p>
                                    <br/>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {showHistory && (
                    <div className="history">
                        <button className="btn-close cross-icon"  onClick={toggleHistory}>
                                <i className="bx bx-x"></i>
                        </button>
                        <div className="hist-quote">

                            <div className="hist-quote-content">
                                <ol className="hist-quote-text">
                                    {history.map((q, index) => (
                                    <><li key={index}>
                                            <p className="hist-quote-text">{q.text}</p>
                                            <p className="hist-quote-author">{q.charName}, <span>{q.animeName}</span></p>
                                        </li><hr /></>
                                    ))}
                                </ol>
                                {/*<div className="hist-quote-text">
                                    history random quote
                                </div>
                                <div className="hist-quote-author">
                                    history random author
                                </div>*/}
                            </div>
                        </div>
                        <div className="buttons" style={{position: "fixed" }}>
                            <button className="btn btn-del" onClick={() => { 
                                        localStorage.removeItem("quotes"); 
                                        setHistory([]); 
                                    }}>
                                Clear History
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuotesApp;