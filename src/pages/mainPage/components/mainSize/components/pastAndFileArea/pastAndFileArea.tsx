import { useState, useEffect } from "react";
import ContextComponent from "../pastAndFileArea/components/contextComponent/contextComponent";
import {
  viewAllUserFolder,
  viewAllUserFiles,
} from "../../../../../../services/api";
import newBinder from "../../../../../../assets/newBinder.png";
import logoMEM from "../../../../../../assets/logoMEM.png";
import logoDED from "../../../../../../assets/logoDED.png";
import "../../../../../../styles/global.css";
import "./pastAndFileArea.css";

function PastAndFileArea({ path, setPath }: { path: any; setPath: any }) {
  const token = localStorage.getItem("token");
  const [userFolders, setUserFolder] = useState<any[]>([]);
  const [userFiles, setUserFiles] = useState<any[]>([]);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleRightClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!contextMenuVisible) {
      setContextMenuPosition({
        x: event.clientX - 190,
        y: event.clientY,
      });
    }
    setContextMenuVisible(true);
    return;
  };

  useEffect(() => {
    const closeContextMenuOnRightClick = (event: any) => {
      if (event.button === 2 && contextMenuVisible) {
        setContextMenuVisible(false);
      }
    };

    const addContextMenuOnRightClickRelease = (event: any) => {
      if (event.button === 2 && !contextMenuVisible) {
        setContextMenuPosition({
          x: event.clientX,
          y: event.clientY,
        });
        setContextMenuVisible(true);
      }

      document.addEventListener("mousedown", closeContextMenuOnRightClick);
      document.addEventListener("mouseup", addContextMenuOnRightClickRelease);
    };

    return () => {
      document.removeEventListener("mousedown", closeContextMenuOnRightClick);
      document.removeEventListener(
        "mouseup",
        addContextMenuOnRightClickRelease
      );
    };
  }, [contextMenuVisible]);
  useEffect(() => {
    const viewAllFolder = async () => {
      try {
        const response = await viewAllUserFolder(token as string);
        setUserFolder(response.data);
      } catch (error) {
        console.error(error);
        setUserFolder([]);
      }
    };

    viewAllFolder();
  }, [token]);

  useEffect(() => {
    const viewAllUserFile = async () => {
      try {
        const response = await viewAllUserFiles(token as string);
        setUserFiles(response.data);
      } catch (error) {
        console.error(error);
        setUserFiles([]);
      }
    };

    viewAllUserFile();
  }, [token]);

  const validateFolders = userFolders.filter((item) => {
    return item.path === path;
  });
  const validateFiles = userFiles.filter((item) => {
    return item.path === path;
  });

  interface LogoMapping {
    [key: string]: string;
  }
  const logoMapping: LogoMapping = {
    "Mutants & Masterminds": logoMEM,
    "Dungeons and Dragons 5e": logoDED,
  };

  return (
    <>
      <main
        className="containerPastAndFileArea"
        onContextMenu={handleRightClick}
      >
        {contextMenuVisible && (
          <ContextComponent
            xPos={contextMenuPosition?.x as number}
            yPos={contextMenuPosition?.y as number}
            setContext={setContextMenuVisible}
            path={path}
          />
        )}
        <section className="sectionPast">
          <h1 className="titlePast">Folders</h1>
          <div className="folderPart">
            {validateFolders &&
              userFolders.map((folder, index) => {
                return (
                  <div key={index} className="folders">
                    <img src={newBinder} />
                    <h1>{folder.name}</h1>
                  </div>
                );
              })}
          </div>
        </section>
        <section className="sectionFiles">
          <h1 className="titlePast">Files</h1>
          <div className="filePast">
            {validateFiles &&
              userFiles.map((file, index) => {
                const logoPath = logoMapping[file.type] || "caraio";
                return (
                  <div key={index} className="files">
                    <img src={logoPath} alt="logo" />
                    <h1>{file.name}</h1>
                  </div>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}

export default PastAndFileArea;
