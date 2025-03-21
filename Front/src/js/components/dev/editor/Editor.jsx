import React, { useEffect, useMemo, useState, useCallback, useRef, useContext } from "react";
import axios from "axios";
import postService from "../../../services/postService";
import servicioCategorias from "../../../services/categoriesService";
import { AuthContext } from '../../../bootstrap/contexts/AuthContext';
import { useAlert } from "../../../bootstrap/contexts/AlertContext";
import { ErrorAlert, SuccessAlert } from '../Alerts/Alerts';

// import { Cloudinary } from 'cloudinary-react';

import { html, plainText } from '@yoopta/exports';
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import Paragraph from "@yoopta/paragraph";
import Blockquote from '@yoopta/blockquote';
import Accordion from '@yoopta/accordion';
import Code from '@yoopta/code';
import Embed from '@yoopta/embed';
import Image from '@yoopta/image';
import Link from '@yoopta/link';
import File from '@yoopta/file';
import Callout from '@yoopta/callout';
import Video from '@yoopta/video';
import { NumberedList, BulletedList, TodoList } from '@yoopta/lists';
import { HeadingOne, HeadingTwo, HeadingThree } from '@yoopta/headings';
import Table from '@yoopta/table';
import Divider from '@yoopta/divider';
import LinkTool, { DefaultLinkToolRender } from '@yoopta/link-tool';
import ActionMenu, { DefaultActionMenuRender } from '@yoopta/action-menu-list';
import Toolbar, { DefaultToolbarRender } from '@yoopta/toolbar';
import { Bold, Italic, CodeMark, Underline, Strike, Highlight } from '@yoopta/marks';

// import DeatallesBlog from "./PostDetails";
import "./Editor.css";

// const cloudinary = new Cloudinary({
//   cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
//   api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET
// });

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

// Image.extend({
//   options: {
//     async onUpload(file) {
//       const data = await uploadToCloudinary(file, 'image');

//       return {
//         src: data.secure_url,
//         alt: 'cloudinary',
//         sizes: {
//           width: data.width,
//           height: data.height,
//         },
//       };
//     },
//   },
// }),
const plugins = [Paragraph, Blockquote, Accordion, Code, Embed, Image.extend({
  options: {
    async onUpload(file) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'your_upload_preset'); // Configura esto en tu cuenta de Cloudinary

        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`, {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        return {
          src: data.secure_url,
          alt: data.original_filename,
          sizes: {
            width: data.width,
            height: data.height,
          },
        };
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw error;
      }
    },
  },
}), Link, File, Callout, Video, NumberedList, BulletedList, TodoList, HeadingOne, HeadingTwo, HeadingThree, Table, Divider];

const TOOLS = {
  Toolbar: {
    tool: Toolbar,
    render: DefaultToolbarRender,
  },
  ActionMenu: {
    tool: ActionMenu,
    render: DefaultActionMenuRender,
  },
  LinkTool: {
    tool: LinkTool,
    render: DefaultLinkToolRender,
  },
};

export default function Editor({ isEditable = true, post = null, maxLenght = null }) {
  // const { addError, addSuccess } = useAlert();

  const editor = useMemo(() => createYooptaEditor(), []);
  const [value, setValue] = useState({});
  // const [isPreview, setIsPreview] = useState(false);
  const [title, setTitle] = useState(post ? post.title : "");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(post ? post.id_categories : 0);
  // if (post) { console.log("selectedcat", selectedCategory); }
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const { loggedUser } = useContext(AuthContext);

  function changeTitle(event) {
    setTitle(event.target.value);
  }

  const onChange = (value, options) => {
    setValue(value);
  };

  const deserializeHTML = useCallback((htmlString) => {
    if (!htmlString) return [];
    try {
      return html.deserialize(editor, htmlString);
    } catch (error) {
      console.error('Error deserializing HTML:', error);
      return [];
    }
  }, [editor]);

  // from @yoopta content to html string
  const serializeHTML = () => {
    const data = editor.getEditorValue();
    const htmlString = html.serialize(editor, data);
    return htmlString;
  };

  const handleSave = async (status) => {
    serializeHTML();
    const userId = loggedUser.id;
    let data = {};
    let request = "";
    if (!post) {
      data = { id_categories: selectedCategory, user_id: userId, title: title, content: serializeHTML(), status: status };
      request = postService.createPost(data);
    } else {
      console.log("POST", post);
      data = { id_categories: post.id_categories, title: title, content: serializeHTML(), status: status };
      request = postService.editPost(post.id, data);
    }
    if (!selectedCategory) {
      setErrorMsg('Please select a category before saving.');
      return;
    }
    request
      .then(response => {
        setSuccessMsg(response.data.mensaje);
      })
      .catch(error => {
        const data = JSON.parse(error.request.response);
        setErrorMsg(data.error);
      });
  };

  const deletePost = async () => {
    if (!post) {
      setValue([]);
      editor.setEditorValue([]);
      return;
    }
    // const userId = localStorage.getItem('userId');
    // let data = { id_categories: selectedCategory, user_id: userId, title: title, content: serializeHTML(), status: status };
    let request = postService.deletePost(post.id);
    request
      .then(response => {
        console.log('Deleted:', response.data);
      })
      .catch(error => {
        const data = JSON.parse(error.request.response);
        setErrorMsg(data.error);
      });
  };

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!isEditable || hasFetched.current || categories.length > 0) return;

    servicioCategorias.getCategorias()
      .then(({ data }) => {
        hasFetched.current = true;
        setCategories(data);
      }).catch(error => {
        const data = JSON.parse(error.request.response);
        setErrorMsg(data.error);
      });
  }, [isEditable, categories.length]);

  useEffect(() => {
    if (post && post.content) {
      const deserializedValue = deserializeHTML(post.content);
      setValue(deserializedValue);
      editor.setEditorValue(deserializedValue);
    }
  }, [post, editor, deserializeHTML]);


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      {isEditable && (<div className="editor-title">
        <label htmlFor="post-title">Title:</label>
        <input
          type="text"
          id="post-title"
          defaultValue={title}
          onChange={(e) => changeTitle(e)}
        />
      </div>)}
      {isEditable && (<div className="categorie-dropdown">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Escoge categoria</span>
          </div>
          <select
            className="select select-bordered"
            onChange={handleCategoryChange}
            value={selectedCategory || ""}
          >
            <option value="" disabled>
              Elige una categoría
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>)}
      {errorMsg && <ErrorAlert msg={errorMsg} />}
      {successMsg && <SuccessAlert msg={successMsg} />}
      <div className="editor">
        <YooptaEditor
          editor={editor}
          placeholder="Type text.."
          plugins={plugins}
          tools={TOOLS}
          value={value}
          onChange={onChange}
          marks={MARKS}
          readOnly={!isEditable}
        />
      </div>
      {isEditable && (
        <div className="editor-btns">
          <button className="btn" onClick={() => handleSave("published")}>Publicar</button>
          <button className="btn" onClick={() => handleSave("draft")}>Guardar</button>
          <button className="btn btn-error" onClick={deletePost}>Borrar</button>
        </div>)}
    </>
  );
}