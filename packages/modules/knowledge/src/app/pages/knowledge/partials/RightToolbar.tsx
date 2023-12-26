import { FC } from "react";
import { ToolsBoxToggleDrawer } from "./tools-box/ToolsBoxToggleDrawer";
import { ToggleMyFavoriteDrawer } from "./my-favorite/ToggleMyFavoriteDrawer";
import { ToolsBoxDrawer } from "./tools-box/ToolsBoxDrawer";
import { MyFavoriteDrawer } from "./my-favorite/MyFavoriteDrawer";
import { useIntl } from "react-intl";

const RightToolbar: FC<any> = ({ removeFromCardList, removeFromTableList }) => {
  const { locale } = useIntl();

  return (
    <>
      <div
        style={{
          left: locale == "ar" ? "0%" : "",
          right: locale == "en" ? "0%" : "",
        }}
        className="engage-toolbar d-flex position-fixed px-5 fw-bolder zindex-2 top-50 transform-90 mt-20 gap-2"
      >
        <ToolsBoxToggleDrawer
          removeFromCardList={removeFromCardList}
          removeFromTableList={removeFromTableList}
        />
        <ToggleMyFavoriteDrawer />
      </div>

      {/* <ToolsBoxDrawer
        removeFromCardList={removeFromCardList}
        removeFromTableList={removeFromTableList}
      /> */}
      {/* <ToolsBoxDrawer /> */}
      {/* <MyFavoriteDrawer /> */}
    </>
  );
};

export { RightToolbar };
