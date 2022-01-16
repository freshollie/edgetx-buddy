import { Space } from "antd";
import React from "react";
import useIsMobile from "renderer/hooks/useIsMobile";

export const StepControlsContainer: React.FC = ({ children }) => (
  <div
    style={{
      marginTop: "16px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }}
  >
    <Space>{children}</Space>
  </div>
);

export const StepContentContainer: React.FC = ({ children }) => (
  <div
    style={{
      minHeight: 0,
      height: "100%",
      padding: useIsMobile() ? "0px" : "16px",
    }}
  >
    {children}
  </div>
);
