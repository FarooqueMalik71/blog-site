"use client";
import { useState, useEffect } from "react";

export default function CommentSection() {
  interface Comment {
    name: string;
    comment: string;
    id: number;
  }

  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Load comments from local storage on component mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(savedComments);
  }, []);

  // Save comments to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (name.trim() && comment.trim()) {
      const newComment = { name, comment, id: Date.now() };
      setComments([newComment, ...comments]);
      setName("");
      setComment("");
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Comment<span className="text-blue-600"> Section</span></h1>

      {/* Input Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Your Comment
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your comment here..."
          ></textarea>
        </div>
        <button
          onClick={handleAddComment}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Add Comment
        </button>
      </div>

      {/* Comment List */}
      <div className="w-full max-w-2xl">
        {comments.length > 0 ? (
          comments.map((c) => (
            <div
              key={c.id}
              className="bg-white shadow rounded-lg p-4 mb-4 flex flex-col"
            >
              <p className="font-semibold text-gray-800">{c.name}</p>
              <p className="text-gray-600 mt-1">{c.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}
