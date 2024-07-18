import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import {
  saveMarkdownToFirestore,
  getMarkdownFromFirestore,
} from "./firebase/firebasemarkdown";

const MarkdownEditor: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>("Loading...");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const noteData = await getMarkdownFromFirestore();
      if (noteData) {
        setMarkdownContent(noteData.content);
      } else {
        setMarkdownContent(`### To-Do List\n\n- [ ] Task 1\n- [x] Task 2`);
      }
    };
    fetchMarkdown();
  }, []);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSave = async () => {
    try {
      await saveMarkdownToFirestore(markdownContent, password);
      toggleEditMode();
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  return (
    <div className="items-center border border-gray-300 dark:border-gray-600 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          To-Do List
        </h2>
        <button
          className="px-2 py-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md"
          onClick={toggleEditMode}
        >
          {editMode ? "Preview" : "Edit"}
        </button>
      </div>
      {editMode ? (
        <>
          <textarea
            value={markdownContent}
            onChange={(e) => setMarkdownContent(e.target.value)}
            className="w-full h-64 p-2 border border-gray-300 dark:border-gray-600 rounded-md resize-none text-gray-800 dark:text-gray-200 bg-white dark:bg-black"
            placeholder="Start doing something..."
          />
          <div className="flex items-center mt-4">
            <label
              htmlFor="password"
              className="mr-2 text-gray-800 dark:text-gray-200"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 bg-white dark:bg-black"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            >
              Save
            </button>
            <button
              onClick={toggleEditMode}
              className="px-4 py-2 bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-200 rounded-md"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg">
          <ReactMarkdown remarkPlugins={[gfm]}>{markdownContent}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default MarkdownEditor;
