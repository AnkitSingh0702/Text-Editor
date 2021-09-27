import style from './Texteditor.module.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const TextEditor = () => {
  return (
    <div className={style.main}>
      <Editor
      className={style.wholeEditor}
        toolbarClassName={style.toolbarClassName}
        wrapperClassName={style.wrapperClassName}
        editorClassName={style.editorClassName}
      />
    </div>
  );
};

export default TextEditor;