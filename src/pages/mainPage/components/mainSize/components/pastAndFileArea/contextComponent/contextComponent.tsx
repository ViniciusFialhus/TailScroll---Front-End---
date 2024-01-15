import { useRef, useEffect, useState } from "react";
import { SetContextType } from "../../../../../../../types/userType";

import createNewFolder from '../../../../../../../assets/newFolderIcon/create_new_folder_24px.svg'
import addNote from '../../../../../../../assets/noteAddIcon/note_add_24px.svg'
import uploadFile from '../../../../../../../assets/uploadFileIcon/upload_file_24px.svg'
import "../../../../../../../styles/global.css";
import "./contextComponent.css";
import FormNewFile from "./components/createFile";
import FormNewFolder from "./components/createFolder";

function ContextComponent({
  xPos,
  yPos,
  setContext,
  path
}: {
  xPos: number;
  yPos: number;
  setContext: SetContextType;
  path: any
}) {
  const contextRef = useRef(null);
  const [modalNewFolder, setModalNewFolder] = useState(false);
  const [modalNewFile, setModalNewFile] = useState(false);

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleClickModalNewFile = () => {
    if (modalNewFolder) {
      setModalNewFolder(false);
      setModalNewFile(true);
    }
    setModalNewFile(true);
  };

  const handleClickModalNewFolder = () => {
    if (modalNewFile) {
      setModalNewFile(false);
      setModalNewFolder(true);
    }
    setModalNewFolder(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement; 
      if (
        contextRef.current &&
        !contextRef.current.contains(target) &&
        target &&
        !target.closest(".formNewFolderContainer")
      ) {
        setContext(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setContext]);


  return (
    <>
      <main
        ref={contextRef}
        className={`mainContext`}
        style={{ top: yPos, left: xPos }}
        onContextMenu={handleContextMenu}
      >
        <div className="pastOptions" onClick={handleClickModalNewFolder}>
          <img src={createNewFolder} alt="New File" />
          <h1>Nova Pasta</h1>
        </div>
        <hr className="hrIcon" />
        <div className="pastOptions" onClick={handleClickModalNewFile}>
          <img src={addNote} alt="New Folder" />
          <h1>Nova Ficha</h1>
        </div>
        <hr className="hrIcon" />
        <div className="pastOptions">
          <img src={uploadFile} alt="New Folder" />
          <h1>Upload de Ficha</h1>
        </div>
        <div className="pastOptions" id="finalyOptions" >
          <img src={uploadFile} alt="New Folder"/>
          <h1>Upload de Pastas</h1>
        </div>
       {modalNewFile && <FormNewFile path={path} xPos={xPos} yPos={yPos}/>}
       {modalNewFolder && <FormNewFolder  path={path} xPos={xPos} yPos={yPos} />}
      </main>
    </>
  );
}

export default ContextComponent;