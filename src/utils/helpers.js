export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  console.log(time);
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function formatTweet(post) {
  const { id, author, body, category, timestamp, commentCount, deleted,title , voteScore} = post;

  return {
  author,
body,
category,
commentCount,
deleted,
id,
timestamp,
title,
voteScore,
  
}
}