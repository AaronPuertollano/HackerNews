import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://hacker-news.firebaseio.com/v0/newstories.json";

function BestStorys() {
  const [stories, setStories] = useState([]);
  const [storyIds, setStoryIds] = useState([]);
  const [count, setCount] = useState(10);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((ids) => setStoryIds(ids))
      .catch((error) => console.error("Error al cargar historias:", error));
  }, []);

  useEffect(() => {
    if (storyIds.length === 0) return;

    const fetchStories = storyIds
      .slice(0, count)
      .map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (res) => res.json(),
        ),
      );

    Promise.all(fetchStories)
      .then((data) => setStories(data))
      .catch((error) => console.error("Error al obtener historias:", error));
  }, [storyIds, count]);

  const formatUnixTime = (unix) => {
    return new Date(unix * 1000).toLocaleString();
  };

  return (
    <div>
      <h1>Newest Hacker News</h1>
      <p>This is the news more recent now.</p>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
            <p>
              By <Link to={`/user/${story.by}`}>{story.by}</Link> | Score:{" "}
              {story.score} | Time: {formatUnixTime(story.time)}
            </p>
          </li>
        ))}
      </ul>

      <button onClick={() => setCount((prev) => prev + 10)}>MORE NEWS</button>
    </div>
  );
}

export default BestStorys;
