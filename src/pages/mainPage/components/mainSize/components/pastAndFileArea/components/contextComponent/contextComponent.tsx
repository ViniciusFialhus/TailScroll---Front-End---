import { useRef, useEffect, useState } from "react";
import { SetContextType } from "../../../../../../../../types/userType";
import FormNewFolder from "./components/formNewFolder/formNewFolder";
import FormNewFile from "./components/formNewFile/formNewFile";
import newBinder from "../../../../../../../../assets/newBinder.png";
import newFile from "../../../../../../../../assets/newFile.png";
import "../../../../../../../../styles/global.css";
import "./contextComponent.css";

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
        <div className="newFile" onClick={handleClickModalNewFile}>
          <img src={newFile} alt="New File" />
          <h1>New File</h1>
        </div>
        <hr />
        <div className="newPaste" onClick={handleClickModalNewFolder}>
          <img src={newBinder} alt="New Folder" />
          <h1>New Folder</h1>
        </div>
        {modalNewFolder && <FormNewFolder xPos={xPos} yPos={yPos} path={path}/>}
        {modalNewFile && <FormNewFile xPos={xPos} yPos={yPos} path={path} />}
      </main>
    </>
  );
}

export default ContextComponent;
